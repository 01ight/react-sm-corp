import React from "react";
import Header from  './Header'  ;
import Footer from  './Footer' ; 
import Main from './Main' ; 

import ajax from '../services/Ajax' ;

 class Layout extends React.Component {

  constructor() {
   super() ; 
  }


  render () {
    return  (
      <div> 
        <Header  title = "react"/>
        {this.props.children}        
        <Footer  copyright = "copyright 2016! "/>
      </div>
    ) ;  
  }

}
export default  Layout  ; 