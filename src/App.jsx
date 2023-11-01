import React from 'react'
import Childcomponent from './Childcomponent'

function App() {
  //parent component
  const message = "hello child!"

  return (
    <div>
      <h1>parent component</h1>
      <Childcomponent message={message} />
    </div>
  )
}

export default App