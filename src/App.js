import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Registration from './components/Login/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import AddTask from './components/Home/AddTask';

function App() {
  return (
    <div className="App bg-white">
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='/AddTask' element={<AddTask></AddTask>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
