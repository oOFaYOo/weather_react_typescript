import React from "react";
import "./style.css";
import {PureComponent} from "react";
import Search from "./Search";
import City from "./City";
import Week from "./Week";

interface IContainerProps {
    weather: object;
    searchingWeather: (city: string|null) => {};
    nameOfCity:string|null
}

class Container extends PureComponent<IContainerProps>{
    state = {

    }

    public render(): React.ReactNode{
        return(
            <div className="container">
                <Search handleSearch={this.props.searchingWeather} />
                <City cityName={this.props.nameOfCity} />
                <Week />
            </div>
        )
    }
}

export default Container;