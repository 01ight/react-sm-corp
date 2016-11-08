import React from  'react' ; 

export default class Footer  extends React.Component {
    constructor () {
        super() ; 
    }
    
    render () {

        var today = new Date() ;
        var yyyy = today.getFullYear();

        return  (
            <footer>
                <div class="container footer" >
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <p>Copyright &copy; Samir Corp {yyyy}</p>
                        </div>
                    </div>
                </div>
            </footer>       
         ) ; 
    }
}