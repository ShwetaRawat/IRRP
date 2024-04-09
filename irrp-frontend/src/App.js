import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/common/LandingPage';
import LoginPage from './pages/common/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path='/signin' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
