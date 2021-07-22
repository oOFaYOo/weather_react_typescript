import React from "react";
import "./style.css";
import {PureComponent} from "react";

interface ICityProps {
    cityName: string|null
}


class City extends PureComponent<ICityProps>{
   public render(): React.ReactNode{
        return(
            this.props.cityName ?
            <div id="get_city">{this.props.cityName}</div>
            : null
        )
    }
}

export default City;