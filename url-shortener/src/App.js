import './App.css';
import CreateUrl from './components/CreateUrl';
import Navigate from './components/Navigate';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/:shortUrl" component={Navigate}></Route>
          <Route exact path="/">
            <h1>Url Shortener</h1>
            <div id="form-container">
              <CreateUrl></CreateUrl>
            </div>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
