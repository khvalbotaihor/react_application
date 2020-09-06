import React, {useState} from "react";

type PropsnumbersType = 0|1|2|3|4|5;

type RatingPropsType = {
    value:0|1|2|3|4|5
}

export function Rating(props:RatingPropsType) {
    console.log("Rating rendering")

    let[value, setValue] = useState<PropsnumbersType>(0);

    return (
        <div>
            <Star selected={props.value>0}/><button  onClick={()=>{       setValue(value)       }}>1</button>
            <Star selected={props.value>1}/><button  onClick={()=>{          setValue(value) }}>2</button>
            <Star selected={props.value>2}/><button  onClick={()=>{       setValue(value)        }}>3</button>
            <Star selected={props.value>3}/><button  onClick={()=>{        setValue(value)        }}>4</button>
            <Star selected={props.value>4}/><button  onClick={()=>{      setValue(value)        }}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected:boolean
}

function Star(props:StarPropsType) {
    return (
        <span>{props.selected ? <b>star </b> : "start "}</span>
    )
    console.log("Start rendering")
}