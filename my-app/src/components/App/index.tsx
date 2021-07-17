import React from "react";
import ErrorIncorrectCity from "../ErrorIncorrectCity";
import {PureComponent} from "react";
import Container from "../Container";
import "./style.css";

interface IAppProps {
    Api: object|any;
}

interface IAppState {
    allWeatherData:object;
    error:boolean|null;
    nameOfCity: string|null;
}

class App extends PureComponent<IAppProps, IAppState>{

    state:IAppState = {
        allWeatherData:{},
        error:false,
        nameOfCity: null
    }

    // shouldComponentUpdate() {
    //     if(this.state.error){
    //         setTimeout(()=>{this.setState({error:false})}, 3000);
    //     }
    // }

    public render(): React.ReactNode {
        return (
            <div className="just_div">
                <ErrorIncorrectCity isOpen={this.state.error} />
                <Container nameOfCity={this.state.nameOfCity} searchingWeather={this.searchingWeather} weather={this.state.allWeatherData}/>
            </div>
        )
    }

    searchingWeather = async (city: string|null) => {
        const weather = await this.props.Api.getWeatherFromAPI(city);
        if (weather) {
            this.setState(
                {
                    nameOfCity: weather.nameOfCityForHTML,
                    allWeatherData: weather,
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