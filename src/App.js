import { useSelector } from "react-redux";
import {
  Redirect,
  Route, Switch
} from "react-router-dom";
import './assets/font-awesome-pro-master/font-awesome-pro-master/font-awesome-pro-master/css/all.css';
import './assets/style/style.scss';
import Header from "./Component/Header";
import ShowDataFeatures from './features/Data';
import FormFeature from './features/form';
import ProductFeature from "./features/Products";
import TodoFeatures from './features/Todo';
function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const newData=await productsApi.getAll()
  //     console.log(newData)
  //   }
  //   getData()
  // }, [])
  const stateAuth = !!(useSelector(state => state.user.current.id))
  return (
    <div className="App">
      <Header />
      {/* {stateAuth && ( */}
        <Switch>
          {/* <Route path="/" component={TodoFeatures}  exact/> */}
          <Route path="/todo" component={TodoFeatures} />
          <Route path="/data" component={ShowDataFeatures} />
          <Route path="/form" component={FormFeature} />
          <Route path="/products" component={ProductFeature} />
          <Redirect from="/" to="/products" />
        </Switch>
        
      {/* )} */}
      {/* {stateAuth && <TodoFeatures />} */}

    </div>
  );
}

export default App;
