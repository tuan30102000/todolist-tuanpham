import './App.css';
import TodoFeatures from './features/Todo';
import ShowDataFeatures from './features/Data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={TodoFeatures}/>
      <Route path="/todo" exact component={TodoFeatures}/>
      <Route path="/data" exact component={ShowDataFeatures}/>
    </div>
  );
}

export default App;
