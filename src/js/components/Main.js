import React from  'react' ; 
import ajax from  '../services/Ajax';

export default class Main extends React.Component {

    constructor () {
        super() ;
        this.state = {
            data : []
        } 
    }
    
    componentWillMount() {
        ajax.getData().then(res => {
            this.setState({data : res.data }) ;
        }) ;  
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <ul class="list-group">
                        {
                            this.state.data.map( user =>
                            <li class="list-group-item" key={user.tweets}>{user.profile}</li>
                        )
                        }
                    </ul>
                </div>
            </div>
          ); 
    }
}