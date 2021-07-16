import React from "react";
import "./style.css";
import {Component, PureComponent} from "react";


class Search extends Component {

    public render(){
        return (
            <div id="search">
                <form>
                    <label>Город:
                        <input id="set_city" placeholder="Название города" />
                            <button id="getWeather">
                                <img src="glass.png" alt="" />Найти
                            </button>
                    </label>
                </form>
            </div>
        )
    }

}

export default Search;