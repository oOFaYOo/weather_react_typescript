import React from "react";
import "./style.css";
import {PureComponent} from "react";
import Day from "./Day";
import WeatherForDay from "../../../templateWeatherForDay";

interface IWeekProps {
    weatherForDays: WeatherForDay[];
}

class Week extends PureComponent<IWeekProps>{
    public render (): React.ReactNode{
        const DayElements = this.props.weatherForDays.map((item, index) =>
            <Day weather={item} isFirst={index===0}/>);
        return (
            <div className="week">
                {DayElements}
            </div>
        )
    }
}

export default Week;