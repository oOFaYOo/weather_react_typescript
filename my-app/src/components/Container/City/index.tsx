import React from "react";
import "./style.css";
import {PureComponent} from "react";

interface ICityProps {
    cityName: string
    isVisible:boolean
}

class City extends PureComponent<ICityProps>{
   public render(){
        return(
            this.props.isVisible ?
            <div id="get_city">{this.props.cityName}</div>
            : null
        )
    }
}

export default City;