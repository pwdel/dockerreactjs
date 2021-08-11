import logo from './logo.svg';
import bluecircle from './bluecircle.svg';
import reddownarrow from './reddownarrow.svg';
import greenuparrow from './greenuparrow.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bluecircle} className="App-recommend" alt="hold" />
        <img src={reddownarrow} className="App-recommend" alt="sell" />
        <img src={greenuparrow} className="App-recommend" alt="buy" />
        <p>
          Hold
        </p>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
