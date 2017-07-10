import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, NotFoundRoute  } from 'react-router';
import LoginScreen from 'Components/LoginScreen.Component.jsx';
import SplashScreen from 'Components/SplashScreen.Component.jsx'; 
import SearchScreen from 'Components/SearchScreen.Component.jsx'; 
import SearchResults from 'Components/SearchResults.Component.jsx'; 
import NotFound from 'Components/NotFound.Component.jsx'; 
import Main from 'Components/Main.Component.jsx'; 
import MyProfile from 'Components/MyProfile.Component.jsx';
import OrgChart from 'Components/OrgChart.Component.jsx';
import Contact from 'Components/Contact.Component.jsx';
import Settings from 'Components/Settings.Component.jsx';
import AboutTheApp from 'Components/AboutTheApp.Component.jsx'
import TnC from 'Components/TnC.Component.jsx'
import App from 'views/App';
import Home from 'views/Home';
import About from 'views/About';
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
noopServiceWorkerMiddleware();
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ SearchScreen } />
      <Route path='about' component={ AboutTheApp } />
       <Route path = "splash" component = {SplashScreen} />
        <Route path = "login" component = {LoginScreen} />
        <Route path = "search" component = {SearchScreen} />
        <Route path = "myprofile" component = {MyProfile} />
        <Route path = "orgchart" component = {OrgChart} />
        <Route path = "contact" component = {Contact} />
        <Route path="settings" component = {Settings}/>
        <Route path="tnc" component = {TnC}/>
        <Route path="searchresults" component={SearchResults}/>
       <Route path = "*" component={NotFound} />
    </Route>
    
  </Router>,
  document.getElementById('root') 
);

registerServiceWorker();
