import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path='/dashboard' component={Dashboard} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App