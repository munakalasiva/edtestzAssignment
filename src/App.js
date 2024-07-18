import React from 'react';
import Layout from './components/Layout';
import {Route, Switch} from 'react-router-dom';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from './components/Home'
import Explore from "./components/Explore"
import Services from './components/Services'
import Careers from './components/Careers'
import About from './components/About'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import './App.css';

import Apply from "./components/Apply";
import GoogleMap from './components/GoogleMap';
import MorePOS from "./components/MorePOS";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

function App() {
  return (
     
  
  <Switch>
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/login" component={SignIn} />
      <Layout>
        <Route exact path="/home" component={Home} />
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/location" component={GoogleMap}/>
        <Route exact path="/services" component={Services} />
        <Route exact path="/moreaboutpos" component={MorePOS}/>
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/application" component={Apply}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
        <Route exact path="/termsofuse" component={TermsAndConditions}/>
      </Layout>  
  </Switch>

 
  );
}

export default App;
