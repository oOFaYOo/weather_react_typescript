import React from "react";
import {PureComponent} from "react";
import "./style.css";

interface IIncorrectCityProps {
    isOpen: boolean|null
}

class IncorrectCity extends PureComponent<IIncorrectCityProps>{

    public render(): React.ReactNode{
        return (
            this.props.isOpen ?
            <div id="error">! ГОРОД НЕ НАЙДЕН. ПРОВЕРЬТЕ КОРРЕКТНОСТЬ ВВЕДЕННЫХ ВАМИ ДАННЫХ !</div>
            : null
        )
    }


}

export default IncorrectCity;