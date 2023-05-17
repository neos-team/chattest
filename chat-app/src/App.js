
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Comunity from './pages/Comunity';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='/ChatChannel' element={<Comunity/>}/>
    </Routes>
  );
}

export default App;
