import { Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     {/* <Link to="footer" >footer</Link><br/> */}
      {/* <Link to="cartadd" >cartAdd</Link> */}
<AllRoutes />
    </div>
  );
}

export default App;
