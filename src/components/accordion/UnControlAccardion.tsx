import React, { useState } from 'react';

type AccordionPropsType = {
  titleValue: string
}

function UnControlAccordion(props: AccordionPropsType) {

  let [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {collapsed && <AccordionBody title={props.titleValue} /> }
      <div>
        <button onClick={() => setCollapsed(!collapsed) }>TOGLE</button>
      </div>
    </div>
  )
}

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

export default UnControlAccordion;