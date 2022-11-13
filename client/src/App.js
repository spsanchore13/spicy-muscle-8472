import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>

  );
}

export default App;
