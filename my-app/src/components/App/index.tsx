import React from "react";
import ErrorIncorrectCity from "./ErrorIncorrectCity";
import {PureComponent} from "react";



class App extends PureComponent{
    public render(){
        return (
            <div className="just_div">
                <ErrorIncorrectCity />
            </div>
        )
    }
}

export default App;