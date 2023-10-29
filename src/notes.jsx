import React from 'react'
import { Link } from "react-router-dom";

function Notes({ notes }) {
    
  return (
      <div>
          <h2>Notes</h2>
          <ul>
              {
                  notes.map(notes => {
                      return <li key={notes.id}><Link to={`/note/${notes.id}`}>{ notes.content }</Link></li>
                  })
              }
          </ul>
    </div>
  )
}

export default Notes