import React from 'react' ; 
import  {Link} from  'react-router' ; 

export default class Header extends React.Component {
    constructor (props) {
        super(props) ; 
        
        this.state = {
           title: props.title 
        }  
    }  

    changeState (e) {
        console.log(e.target.value) ; 
        this.setState({title : e.target.value} )  ; 
    }

    render () {
        return  ( 
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand" to="/">Samir Corp</Link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <Link to="/services"> Services</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        ) ; 
    }
}