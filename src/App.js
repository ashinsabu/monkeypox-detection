import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileNet from './pages/MobileNet';
import Home from './pages/Home';
import Trymodels from './pages/Trymodel'
const App = () => {
  return (
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Home/> } />
                <Route exact path="/try" element = {<Trymodels/> } />
                <Route exact path="/try/mobilenet" element = {<MobileNet/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
