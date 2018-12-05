// import WebRequest from "web-request";

// const baseUrl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws';
// const queryString = '?player=iron_frawsti';

// async function fetch() {
//     let element = document.createElement('div');

//     var result = await WebRequest.get(baseUrl + queryString);

//     element.innerHTML = result.content;

//     document.body.appendChild(element);
// }

// fetch();

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);