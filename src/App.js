import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';

const HatsPage =()=>{
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
)};

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  path="/topics" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
