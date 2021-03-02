import './App.css';
import CreateUrl from './components/CreateUrl';

function App() {
  return (
    <div className="App">
      <h1>Url Shortener</h1>

      <div id="form-container">
        <CreateUrl></CreateUrl>
      </div>
      

    </div>
  );
}

export default App;
