import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App"> 
     <div class="container">
     <h1> Weather App</h1>
     <footer>
     This project was Coded by {""}
     <a
          className="App-link"
          href="https://www.linkedin.com/in/bridget-nnenna-chukwu-82a30b149"
          target="_blank"
          rel="noopener noreferrer"
        >
        Bridget Nnenna
        </a>
       {""} and open-sourced on {""}
        <a
          className="App-link"
          href="https://github.com/Queency31NSPPD/weather-project-react"
          target="_blank"
          rel="noopener noreferrer"
        >
        Github
        </a>
          </footer>
    </div>
    </div>
  );
}


