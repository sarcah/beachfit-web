import './App.css';
import React, { useState } from 'react';
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignInForm from './components/SignInForm';
import { signIn, getToken } from "./api/auth";
import Home from "./front/Home";
import AdminHome from "./admin/home/Home";
import BlogList from './admin/blogList/BlogList';
import Blog from './admin/blog/Blog';
import NewBlog from './admin/blogList/components/newBlog/NewBlog';
import PricingList from "./admin/pricingList/PricingList";
import FaqList from "./admin/faqList/FaqList";
import About from "./front/About";

function App() {
  const [token, setToken] = useState(getToken());
  const signedIn = !!token;
  const requireAuth = render => (props => (signedIn ? render(props) : <Redirect to="/admin/signin" />));
  const handleSignIn = ({email, password}) => signIn(email, password).then(([response, token]) => {
    setToken(token);
    return response;
  }).then(response => {console.log(response)}).catch();
  
  return (
    <div className="App">
      <Router>
        { signedIn ? <Redirect to="/admin" /> : null }

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
                  <Route exact path="/admin" render={requireAuth(() => (<AdminHome />))} />
                  <Route exact path="/admin/blogs" render={requireAuth(() => (<BlogList />))} />
                  <Route exact path="/admin/blogs/1/posts/new" render={requireAuth(() => (<NewBlog />))} />
                  <Route exact path="/admin/blogs/1/posts/:id" render={requireAuth((props) => (<Blog id={props.match.params.id} />))} />
                  <Route exact path="/admin/pricings" render={requireAuth(() => (<PricingList />))} />
                  <Route exact path="/admin/faqs" render={requireAuth(() => (<FaqList />))} />
                </Switch>
              </div>
            </Router>
            
            ) : (<Redirect to="/admin/signin" />))}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;