import './App.css';
import config from './config';

function App() {
  var hadoopUrl = "http://" + config.hadoopIp;
  var sparkUrl = "http://" + config.sparkIp;
  var jupyterUrl = "http://" + config.jupyterIp + "?token=easytoken";
  var sonarqubeUrl = "http://" + config.sonarqubeIp;
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
