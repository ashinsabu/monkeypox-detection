import '../App.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "./About.css"
import ashinImage from "../assets/ashin.jpg"
import rohanImage from "../assets/rohan.jpeg"
import adityaImage from "../assets/adityagupta.jpg"
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Twitter from "../assets/twitter.png";

const About = () => {
    return (
        <div>
            <NavBar curPage = {1}/>
            <div className="about-content">
                <h1>Overview of Research</h1>
                <h3 className='comingsoon'>Coming Soon...</h3>
                <p className='comingsoonsub'>Content will be available once research paper is published.</p>
                <div className="team-info">
                    <h1>The Team</h1>
                    <div className="team-cards">
                        <div className="team-member">
                            <img src={rohanImage} alt="Rohan Thorat" />
                            <div className="">
                                <h3>Rohan Thorat</h3>
                                <h4>Research, Literature & Model Development</h4>
                                <p>Student - CSE</p>
                                <p>Manipal University Jaipur</p>
                                <span className='about-socials'>
                                    <a href='https://www.linkedin.com/in/rohan-thorat-b1655a253/' target='__blank'>
                                        <img src={LinkedIn} alt='LinkedIn'/>
                                    </a>
                                    <a href='https://github.com/rohanthorat27' target='__blank'>
                                        <img src={GitHub} alt='GitHub'/>
                                    </a>
                                </span>
                                
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={ashinImage} alt="Ashin Sabu" />
                            <div>
                                <h3>Ashin Sabu</h3>
                                <h4>Web application and Model Deployment</h4>
                                <p>Student - CSE</p>
                                <p>Manipal University Jaipur</p>
                                <span className='about-socials'>
                                    <a href='https://www.linkedin.com/in/ashin-sabu-1059a6175/' target='__blank'>
                                        <img src={LinkedIn} alt='LinkedIn' />
                                    </a>
                                    <a href='https://github.com/ashinsabu/' target='__blank'>
                                        <img src={GitHub} alt='GitHub'/>
                                    </a>
                                    <a href='https://twitter.com/ashinsabu3' target='__blank'>
                                        <img src={Twitter} alt='Twitter'/>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={adityaImage} alt="Aditya Gupta" />
                            <div>
                                <h3>Prof. Aditya Gupta</h3>
                                <h4>Mentor for Research and Literature</h4>
                                <p>Professor - CSE</p>
                                <p>Manipal University Jaipur</p>  
                                <span className='about-socials'>
                                    <a href='https://www.linkedin.com/in/aditya-gupta-946a24a1' target='__blank'>
                                        <img src={LinkedIn} alt='LinkedIn'/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About;