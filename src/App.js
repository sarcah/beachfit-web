import './App.css';
import React, { useEffect, useState } from 'react';
import Topbar from "./admin/components/topbar/Topbar"
import Sidebar from "./admin/components/sidebar/Sidebar"
import AdminHome from "./admin/home/Home";
import BlogList from './admin/blogList/BlogList';
import Blog from './admin/blog/Blog';
import NewBlog from './admin/blogList/components/newBlog/NewBlog';
import PricingList from "./admin/pricingList/PricingList";
import FaqList from "./admin/faqList/FaqList";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignInForm from './admin/components/SignInForm';
import { signIn, getToken, API_URL } from "./api/auth";
import Home from "./front/Home";
import About from "./front/About";
import FAQ from './front/FAQ';
import Timetable from './front/Timetable';
import Contact from './front/Contact';
import Pricing from './front/Pricing';
import Blogs from "./front/Blogs";
import Notification from './admin/components/notifications/Notification';
import BlogPost from "./front/BlogPost";
import AllBlogs from "./front/AllBlogs";
import Settings from './admin/settings/Settings';
import axios from 'axios';

function App() {

  // Several states for components that are used for authentication and notification.
  const [token, setToken] = useState(getToken());
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [settings, setSettings] = useState(null);

  // signedIn and requireAuth check for Admin authentication
  const signedIn = !!token;
  const requireAuth = render => (props => (signedIn ? render(props) : <Redirect to="/admin/signin" />));

  // The handleNotification is a callback function used site-wide that creates a red/green notification on the top-right of the screen
  const handleNotification = (message, type) => { setNotify({ isOpen: 'true', message: message, type: type }); }

  // The function calls user authentication and sets session_token in local storage
  const handleSignIn = ({email, password}) => signIn(email, password).then((response) => {
      handleNotification("Sucessfully signed in", 'success');
      setToken(response.headers.get("Authorization"));
    }).catch(() => { handleNotification("There was an error signing you in.", 'error') });

  // Get Settings from the database
  useEffect(() => {
      let mounted = true;
      axios.get(`${API_URL}/settings`)
        .then(response => { if (mounted) setSettings(response.data) })
        .catch();
      return () => { mounted = false }
  }, [])

  return (
    <div className="App">
      <Notification notify={notify} setNotify={setNotify} />
      <Router>
        { signedIn ? <Redirect to="/admin" /> : <Redirect to="/" />  }

        <Switch>
          <Route exact path="/"><Home settings={settings} /></Route>
          <Route path="/about"><About settings={settings} /></Route>
          <Route path="/faq"><FAQ settings={settings} /></Route>
          <Route path="/timetable"><Timetable settings={settings} /></Route>
          <Route path="/contact"><Contact settings={settings} /></Route>
          <Route path="/pricing"><Pricing settings={settings} /></Route>
          <Route exact path="/blogs"><Blogs settings={settings} /></Route>
          <Route exact path="/blogs/all"><AllBlogs settings={settings} /></Route>
          <Route exact path="/blogs/:id" render={(props) => (<BlogPost settings={settings} id={props.match.params.id} />)} />
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
                  <Route exact path="/admin/settings" render={requireAuth(() => (<Settings notification={handleNotification} />))} />
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