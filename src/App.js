import Search from './components/Search'
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/about/About";
import Discover from "./components/pages/discover/index";
// import Search from "./components/search/search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
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
