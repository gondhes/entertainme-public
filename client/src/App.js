import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ApolloProvider } from '@apollo/client/react'
import client from "./config/graphql"

import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import MovieDetail from "./pages/MovieDetail"
import SeriesDetail from "./pages/SeriesDetail"
import AddMovie from "./pages/Add"
import UpdateMovie from "./pages/Edit"
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
            <Route path="/edit/:id">
              <UpdateMovie />
            </Route>
            <Route path="/add">
              <AddMovie />
            </Route>
            <Route path="/series/:id">
              <SeriesDetail />
            </Route>
            <Route path="/movies/:id">
              <MovieDetail />
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
