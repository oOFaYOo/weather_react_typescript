import React from "react";
import "./style.css";
import {PureComponent} from "react";
import Search from "./Search";
import City from "./City";
import Week from "./Week";
import WeatherForDay from "../../templateWeatherForDay";
import {WeatherWeekData} from "../../Api";


interface IContainerProps {
    weather: WeatherWeekData|null;
    searchingWeather: (city: string) => {};
    nameOfCity:string|null
}

class Container extends PureComponent<IContainerProps>{
    state = {

    }

    public render(): React.ReactNode{
        const arrOfDays: WeatherForDay[] = [];
        if(this.props.weather) {
            console.log(this.props.weather.daily);
            for (let i = 0; i < 7; i++) {
                arrOfDays.push(new WeatherForDay(
                    new Date((this.props.weather.daily[i].dt) * 1000),
                    this.props.weather.daily[i].temp.max,
                    this.props.weather.daily[i].temp.min,
                    this.props.weather.daily[i].temp.morn,
                    this.props.weather.daily[i].temp.day,
                    this.props.weather.daily[i].temp.eve,
                    this.props.weather.daily[i].temp.night
                ));
            }
        }
        console.log(arrOfDays);
        return(
            <div className="container">
                <Search handleSearch={this.props.searchingWeather} />
                {this.props.weather?<City cityName={this.props.nameOfCity} />:null}
                {this.props.weather?<Week weatherForDays={arrOfDays} />:null}
            </div>
        )
    }
}

export default Container;