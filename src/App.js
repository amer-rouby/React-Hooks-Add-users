import React from 'react';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import {Switch, Route} from "react-router-dom"
import Home from './Components/Home';
import GlobalProvider from "./Contexts/GlobalState"
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
