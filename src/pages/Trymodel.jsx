import '../App.css'
import './Trymodel.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const TryModel = () => {
    return (
        <div>
            <NavBar curPage = {2}/>
            <p>Try models</p>
            <Link to="/try/mobilenet" className='trybutton'>Try MobileNet V3 - The portable and faster but less accurate model</Link>
            <p style={{textAlign: "center", marginTop: 128, height: 800}}>empty lol</p>

            <Footer/>
        </div>
    )
}
export default TryModel;