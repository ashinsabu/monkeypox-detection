import '../App.css'
import './Trymodel.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import neuralNetImg from "../assets/pngegg.png"
import neuralnetImg2 from "../assets/simplenn.png"
import neuralnetImg3 from "../assets/xception.png"
const TryModel = () => {
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
                    <Link to="/try" className='trybox notworking'>
                        <img src = {neuralnetImg3} alt='MobileNet'></img>
                        <p className='model-choose-title'>ResNet50 V2</p>
                        <p className='model-choose-subtitle'>Our most accurate model</p> 
                        <p className='model-choose-subtitle'>NOT HOSTED YET</p> 
                    </Link>
                    <Link to="/try" className='trybox notworking'>
                        <img src = {neuralNetImg} alt='MobileNet'></img>
                        <p className='model-choose-title'>Xception</p>
                        <p className='model-choose-subtitle'>A mid sized dependable model</p> 
                        <p className='model-choose-subtitle'>NOT HOSTED YET</p> 
                    </Link>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}
export default TryModel;