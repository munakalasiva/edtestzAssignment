import React from 'react';
import Layout from './components/Layout';
import {Route, Switch} from 'react-router-dom';
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

function App() {
  return (
     
  <Layout>
    <Switch>
       
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/location" component={GoogleMap}/>
        <Route exact path="/services" component={Services} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/application" component={Apply}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact us" component={ContactUs} />

  </Switch>
</Layout>
 
  );
}

export default App;
