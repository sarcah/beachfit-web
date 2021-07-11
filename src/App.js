import './App.css';
import React, { useState } from 'react';
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts"
import restProvider from 'ra-data-simple-rest';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignInForm from './components/SignInForm';
import { signIn, getToken } from "./api/auth";
import Home from "./front/Home";

function About() {
  return <h2>About</h2>;
}

function App() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(getToken());
  const signedIn = !!token;
  const requireAuth = render => props => (signedIn ? render(props) : <Redirect to="/admin" />);
  const handleSignIn = ({email, password}) => signIn(email, password).then(token => setToken(token));
  

  return (
    <div className="App">
      <Router>
      
      
      {
        !signedIn ?
          (<div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </nav>
          </div>) : null
        }

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin" render={() => (signedIn ? (
            <Admin dataProvider={restProvider(`${API_URL}`)}>
              <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            </Admin>
          ) : (<SignInForm onSignIn={handleSignIn} />))}>
            
          </Route>
        </Switch>

      </Router>

      
      {/* <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      </Admin> */}
    </div>
  );
}

export default App;
