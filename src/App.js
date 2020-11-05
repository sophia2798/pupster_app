import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <p>hello</p>
    </div>
  </Router>
  );
}

export default App;
