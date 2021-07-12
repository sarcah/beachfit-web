import './App.css';
import React, { useState } from 'react';
// import { Admin, Resource } from "react-admin";
import Admin from "./admin/Admin"
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import { PostList, PostEdit, PostCreate, PostIcon } from "./admin/posts"
import restProvider from 'ra-data-simple-rest';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignInForm from './components/SignInForm';
import { signIn, getToken } from "./api/auth";
import Home from "./front/Home";
import AdminHome from "./pages/home/Home";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import NewProduct from './pages/newProduct/NewProduct';
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";


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
        signedIn ?
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
          <Route exact path="/">            <Home />            </Route>
          <Route path="/about">             <About />           </Route>
          <Route path="/admin" render={() => (!signedIn ? ( 
            
            <Router>
              <Topbar />
              <div className="container-admin-sidebar">
                <Sidebar />
                <Switch>
                  <Route exact path="/admin"><AdminHome /></Route>
                  <Route exact path="/admin/users"><UserList /></Route>
                  <Route exact path="/admin/users/new"><NewUser /></Route>
                  <Route exact path="/admin/users/:userId"><User /></Route>
                  <Route exact path="/admin/products"><ProductList /></Route>
                  <Route exact path="/admin/products/new"><NewProduct /></Route>
                  <Route exact path="/admin/products/:productId"><Product /></Route>
                </Switch>
              </div>
            </Router>
            
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
