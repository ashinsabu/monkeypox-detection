import React from 'react'
import "./ModelOutputBox.css"
const ModelOutputBox = ({loading , predictedClass, threshold}) => {
    return (
        <div className='modelResultContainer'>
              <p className='container-title'>Output Tensor Information / Results</p>
              <div className='container-content'>
                  {loading?
                    <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' style={{width: 28}} alt="Loading..."></img>
                    :
                    (predictedClass === null) ? 
                      `No Output`
                      :
                      <div className='output-text'>
                        <div>
                          <p className='output-label'>Tensor Value</p>
                          <p className='result-text'>{predictedClass}</p>
                        </div>
                        <div>
                          <p className='output-label'>Classification</p> 
                          <p className={predictedClass<threshold?"result-text yes-span":"result-text no-span"}>{predictedClass<threshold?'Yes':'No'}</p>
                        </div>
                        <p className='output-label'>Current Classification Threshold</p>
                        <p className='result-text'>{threshold}</p>
                      </div>
                  }
              </div>
            </div>
    )
}
export default ModelOutputBox;