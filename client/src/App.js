// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/doctor">Doctor Form</Link>
            </li>
            <li>
              <Link to="/organisation">OrganisationSearch</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/doctor" element={<DoctorForm />} />
          <Route path="/doctor/compleat" element={<DoctorComplitedForm />} />
          <Route path="/organisation" element={<OrganisationSearch />} />
          <Route path="/organisation/carrent" element={<OrganisetionEmploy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
