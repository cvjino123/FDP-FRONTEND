import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Add from './components/Add';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
      {/* <View/> */}
       
      {/* <Addemployee/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/add' element={<Add data = { {sname:'',age:'',pos:'',sal:''}}method = 'post'/>}/>
        <Route path='/view' element={<ViewEmployee></ViewEmployee>}/>

      </Routes>
    </div>
  );
}

export default App;
