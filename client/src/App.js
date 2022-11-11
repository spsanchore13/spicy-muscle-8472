import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';








function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
