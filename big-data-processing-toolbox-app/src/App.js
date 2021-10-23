import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Welcome to Big Data Processing Toolbox
      </header>
      <div>
        <h4 className="App-content">
          Please select application that you want to run.
        </h4>
        <div>
          <a className="App-link" target="_blank" href="/hadoop">
            Apache Hadoop
          </a>
          <br/><br/>
          <a className="App-link" target="_blank" href="/spark">
            Apache Spark
          </a>
          <br/><br/> 
          <a className="App-link" target="_blank" href="/jupyter" >
            Jupyter Notebook
          </a>
          <br/><br/> 
          <a className="App-link" target="_blank" href="/sonar">
            SonarQube and SonarScanner
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
