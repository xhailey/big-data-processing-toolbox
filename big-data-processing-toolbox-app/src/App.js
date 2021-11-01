import './App.css';

function App() {
  var hadoopIp = "127.0.0.1";
  var sparkIp = "127.0.0.1";
  var jupyterIp = "127.0.0.1";
  var sonarqubeIp = "127.0.0.1";

  var hadoopUrl = "http://" + hadoopIp;
  var sparkUrl = "http://" + sparkIp;
  var jupyterUrl = "http://" + jupyterIp + "?token=easytoken";
  var sonarqubeUrl = "http://" + sonarqubeIp;
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
          <a className="App-link" target="_blank" href={hadoopUrl}>
            Apache Hadoop
          </a>
          <br/><br/>
          <a className="App-link" target="_blank" href={sparkUrl}>
            Apache Spark
          </a>
          <br/><br/> 
          <a className="App-link" target="_blank" href={jupyterUrl} >
            Jupyter Notebook
          </a>
          <br/><br/> 
          <a className="App-link" target="_blank" href={sonarqubeUrl}>
            SonarQube and SonarScanner
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
