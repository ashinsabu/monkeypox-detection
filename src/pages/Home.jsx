import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <NavBar curPage = {0}/>
            <div className="hero">
                <h2>Highly accurate, </h2>
                <h1>State of the art </h1>
                <h2>Monkeypox Detection Models</h2>
                <div className='hero-bottom-buttons'>
                    <Link to="/research" id='viewResearch'><p>View research</p></Link>
                    <Link to="/try" id='viewPlayground'><p>Models Playground</p></Link>
                </div>
            </div>
            <p style={{textAlign: "center", marginTop: 128}}>HomePage</p>
            <Footer/>
        </div>
    )
}
export default Home;