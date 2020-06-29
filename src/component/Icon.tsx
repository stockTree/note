import React from "react";
require("assets/img/chart.svg")
require("assets/img/money.svg")
require("assets/img/tag.svg")

type String = {
    name:string
}
function Icon (props:String) {
    return (
        <svg>
            <use xlinkHref={'#'+ props.name}/>
        </svg>
    )
}
export default Icon