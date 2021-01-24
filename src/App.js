import { BrowserRouter as Router, Route } from "react-router-dom";
import Choose from './components/choose';
import Count from './components/count';
import Materials from "./components/materials";
import WallperParametrs from "./components/wallper-parametrs";
import Result from "./components/result";
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Калькулятор цены конструкции</h1>
        <main>
          <Route path="/" exact component={Choose} />
          <Route path="/count" exact component={Count} />
          <Route path="/materials" exact component={Materials} />
          <Route path="/wallpers" exact component={WallperParametrs} />    
          <Route path="/result" exact component={Result} />          
        </main>
      </div>
    </Router>
  );
}

export default App;
