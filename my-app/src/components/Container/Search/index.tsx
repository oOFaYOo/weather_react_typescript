import React, {FormEvent} from "react";
import "./style.css";
import {Component, PureComponent} from "react";


interface ISearchProps {
    handleSearch:(city:string|null) => {}
}

class Search extends Component<ISearchProps>{

    public render(): React.ReactNode{
        return (
            <div id="search">
                <form onSubmit={(e:FormEvent<HTMLFormElement>)=>{
                    this.props.handleSearch((e.currentTarget.elements.namedItem("city") as HTMLInputElement).value);
                    (e.currentTarget.elements.namedItem("city") as HTMLInputElement).value = "";
                    e.preventDefault();
                }}>
                    <label>Город:
                        <input name="city" id="set_city" placeholder="Название города" />
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