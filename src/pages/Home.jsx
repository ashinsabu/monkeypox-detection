import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
const Home = () => {
    return (
        <div>
            <NavBar curPage = {0}/>
            <p style={{textAlign: "center", marginTop: 128}}>HomePage</p>
        </div>
    )
}
export default Home;