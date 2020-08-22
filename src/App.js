import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Chat from './Screen/ChatScreen';
import Login from './Screen/LoginScreen';
import { useStateValue } from './provider/StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
        <Router>
          <Switch>
            <Sidebar/>
            <Route path="/rooms/:roomId">      
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>
      )}   
    </div>
  );
}

export default App;
