import './App.css';

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from './components/pages/discover'

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <Discover />
    </div>
  </Router>

  );
}

export default App;
