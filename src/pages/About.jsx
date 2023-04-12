import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
const About = () => {
    return (
        <div>
            <NavBar curPage = {1}/>
            <p style={{textAlign: "center", marginTop: 128}}>About the Research</p>
        </div>
    )
}
export default About;