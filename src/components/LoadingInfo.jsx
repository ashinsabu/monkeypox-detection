import React from 'react'

export const LoadingInfo = (props) => {
    let modelLoadProgress = props.modelLoadProgress
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height: '128px', padding: '16px', boxSizing:'border-box', flexDirection: 'column',gap:'32px'}}>
                <span>Downloading and initializing MobileNet from Cloud Resource...</span>
                <span style={{backgroundColor: '#00000046', padding:'4px'}}>Progress: {(Math.round(modelLoadProgress*100 * 100) / 100).toFixed(2)}%</span></p>
                <span>Download: {modelLoadProgress<0.5?<span>{(Math.round((modelLoadProgress/0.5)*100 * 100) / 100).toFixed(2)}%</span>:<span>Complete</span>}</span>
                {modelLoadProgress>=0.5?<span>Initialization: {(Math.round((modelLoadProgress-0.5)/0.5*100 * 100) / 100).toFixed(2)}%</span>:<></>}
        </div>
    )
}