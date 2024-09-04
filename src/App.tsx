import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/global/Navbar';
import HomeContainer from './components/HomeContainer';
import AboutContainer from './components/AboutContainer';

// Hooks
import { useBackGroundImage } from './Hooks/useBackGroundImage';

// CSS
import './style/globals.scss';

function App() {
  const { image } = useBackGroundImage();
  
  return (
    <div className="contentWrapper" style={{ backgroundImage : `url(${image})`}}>
      <Navbar />
      <div className='contentLayout'>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/about' element={<AboutContainer />} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
