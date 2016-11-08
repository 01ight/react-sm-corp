import React from "react";
import ReactDOM from "react-dom";

import {Router, Route , IndexRoute , browserHistory} from 'react-router' ; 

import Layout from "./components/Layout";

import Home from  "./components/pages/Home" ;
import Services from "./components/pages/Services" ; 
import Contact from  "./components/pages/Contact" ; 

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path= "/" component={Layout}>
            <IndexRoute  component={Home} > </IndexRoute>
            
            <Route path = "services" component = {Services}></Route>
            <Route path= "contact" component = {Contact}></Route>
        </Route>
    </Router>, app);
