import React from 'react';
import "./ModelInputBox.css"
const ModelInputBox = ({ handleImageChange, handleThresholdChange, imgFile }) => {
    return (
        <div className='modelInputContainer'>
            <p className='container-title'>Upload an image file here (JPEG/PNG)</p>
            <div className='container-content'>
            <input type="file" onChange={handleImageChange}></input>
            
            <img src={imgFile? URL.createObjectURL(imgFile) : null} alt={imgFile? imgFile.name : null}/>
            </div>
            <p><span>Set Threshold(default = 0.5): <input type='number' max={1} min={0} defaultValue={0.5} step={0.01} onChange={handleThresholdChange}></input></span></p>
        </div>
)
}
export default ModelInputBox;