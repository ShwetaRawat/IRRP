import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/common/LandingPage';
import LoginPage from './pages/common/LoginPage';
import AdminReqApproval from './pages/admin/AdminReqApproval';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path='/signin' element={<LoginPage/>} />
        <Route path='/adminReqApp' element={<AdminReqApproval/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
