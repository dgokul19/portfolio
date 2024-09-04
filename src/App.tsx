import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/global/Navbar';
import HomeContainer from './components/HomeContainer';

// CSS
import './style/globals.css';

function App() {

  return (
    <div className="contentWrapper">
      <BrowserRouter basename="/">
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomeContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
