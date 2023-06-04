import React, { useState,useEffect } from 'react';
import { readImageFile } from '../utils/readImageFile';
import * as tf from '@tensorflow/tfjs';
import NavBar from '../components/NavBar';
import './Xception.css'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ModelOutputBox from '../components/ModelOutputBox';
import ModelInputBox from '../components/ModelInputBox';
import LoadingBar from 'react-top-loading-bar';
import { LoadingInfo } from '../components/LoadingInfo';
function Xception() {
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [predictedClass, setPredictedClass] = useState(null);
    const [imgFile,setImgFile] = useState(null);
    const [threshold,setThreshold] = useState(0.5);
    const [modelLoading, setModelLoading] = useState(true);
    const [modelLoadProgress, setModelLoadProgress] = useState(0);
    useEffect(() => {
       loadModel();
    }, []);
    
    const loadModel = async () => {
      // console.log("Downloading Model from cloud resource...")
      // const storage = getStorage();
      // const download_url = await getDownloadURL(ref(storage, 'mobilenet/model.json'))
      
      const download_url = "https://raw.githubusercontent.com/ashinsabu/monkeypox-website-models/main/xception/model.json";
      const model = await tf.loadLayersModel(download_url,  {onProgress: (x) => {
        setModelLoadProgress(x)
        console.log(x);
      }});
      
      setModel(model);
      // console.log("Model Downloaded and set!")
      setModelLoading(false);
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
        <LoadingBar height={4} color='white' shadow='false'  progress={modelLoadProgress*100}/>

        <NavBar curPage = {2}/>
        <div className="body-container">
          <span className='model-title-bar'><h3>Xception</h3></span>

          <div className='modelContainer mobilenetbg'>

            {modelLoading? 
            <LoadingInfo modelName = 'xception' modelLoadProgress ={modelLoadProgress}/>            : 
            <>
              <ModelInputBox handleImageChange={handleImageChange} handleThresholdChange={handleThresholdChange} imgFile={imgFile} />
              
              <ModelOutputBox loading = {loading} predictedClass ={predictedClass} threshold = {threshold} />
            </>
            }

            
          </div>
          
          <Link to="/try" className='close-button'>{"< Back to Model Page"}</Link>
          <p className='note'>Note: If loading is taking too long check your bandwidth, try reuploading the image or refreshing.</p>
        </div>
        <Footer/>
            
    </>);
}

export default Xception;
