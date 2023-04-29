import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const About = () => {
    return (
        <div>
            <NavBar curPage = {1}/>
            <p style={{textAlign: "center", marginTop: 128, height: 800}}>read more about models links
            images
            link to research paper
            team images and introductions at bottom</p>
            
            <Footer/>
        </div>
    )
}
export default About;