import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/discover/About";
import Discover from "./components/discover/index";
import Search from "./components/discover/search";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Navbar />

      <Switch>
      <Route path="/" component={About} />
      <Route path="/discover" component={Discover} />
      <Route path="/search" component={Search} />
     <Route path="*">
        <h1>page not found</h1>
      </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
