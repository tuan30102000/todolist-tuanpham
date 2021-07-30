import {
  Route, Switch
} from "react-router-dom";
import './assets/style/style.scss';
import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css'
import ShowDataFeatures from './features/Data';
import TodoFeatures from './features/Todo';
import FormFeature from './features/form'
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={TodoFeatures} />
        <Route path="/todo" component={TodoFeatures} />
        <Route path="/data" component={ShowDataFeatures} />
        <Route path="/form" component={FormFeature} />
      </Switch>
    </div>
  );
}

export default App;
