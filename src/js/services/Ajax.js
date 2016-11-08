import React from  'react' ;
import  axios from 'axios' ; 

class Ajax {
    
    getData () {
        return axios.get("/data/data.json") ;
    }
} 

var ajax  = new Ajax() ; 
export default ajax  ; 