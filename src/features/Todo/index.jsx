import React from 'react';
import PropTypes from 'prop-types';
import DetailPage from './Page/DetailPage';
import TodoPage from './Page/TodoPage';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import {
    Switch,
    Route,
    useLocation,
    useRouteMatch,
  } from "react-router-dom";
TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
  let location=useLocation()
  let Math=useRouteMatch()
  console.log(Math.path)
  console.log(location.pathname)
    return (
        <div>
            <Switch>
                <Route path={`${Math.path}`} exact component={TodoPage}/>
                <Route path={`${Math.path}/:param`}  component={DetailPage}/>
            </Switch>
        </div>
    );
}

export default TodoFeatures;