import './App.css';
import React, { useState } from 'react';
import Topbar from "./admin/components/topbar/Topbar"
import Sidebar from "./admin/components/sidebar/Sidebar"
import AdminHome from "./admin/home/Home";
import BlogList from './admin/blogList/BlogList';
import Blog from './admin/blog/Blog';
import NewBlog from './admin/blogList/components/newBlog/NewBlog';
import PricingList from "./admin/pricingList/PricingList";
import FaqList from "./admin/faqList/FaqList";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import SignInForm from './admin/components/SignInForm';
import { signIn, getToken, TOKEN_KEY } from "./api/auth";
import Home from "./front/Home";
import About from "./front/About";
import FAQ from './front/FAQ';
import Timetable from './front/Timetable';
import Contact from './front/Contact';
import Pricing from './front/Pricing';
import Blogs from "./front/Blogs";
import Notification from './admin/components/notifications/Notification';


function App() {
  const [token, setToken] = useState(getToken());
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const signedIn = !!token;
  const requireAuth = render => (props => (signedIn ? render(props) : <Redirect to="/admin/signin" />));
  const handleNotification = (message, type) => { setNotify({ isOpen: 'true', message: message, type: type }); }

  const handleSignIn = ({email, password}) => signIn(email, password).then((response) => {
      handleNotification("Sucessfully signed in", 'success');
      setToken(response.headers.get("Authorization"));
    }).catch(response => { handleNotification("There was an error signing you in.", 'error') });

  return (
    <div className="App">
      <Notification notify={notify} setNotify={setNotify} />
      <Router>
        { signedIn ? <Redirect to="/admin" /> : <Redirect to="/" />  }

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/faq"><FAQ /></Route>
          <Route path="/timetable"><Timetable /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/pricing"><Pricing /></Route>
          <Route path="/blogs"><Blogs /></Route>
          <Route path="/admin/signin"><SignInForm onSignIn={handleSignIn} /></Route>
          <Route path="/admin" render={() => (signedIn ? (
            <Router>
              <Topbar notification={handleNotification} />
              <div className="container-admin-sidebar">
                <Sidebar />
                <Switch>
                  <Route exact path="/admin" render={requireAuth(() => (<AdminHome />))} />
                  <Route exact path="/admin/blogs" render={requireAuth(() => (<BlogList notification={handleNotification} />))} />
                  <Route exact path="/admin/blogs/1/posts/new" render={requireAuth(() => (<NewBlog notification={handleNotification} />))} />
                  <Route exact path="/admin/blogs/1/posts/:id" render={requireAuth((props) => (<Blog id={props.match.params.id} notification={handleNotification} />))} />
                  <Route exact path="/admin/pricings" render={requireAuth(() => (<PricingList notification={handleNotification} />))} />
                  <Route exact path="/admin/faqs" render={requireAuth(() => (<FaqList notification={handleNotification} />))} />
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