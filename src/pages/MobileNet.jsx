import React, { useState,useEffect } from 'react';
import { readImageFile } from '../utils/readImageFile';
import * as tf from '@tensorflow/tfjs';
import NavBar from '../components/NavBar';
import './MobileNet.css'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from '../firebase';
import ModelOutputBox from '../components/ModelOutputBox';

function Mobilenet() {
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [predictedClass, setPredictedClass] = useState(null);
    const [imgFile,setImgFile] = useState(null);
    const [threshold,setThreshold] = useState(0.5);
    const [modelLoading, setModelLoading] = useState(true);
    // const [predictions,setPredictions] = useState(null);
    useEffect(() => {
       loadModel();
    }, []);
    
    const loadModel = async () => {
      console.log("Downloading Model from cloud resource...")
      const storage = getStorage();
      // const download_url = await getDownloadURL(ref(storage, 'mobilenet/model.json'))
      
      const download_url = "https://raw.githubusercontent.com/ashinsabu/monkeypox-website-models/main/mobilenet/model.json";
      const model = await tf.loadLayersModel(download_url);
      
      setModel(model);
      console.log("Model Downloaded and set!")
    };

    const createHTMLImageElement = (imageSrc) => {
      return new Promise((resolve) => {
        const img = new Image();
    
        img.onload = () => resolve(img);
    
        img.src = imageSrc;
      });
    };

    const handleImageChange = async (e) => {
        let files = [];
        files[0] = e.target.files[0];
        setImgFile(e.target.files[0]);
        // console.log(e);
        // console.log(e);
        if (files.length === 0) {
          setPredictedClass(null);
        }
      
        if (files.length === 1) {
          setLoading(true);
      
          const imageSrc = await readImageFile(files[0]);
          const image = await createHTMLImageElement(imageSrc);
      
          // tf.tidy for automatic memory cleanup
          const [predictedClass] = tf.tidy(() => {
            let tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
            // let scale = tf.tensor1d([0,1]);
            // tensorImg = tf.batchNorm(tensorImg,tf.moments(tensorImg).mean,tf.moments(tensorImg).variance,undefined, scale );
            tensorImg = tensorImg.div(255);
            // console.log(tensorImg.dataSync());
            const result = model.predict(tensorImg);
            // console.log(model.summary());
            const predictions = result.dataSync();
            // setPredictions(predictions);
            // console.log(predictions);
            // CSSImportRule.log()

            // const predicted_index = result.as1D().argMax().dataSync()[0];
            // console.log("Predicted Index: " + predicted_index);

            // const predictedClass = classLabels[predicted_index];
            const predictedClass = predictions[0];
            return [predictedClass];
          });
      
          setPredictedClass(predictedClass);
          setLoading(false);
        }
      };
      const handleThresholdChange = (e) => {
        console.log(e.target.value);
        if(e.target.value < 0 || e.target.value > 1){
          alert("Threshold not changed! (Range is 0-1)");
          return;
        }
        if(e.target.value === ""){
          setThreshold(0);
          return;
        }
        setThreshold(e.target.value);
      }
    return (
    <>
        <NavBar curPage = {2}/>
        <div className="body-container">
          <span className='model-title-bar'><h3>MobileNet V2</h3></span>

          <div className='modelContainer'>

            <div className='modelInputContainer'>
              <p className='container-title'>Upload an image file here (JPEG/PNG)</p>
              <div className='container-content'>
                <input type="file" onChange={handleImageChange}></input>
                
                <img src={imgFile? URL.createObjectURL(imgFile) : null} alt={imgFile? imgFile.name : null}/>
              </div>
              <p><span>Set Threshold(default = 0.5): <input type='number' max={1} min={0} defaultValue={0.5} step={0.01} onChange={handleThresholdChange}></input></span></p>
            </div>

            <ModelOutputBox loading = {loading} predictedClass ={predictedClass} threshold = {threshold} />
            
          </div>
          
          <Link to="/try" className='close-button'>{"< Back to Model Page"}</Link>
          <p className='note'>Note: If loading is taking too long try reuploading the image.</p>
        </div>
        <Footer/>
            
    </>);
}

export default Mobilenet;
