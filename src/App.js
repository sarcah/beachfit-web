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
import BlogList from './pages/blogList/BlogList';
import Blog from './pages/blog/Blog';
import NewBlog from './pages/newBlog/NewBlog';
import NewPricing from './pages/newPricing/NewPricing';
import PricingList from "./pages/pricingList/PricingList";
import Pricing from "./pages/pricing/Pricing";


function About() {
  return <h2>About</h2>;
}

function App() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [token, setToken] = useState(getToken());
  const [flash, setFlash] = useState('');
  const signedIn = !!token;
  const requireAuth = render => props => (signedIn ? render(props) : <Redirect to="/admin/signin" />);
  const handleSignIn = ({email, password}) => signIn(email, password).then(([response, token]) => {
    console.log(token)
    setToken(token);
    return response;
  }).then(response => {console.log(response)}).catch();
  
  return (
    <div className="App">
      { flash && <>flash</> }
      <Router>
      {
        signedIn ?
          <Redirect to="/admin" /> : null
        }

        <Switch>
          <Route exact path="/">            <Home />            </Route>
          <Route path="/about">             <About />           </Route>
          <Route path="/admin/signin"><SignInForm onSignIn={handleSignIn} /></Route>
          <Route path="/admin" render={() => (signedIn ? ( 
            
            <Router>
              <Topbar />
              <div className="container-admin-sidebar">
                <Sidebar />
                <Switch>
                  <Route exact path="/admin"><AdminHome /></Route>
                  <Route exact path="/admin/blogs"><BlogList /></Route>
                  <Route exact path="/admin/blogs/1/posts/new"><NewBlog /></Route>
                  <Route exact path="/admin/blogs/1/posts/:id" render={(props) => <Blog id={props.match.params.id} />} />
                  <Route exact path="/admin/pricings"><PricingList /></Route>
                  <Route exact path="/admin/pricings/new"><NewPricing /></Route>
                  <Route exact path="/admin/pricings/:productId"><Pricing /></Route>
                  <Route exact path="/admin/faqs"><PricingList /></Route>
                  <Route exact path="/admin/faqs/new"><NewPricing /></Route>
                  <Route exact path="/admin/faqs/:productId"><Pricing /></Route>
                </Switch>
              </div>
            </Router>
            
            ) : (<Redirect to="/admin/signin" />))}>
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
