import '../App.css'
import './Trymodel.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import neuralNetImg from "../assets/pngegg.png"
import neuralnetImg2 from "../assets/simplenn.png"
import neuralnetImg3 from "../assets/xception.png"
import { useEffect } from 'react';
import { analytics } from '../firebase';
import { setCurrentScreen,logEvent } from 'firebase/analytics';
const TryModel = () => {
    useEffect(() => {
        setCurrentScreen(analytics,'Trymodel')
        logEvent(analytics, 'screen_view', {
            screen_name: 'Trymodel',
            screen_class: 'Trymodel',
        });
      }, []);
    return (
        <div>
            <NavBar curPage = {2}/>
            <div className="middle-container">
                <h2>Choose Model to Test</h2>
                <div className="model-choose-container">
                    <Link to="/try/mobilenet" className='trybox'>
                        <img src = {neuralnetImg2} alt='MobileNet'></img>
                        <p className='model-choose-title'>MobileNet V2</p>
                        <p className='model-choose-subtitle'>The portable and faster but less accurate model</p> 
                    </Link>
                    
                    <Link to="/try/xception" className='trybox'>
                        <img src = {neuralNetImg} alt='MobileNet'></img>
                        <p className='model-choose-title'>Xception</p>
                        <p className='model-choose-subtitle'>A mid-sized graph based model that trades accuracy for faster predictions</p> 
                    </Link>

                    <Link to="/try/resnet" className='trybox'>
                        <img src = {neuralnetImg3} alt='MobileNet'></img>
                        <p className='model-choose-title'>ResNet50 V2</p>
                        <p className='model-choose-subtitle'>Our MOST accurate model</p> 
                        <p className='model-choose-subtitle'>Slow to load and predict but highly accurate</p> 
                    </Link>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}
export default TryModel;