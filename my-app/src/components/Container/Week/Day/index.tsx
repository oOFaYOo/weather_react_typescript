import React from "react";
import "./style.css";
import {PureComponent} from "react";

interface IDayProps {
    id: string,
    weekDay: string,
    maxTemp: number | string,
    minTemp: number | string,
    morning: number | string,
    day: number | string,
    evening: number | string,
    night: number | string,
    date: number | string,
    now: boolean
}

class Day extends PureComponent<IDayProps>{
    public render() {
        return (
            <div className="days {this.props.now?'now':null}" id={this.props.id}>
                <div className="main">
                    <div className="day">{this.props.weekDay}</div>
                    <div className="main_info">
                        <span className="max_day_temp">{this.props.maxTemp}</span><br />
                        <span className="min_day_temp">{this.props.minTemp}</span>
                    </div>
                </div>
                <div className="moreInfo">
                    <div className="info" hidden="" style="display: none;">
                        <span className="morn_temp">Утро: {this.props.morning}</span><br />
                        <span className="day_temp">День: {this.props.day}</span><br />
                        <span className="ev_temp">Вечер: {this.props.evening}</span><br />
                        <span className="night_temp">Ночь: {this.props.night}</span>
                    </div><br />
                    <div className="date">{this.props.date}</div>
                </div>
            </div>
        )
    }
}

export default Day;