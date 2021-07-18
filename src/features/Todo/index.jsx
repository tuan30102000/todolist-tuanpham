import React from 'react';
import {
  Route, Switch, useRouteMatch
} from "react-router-dom";
import DetailPage from './Pages/DetailPage';
import TodoPage from './Pages/TodoPage';
TodoFeatures.propTypes = {

};

function TodoFeatures(props) {  
  let Math=useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={Math.path} exact component={TodoPage}/>
                <Route path={`${Math.path}/:param`}  component={DetailPage}/>
            </Switch>
        </div>
    );
}
export default TodoFeatures;