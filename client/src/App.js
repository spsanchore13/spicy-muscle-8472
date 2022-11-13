import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer";
import AllRoutes from "./Routes/AllRoutes";

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
