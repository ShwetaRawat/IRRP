import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/common/LandingPage';
import LoginPage from './pages/common/LoginPage';
import Dashboard from './pages/faculty/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/signin' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
