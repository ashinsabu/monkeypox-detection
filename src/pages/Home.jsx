import '../App.css'
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import neuralNetImg from "../assets/pngegg.png"
import neuralnetImg2 from "../assets/simplenn.png"
import neuralnetImg3 from "../assets/xception.png"
const Home = () => {
    return (
        <>
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
                        <img src={neuralnetImg2} alt="MobileNet"></img>
                        <div>
                            <h1>MobileNet</h1>
                            <p className='info-text'>MobileNet V2 is a convolutional neural network (CNN) model that is designed for efficient image classification on mobile devices. It uses depthwise separable convolutions to reduce computation and model size. The model consists of a series of convolutional layers followed by depthwise separable convolutional layers, which separate spatial and channel-wise operations. </p>
                            <p className='info-text'>To customize MobileNet, additional layers can be added on top, such as fully connected layers for classification, or additional convolutional layers for feature extraction. These added layers can provide further customization and adaptation to specific tasks or datasets, making MobileNet a versatile option for mobile image recognition applications.</p>
                            <p className='info-text'>The implementation used here is a custom version. Read more about it in <Link className='within-text-link' to ="/research">the research.</Link></p>
                            <Link to="/try/mobilenet" className='box-with-white-hover-bg'><p>Try MobileNet {">>"}</p></Link>
                        </div>
                    </div>
                    <div className="info-container alternating">
                        <img src={neuralnetImg3} alt="ResNet"></img>
                        <div>
                            <h1>ResNet50</h1>
                            <p className='info-text'>ResNet50 V2 is a variant of the ResNet (Residual Network) model, which is a popular convolutional neural network (CNN) architecture for image classification. It was introduced as an improvement over the original ResNet model to further enhance its performance.</p>
                            <p className='info-text'>The ResNet architecture is known for using residual blocks, which address the vanishing gradient problem that can occur in deep neural networks. The vanishing gradient problem refers to the issue of gradients becoming too small during backpropagation, which can hinder the learning process. Residual blocks introduce skip connections, also known as shortcut connections, that allow for the direct flow of information from earlier layers to later layers. This allows the network to bypass unnecessary layers and enables training of deeper networks with improved gradient flow and reduced degradation in performance as the network gets deeper.</p>
                            <p className='info-text'>ResNet50V2 specifically consists of 50 layers, including convolutional layers, batch normalization layers, activation functions (such as Rectified Linear Units or ReLUs), global average pooling layers, and fully connected layers. It follows the "pre-activation" design, where batch normalization and activation functions are applied before the convolutional layers, allowing for better convergence during training.</p>
                            <p className='info-text'>The deployed model is large and may take a while to load. Read more about it in <Link className='within-text-link' to ="/research">the research.</Link></p>

                            <Link to="/try/resnet" className='box-with-white-hover-bg'><p>Try ResNet50 {">>"}</p></Link>                        </div>
                    </div>
                    <div className="info-container">
                        <img src={neuralNetImg} alt="Xception"></img>
                        <div>
                            <h1>Xception</h1>
                            <p className='info-text'>Xception is a convolutional neural network (CNN) architecture that was introduced as an extension of the Inception architecture, with the goal of improving efficiency and performance in image recognition tasks. Xception stands for "Extreme Inception," and it leverages depthwise separable convolutions, which are a more efficient alternative to traditional convolutional operations.</p>
                            <p className='info-text'>The key feature of Xception is the use of depthwise separable convolutions, which separate the spatial and channel-wise operations. In traditional convolutions, the same kernel is applied to all input channels, which can be computationally expensive. In depthwise separable convolutions, the spatial convolution is applied independently to each input channel, followed by a pointwise convolution that applies a 1x1 convolutional kernel to combine the output channels. This reduces the number of parameters and computations, resulting in a more efficient and compact network architecture.</p>
                            <span style={{color: "#ffffffa1"}}> Model not hosted yet due to size</span>
                        </div>
                    </div>
                    

                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Home;