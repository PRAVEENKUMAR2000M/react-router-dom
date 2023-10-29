
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Users from './users'; 
import Notes from './notes'; 
import Home from './home' 
import Note from "./Note"



function App({ notes }) {
  console.log(notes);

  const padding = {
  padding: 5,
}

  return (
    <Router>
      <div>
        <Link to="/" style={padding}>Home</Link>
        <Link to="/notes" style={padding}>Notes</Link>
        <Link to="/users" style={padding}>Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/note/:id" element={ <Note notes={notes} /> } />
      </Routes>
    </Router>
  );
}

export default App;