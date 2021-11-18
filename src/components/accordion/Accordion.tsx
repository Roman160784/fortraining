

type AccordionPropsType = {
  titleValue: string
   collapsed: boolean
}


// function Accordion(props: AccordionPropsType) {
  
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//         <AccordionBody title={props.titleValue} />
//       </div>
//     )
//   }
  

function Accordion(props: AccordionPropsType) {
  
    return <div>
      
        <AccordionTitle title={props.titleValue} />
        {!props.collapsed && <AccordionBody title={props.titleValue} />}
      </div>
    
  }
  // else 
  //   return (
  //     <div>
  //       <AccordionTitle title={props.titleValue} />
  //       <AccordionBody title={props.titleValue} />
  //     </div>
  //   )
  

  

type AccordionTitlePropsType = {
  title: string
  
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3> ----{props.title} ------</h3>
    </div>
  );
}

type AccordionBodyPropsType = {
  title: string
}
function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}

export default Accordion