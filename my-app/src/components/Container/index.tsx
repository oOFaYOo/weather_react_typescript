import React from "react";
import "./style.css";
import {PureComponent} from "react";
import Search from "./Search";
import City from "./City";
import Week from "./Week";


class Container extends PureComponent{
    state = {

    }

    public render(){
        return(
            <div className="container">
                <Search />
                <City />
                <Week />
            </div>
        )
    }
}

export default Container;