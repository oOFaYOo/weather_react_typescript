import React from 'react';
import './index.css';
import App from "./components/App";
import ReactDOM from "react-dom";
import Api from "./Api";

ReactDOM.render(<App api={new Api()} />, document.getElementById("root"));


