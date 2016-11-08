import React from  'react' ; 
import loadjs from  'loadjs' ; 

export default class Contact extends React.Component {
    
    constructor() {
        super() ; 
    }

    componentDidMount() {
        
        var map ; 
        var myLatLng = {lat: 48.79327289999999,  lng: 2.3999681000000237} ; 
        window.initMap= function () {
            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 17
            });

            var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Samir Residence'
            });
        }

    loadjs ("https://maps.googleapis.com/maps/api/js?key=AIzaSyD0MkBVgpSJcHZmaX58DdbfDXsHJMMqfU4&callback=initMap") ;     
    }

    render () {
        return  (
            
            <div class="container">
              <h1> location</h1>
                <div id="map"></div>
            </div>
        ) ;
    }
}