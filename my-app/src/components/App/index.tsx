import React from "react";
import ErrorIncorrectCity from "../ErrorIncorrectCity";
import {PureComponent} from "react";
import Container from "../Container";
import "./style.css";
import Api, {WeatherWeekData} from "../../Api";

interface IAppProps {
    api: Api;
}

interface IAppState {
    allWeatherData: WeatherWeekData|null;
    error:boolean;
    nameOfCity: string|null;
}

class App extends PureComponent<IAppProps, IAppState>{

    state:IAppState = {
        allWeatherData: null,
        error:false,
        nameOfCity: null
    }

    public render(): React.ReactNode {

        return (
            <div className="just_div">
                <ErrorIncorrectCity isOpen={this.state.error} />
                <Container nameOfCity={this.state.nameOfCity}
                           searchingWeather={this.searchingWeather}
                           weather={this.state.allWeatherData}/>
            </div>
        )
    }

    searchingWeather = async (city: string) => {
        const weather = await this.props.api.getWeatherFromAPI(city);
        if (weather) {
            this.setState(
                {
                    nameOfCity: weather.nameOfCityForHTML,
                    allWeatherData: weather.objectWithWeatherData,
                }
            )
        } else if (!weather) {
            setTimeout(()=>{this.setState({error:false})}, 3000);
            this.setState(
                {
                    error: true
                }
            )
        }
    }

}

export default App;