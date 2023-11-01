
import React, { createContext, useState } from 'react';
import ChildComponent from './ChildComponent';


const messageContext = createContext();

function App() {
  const [message, setmessage] = useState("Hello child");

  return (
    <div>
      <h1>parentcomponent</h1>
      <p>hello message from parentcomponent{message}</p>
      <messageContext.Provider value={message}>
        <ChildComponent />
      </messageContext.Provider>
    </div>
  )
}

export { App as default, messageContext };



//childcomponent.jsx

import React, { createContext, useContext, useState } from 'react'

import Grandchildcomponent from './Grandchildcomponent';
const TextContext = createContext();
function ChildComponent() {

    const [text, settext] = useState("Hello from indrajith");
    // const TextContext = "who iam"
    return (
        <div>
            <h1>ChildComponent</h1>
            <p>message from child </p>
            <TextContext.Provider value={text}>
                <Grandchildcomponent />
            </TextContext.Provider>

        </div>
    )
}

export { ChildComponent as default, TextContext }


//Grandchildcomponent.jsx

import React, { useContext } from 'react';
import { TextContext } from './ChildComponent';

function Grandchildcomponent() {
    const text = useContext(TextContext);
    

    return (
        <div>
            <h1>Grandchildcomponent</h1>
            <p>message from Grandchildcomponent: {text}</p>
        </div>
    );
}

export default Grandchildcomponent;
