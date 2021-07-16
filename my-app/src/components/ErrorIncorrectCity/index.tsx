import React from "react";
import {PureComponent} from "react";
import "./style.css";

interface IIncorrectCity {
    isOpen: boolean
}

class IncorrectCity extends PureComponent<IIncorrectCity>{
    public render():{
        return (
            this.props.isOpen ?
            <div id="error">! ГОРОД НЕ НАЙДЕН. ПРОВЕРЬТЕ КОРРЕКТНОСТЬ ВВЕДЕННЫХ ВАМИ ДАННЫХ !</div>
            : null
        )
    }
}

export default IncorrectCity;