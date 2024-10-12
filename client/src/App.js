// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorCompleatedForm from './pages/DoctorCompleatedForm';
import DoctorForm from './pages/DoctorForm';
import OrganisationSearch from "./pages/OrganisetionSearch"
import OrganisationEmployeeList from './pages/OrganisationEmployeeList';
import { Link } from 'react-router-dom';


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
          <Route path="/doctor/compleat" element={<DoctorCompleatedForm />} />
          <Route path="/organisation" element={<OrganisationSearch />} />
          <Route path="/organisation/carrent" element={<OrganisationEmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
