import React, { useRef, useState,useEffect } from 'react';
import { readImageFile } from '../utils/readImageFile';
import * as tf from '@tensorflow/tfjs';

function Mobilenet() {
    const [model, setModel] = useState(null);
    const [classLabels, setClassLabels] = useState(null);
    const [loading, setLoading] = useState(false);
    const [predictedClass, setPredictedClass] = useState(null);
    const [imgSrc,setImgSrc] = useState(null);
    useEffect(() => {
      const loadModel = async () => {
        const model_url = "/finalmodel/model.json";
    
        const model = await tf.loadLayersModel(model_url);
        // console.log(model);
        setModel(model);
      };
    
      const getClassLabels = () => {
        setClassLabels(['pos','neg']);
      };
    
      loadModel();
      getClassLabels();
    }, []);
      
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
        setImgSrc(e.target.files[0]);
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
    return (
    <>
        <p>Test</p>
        <input type="file" onChange={handleImageChange}></input>
        <p>
            {loading?
            <>
                <span>Value: ...</span>
                <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' style={{width: 40}} alt="Loading..."></img>
            </>: (predictedClass === null) ? `Value: `:`Value: ${predictedClass}`}</p>
            
    </>);
}

export default Mobilenet;
