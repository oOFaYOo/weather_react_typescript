import React from "react";
import "./style.css";
import {PureComponent} from "react";
import WeatherForDay from "../../../../templateWeatherForDay";


interface IDayProps {
    weather: WeatherForDay;
    isFirst: boolean;
}

interface IDayState {
    isMainInfoOpen: boolean;
    isInfoOpen: boolean;
    isDateOpen: boolean;
}

class Day extends PureComponent<IDayProps, IDayState>{

    state = {
        isMainInfoOpen: true,
        isInfoOpen: false,
        isDateOpen: true
    }

    public render(): React.ReactNode {
        return (
            <div className={`days ${this.props.isFirst?"now":""}`} id={this.props.weather.id}>
                <div className="main">
                    <div className="day">{this.props.weather.dayOfWeek}</div>
                    <div className="main_info"
                         onClick={this.switchesInfo}
                         style={{display:`${this.state.isMainInfoOpen?"block":"none"}`}}>
                        <span className="max_day_temp">{this.props.weather.maxTemp}</span><br />
                        <span className="min_day_temp">{this.props.weather.minTemp}</span>
                    </div>
                </div>
                <div className="moreInfo">
                    <div className="info"
                         onClick={this.switchesInfo}
                         style={{display:`${this.state.isInfoOpen?"block":"none"}`}}>
                        <span className="morn_temp">Утро: {this.props.weather.morning}</span><br />
                        <span className="day_temp">День: {this.props.weather.day}</span><br />
                        <span className="ev_temp">Вечер: {this.props.weather.evening}</span><br />
                        <span className="night_temp">Ночь: {this.props.weather.night}</span>
                    </div><br />
                    <div className="date" style={{display:`${this.state.isDateOpen?"block":"none"}`}}>{this.props.weather.date}</div>
                </div>
            </div>
        )
    }


    switchesInfo = ():void => {
        this.setState({
            isMainInfoOpen: !this.state.isMainInfoOpen,
            isInfoOpen: !this.state.isInfoOpen,
            isDateOpen: !this.state.isDateOpen
        })
    }
}

export default Day;