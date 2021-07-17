import {
  Route, Switch
} from "react-router-dom";
import './App.css';
import ShowDataFeatures from './features/Data';
import TodoFeatures from './features/Todo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={TodoFeatures} />
        <Route path="/todo" component={TodoFeatures} />
        <Route path="/data" component={ShowDataFeatures} />
      </Switch>
    </div>
  );
}

export default App;
