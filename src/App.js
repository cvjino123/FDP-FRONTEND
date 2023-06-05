import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <View/> */}
       
      {/* <Addemployee/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/add' element={<Addemployee></Addemployee>}/>
      </Routes>
    </div>
  );
}

export default App;
