import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Registration from './components/Login/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App bg-white">
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
