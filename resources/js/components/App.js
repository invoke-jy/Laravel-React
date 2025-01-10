import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/react/public/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/react/public/users">Users</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/react/public/" element={<Home />} />
            <Route path="/react/public/users" element={<Users />} />
            <Route path="/react/public/users/:id" element={<UserDetails />} />
        </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
