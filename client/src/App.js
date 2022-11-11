import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Home2 from './components/Home2/Home2';
import {Navbar} from './components/Navbar/Navbar';








function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home2" element={<Home2/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
