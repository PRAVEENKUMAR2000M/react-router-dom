
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}

function Notes() {
  return <div>Notes</div>;
}

function Users() {
  return <div>Users</div>;
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
