import { useState } from "react"


type RattingPropsType ={
    
}


function UnRatting2(props: RattingPropsType) {

    let [value, setvalue] = useState(0)

    return (
        <div>
            <Star selected={value> 1 } /> <button onClick = {()=> setvalue(1)}>1</button>
            <Star selected={value> 2 } /> <button onClick = {()=> setvalue(2)}>2</button>
            <Star selected={value> 3 } /> <button onClick = {()=> setvalue(3)}>3</button>
            <Star selected={value> 4} /> <button onClick = {()=> setvalue(4)}>4</button>
            <Star selected={value> 5 } /> <button onClick = {()=> setvalue(5)}>5</button>
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

export default UnRatting2;