import React from 'react'
import Grandchildcomponent from './Granchildcomponent'

function Childcomponent({ message }) {
  const text = "hello grandChild"
  return (
      <div>
          
      <p>message from parent component: <b>{message}</b></p>
      <Grandchildcomponent text={text} />
    </div>
  )
}

export default Childcomponent;