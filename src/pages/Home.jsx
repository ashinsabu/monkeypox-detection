import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import neuralNetImg from "../assets/pngegg.png"
const Home = () => {
    return (
        <div>
            <NavBar curPage = {0}/>
            <div className="main-container">
                <div className="hero">
                    <h2>Highly accurate, </h2>
                    <h1>State of the art </h1>
                    <h2>Monkeypox Detection Models</h2>
                    <div className='hero-bottom-buttons'>
                        <Link to="/research" className='box-with-white-hover-bg'><p>View research</p></Link>
                        <Link to="/try" id='viewPlayground'><p>Models Playground </p></Link>
                    </div>
                </div>
                <div className='home-content'>
                    <h1>The models</h1>
                    <div className="info-container">
                        <img src={neuralNetImg} alt="ResNet"></img>
                        <div>
                            <h1>MobileNet V3</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid provident doloribus nesciunt accusantium nisi sunt aperiam perferendis sed ad voluptates quidem incidunt iure iste, sapiente accusamus ducimus nostrum ex illo?</p>
                            <Link to="/try/mobilenet" className='box-with-white-hover-bg'><p>Try MobileNet {">>"}</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;