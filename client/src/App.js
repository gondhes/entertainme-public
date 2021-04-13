import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ApolloProvider } from '@apollo/client/react'
import client from "./config/graphql"

import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import Detail from "./pages/Detail"
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/movies/:id">
              <Detail />
            </Route>
            <Route path="/fav">
              <Favorite />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
