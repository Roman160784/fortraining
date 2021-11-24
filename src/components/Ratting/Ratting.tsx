

type RattingPropsType ={
    value : 0 | 1 | 2 | 3 | 4 | 5
}


function Ratting(props: RattingPropsType) {
    
        return (
            <div>
                <Star selected={props.value> 0 }/>
                <Star selected={props.value> 1 } />
                <Star selected={props.value> 2 } />
                <Star selected={props.value> 3} />
                <Star selected={props.value> 4 } />
            </div>
        )
}

type StarpropsType ={
    selected : boolean;
}

function Star(props: StarpropsType) {
    if (props.selected === true) {
        return <span><b>Star</b> </span>
    }
    else {
        return <span>Star </span>
    }
}

export default Ratting;