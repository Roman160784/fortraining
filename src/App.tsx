import { type } from 'os';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion/Accordion'
import Ratting from './components/Ratting/Ratting'
import OnOff from '../src/components/useStatetraining'
import UnControlAccordion from '../src/components/accordion/UnControlAccardion'
import UnRatting from './components/Ratting/UncontrolRatting'
import UnRatting2 from './components/Ratting/UncontrolRatting'

function App() {
  return (
    <div className="App">
     
      <input type="date" />
      <PageTitle title={"This is App component"} />
      <PageTitle title={"User Page"} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      {/* <Accordion titleValue={"Menu"}/> */}
      <Ratting value={0} />
      <Ratting value={1} />
      <Ratting value={2} />
      <Ratting value={3} />
      <Ratting value={4} />
      <Ratting value={5} />
      <OnOff />
    
        <UnControlAccordion titleValue={"Menu"} />

      <UnRatting value={3}/>
      <UnRatting2 value={0}/>
    </div>

  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title} </h1>
}


export default App;
