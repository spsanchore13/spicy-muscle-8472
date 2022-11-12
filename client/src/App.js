
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { Navbar } from "./components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />

    </div>
  );
}

export default App;
