import './App.css';
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import MobileNet from './pages/MobileNet';
import Home from './pages/Home';
import Trymodels from './pages/Trymodel'

const App = () => {
  return (
      <HashRouter>
            <Routes>
                <Route exact path="/" element = {<Home/> } />
                <Route exact path="/try" element = {<Trymodels/> } />
                <Route exact path="/try/mobilenet" element = {<MobileNet/>} />
            </Routes>
        </HashRouter>
  );
}

export default App;
