import React from "react";
import  { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react'
import './map.css'
 class MapContainer extends Component{
    render(){
        return(
            
            <Map google={this.props.google}
                zoom={18}
                style={{height:"400px",width:"100%",marginTop:"100px",display:"flex"}}
                initialCenter={{
                    lat:46.288792,
                    lng:23.742960}}
                
            />
           
        );
    }
}


export default GoogleApiWrapper(
    {apiKey:"AIzaSyAaCnyx39uvLAvN-zovBT6sWlKx1DhqV5Y"}
)(MapContainer)