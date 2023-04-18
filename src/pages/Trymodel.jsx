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
                <Link to="/try/mobilenet" className='trybox'>
                    <img src = {neuralnetImg2} alt='MobileNet'></img>
                    <p className='model-title'>MobileNet V3</p>
                    <p className='model-subtitle'>The portable and faster but less accurate model</p> 
                </Link>
            </div>

            <Footer/>
        </div>
    )
}
export default TryModel;