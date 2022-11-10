import { Link } from 'react-router-dom';
import './App.css';
import Tri from './Footer/Tri';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     {/* <Link to="footer" >footer</Link><br/> */}
      {/* <Link to="productpage" >product</Link> */}
    {/* <Tri /> */}
     <AllRoutes />
    </div>
  );
}

export default App;
