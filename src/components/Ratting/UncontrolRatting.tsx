import { useState } from "react"


type RattingPropsType ={
    value : 0 | 1 | 2 | 3 | 4 | 5
}


function UnRatting(props: RattingPropsType) {

    let [selectedValue, setSelectedValue] = useState(0)

    return (
        <div>
            <Star selected={selectedValue>= 1 } /> <button onClick = {()=> setSelectedValue(1)}>1</button>
            <Star selected={selectedValue>= 2 } /> <button onClick = {()=> setSelectedValue(2)}>2</button>
            <Star selected={selectedValue>= 3 } /> <button onClick = {()=> setSelectedValue(3)}>3</button>
            <Star selected={selectedValue>= 4} /> <button onClick = {()=> setSelectedValue(4)}>4</button>
            <Star selected={selectedValue>= 5 } /> <button onClick = {()=> setSelectedValue(5)}>5</button>
        </div>
    )
}

type StarpropsType ={ 
    selected : boolean;
}

function Star(props: StarpropsType) {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    }
    else {
        return <span>Star </span>
    }
}

export default UnRatting;