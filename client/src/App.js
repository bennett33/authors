import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
    <h1 className="text-center">Favorite Authors</h1>
        <Switch>
          <Route exact path="/authors/new">
            <Create />
          </Route>
          <Route exact path="/authors/:id/edit">
            <Update />
          </Route>
          <Route exact path="/authors">
            <Main />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
    
export default App;

