import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileNet from './pages/MobileNet';
import Home from './pages/Home';
import Trymodels from './pages/Trymodel'
import About from './pages/About';
import ResNet from './pages/ResNet';
import Xception from './pages/Xception';

const App = () => {
  return (
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Home/> } />
                <Route exact path="/research" element = {<About/> } />
                <Route exact path="/try" element = {<Trymodels/> } />
                <Route exact path="/try/mobilenet" element = {<MobileNet/>} />
                <Route exact path="/try/resnet" element = {<ResNet/>} />
                <Route exact path="/try/xception" element = {<Xception/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
