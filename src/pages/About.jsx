import '../App.css'
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "./About.css"
import ashinImage from "../assets/ashin.jpg"
import rohanImage from "../assets/rohan.jpeg"
import adityaImage from "../assets/adityagupta.jpg"
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Twitter from "../assets/twitter.png";
import { analytics } from '../firebase';
import { logEvent, setCurrentScreen } from 'firebase/analytics';
const About = () => {
    useEffect(() => {
        // Log event when the component mounts (user opens the homepage)
        // console.log('logged visit')
        // const analytics = getAnalytics();
        setCurrentScreen(analytics,'About')
        logEvent(analytics, 'screen_view', {
            screen_name: 'About',
            screen_class: 'About',
        });
    }, []);
    return (
        <div>
            <NavBar curPage = {1}/>
            <div className="about-content">
                <h1 style={{paddingBottom: '16px'}}>Overview of Research</h1>
                {/* <h3 className='comingsoon'>Coming Soon...</h3>
                <p className='comingsoonsub'>Content will be available once research paper is published.</p> */}
                <h4 className='prepaper'>This is a study conducted to explore deep learning, employing ResNet50V2, MobileNetV2, and Xception models trained on a dataset of monkeypox skin lesions. Augmented images aid in training, with additional layers for classification.</h4>
                <h4 className='prepaper'> Results show ResNet50V2 outperforming others, followed by Xception and MobileNetV2. These models offer promise for early monkeypox detection, particularly in resource-limited areas. Future plans include deploying a lightweight MobileNetV2-based web application to facilitate accessible and cost-effective diagnosis, thereby enhancing healthcare in rural communities.</h4>
                <h4 className='prepaper'>The paper relevant to these models and experimentation is published at Springer. Here is a short preview.</h4>
                <em style={{marginTop: '16px'}}><h4 className='prepaper'>Link to complete paper is below the preview</h4></em>
                <div className='research-paper-like-div'>
                    <h3>Transfer learning-enabled skin disease classification: </h3>
                    <h3>the case of monkeypox detection</h3>
                    <p style={{textAlign: 'center', color: 'grey', marginTop: '12px'}}>Rohan Thorat and Aditya Gupta</p>
                    <p style={{textAlign: 'right', marginBottom: '18px'}}>Published: 12 March 2024</p>
                    <hr style={{marginBottom: '24px'}}/>
                    <h4 style={{marginBottom: '18px'}}>Abstract</h4>
                    <p>In the midst of the continuing difficulties presented by the COVID-19 pandemic, the possible emergence of illnesses such as monkeypox places an additional and significant load on public health services that are already under pressure. Conventional diagnostic methods for monkeypox, reliant on polymerase chain reaction tests and biochemical assays on lesion swabs suffer from drawbacks such as patient discomfort and resource limitations, particularly in economically distressed areas of Western and Central Africa. This work investigates the application of deep learning techniques, specifically transfer learning using three trained CNN frameworks (ResNet50V2, MobileNetV2, and Xception), to accurately identify monkeypox.</p>
                    <p>Utilizing the "Monkeypox Skin Lesion Dataset," images of patients’ skin lesions are augmented and incorporated into the training and validation of the models. Additional layers for classifying monkeypox and non-monkeypox images are introduced. Evaluation metrics, with a focus on accuracy and F1-score, showcase the superior performance of the ResNet50V2-based model (0.9874 accuracy, F1-score of 0.99), followed by Xception (0.9546 accuracy, F1-score of 0.95), and MobileNetV2 (0.9452 accuracy, F1-score of 0.94). Comparative analysis with previous works in the field underscores the improved results achieved in this research. The proposed models offer a promising avenue for early monkeypox detection, contributing to effective preventive measures against its spread.</p>
                    <p>Looking ahead, we aim to deploy the developed MobileNetV2-based model as a web application, leveraging its lightweight architecture and notable accuracy. This initiative is intended to provide people in rural areas with a cost-effective and easily accessible solution for the early detection of monkeypox, contributing to improved healthcare in resource-constrained settings.</p>
                    <a href="https://doi.org/10.1007/s11042-024-18750-7" target='__blank'>Read more...</a>
                </div>
                <div className='metadata'>
                    <h3>Links</h3>
                    <hr style={{width: "100%"}}/>
                    <a className='paperlink' href="https://link.springer.com/article/10.1007/s11042-024-18750-7" target="__blank">{"> "}Read the paper here {" <"}</a>
                    <a href="https://doi.org/10.1007/s11042-024-18750-7" target='__blank'>{"> "}DOI{" <"}</a>
                    <a href='https://citation-needed.springer.com/v2/references/10.1007/s11042-024-18750-7?format=refman&flavour=citation'>{"> "}Dowload Citation{" <"}</a>
                    <p style={{color: 'grey'}}>Keywords: Deep Learning, Medical Imaging, Transfer Learning, Skin diseases, Computer Vision</p>
                </div>
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