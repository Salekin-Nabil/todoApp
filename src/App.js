import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App bg-white">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
