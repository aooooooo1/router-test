import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";
function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/routerproptest" component={RouterPropTest}/>
                <Route exact path="/routerproptestresult" component={RouterPropTestResult}/>
            </Router>
        </div>
    );
}

export default App;
