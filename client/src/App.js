import "./App.css";
import Footer from "./pages/Footer";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>

  );
}

export default App;
