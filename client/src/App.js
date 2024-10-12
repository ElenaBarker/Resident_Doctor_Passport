import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from "@mui/material";
import PositionedMenu from './components/MenueButton';
import DoctorCompletedForm from './pages/DoctorCompletedForm';
import DoctorForm from './pages/DoctorForm';
import OrganisationSearch from './pages/OrganisationSearch';
import OrganisationEmployeeList from './pages/OrganisationEmployeeList';
import Home from './pages/Home';
import logoImage from './logo_image.png';

function App() {
  return (
    <Router>
      {/* Main container with flex display */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        alignItems: "center"
      }}
      >
        {/* Top bar with PositionedMenu */}
        <Grid container sx={{
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Grid item>
            <img src={logoImage} alt="Logo" style={{ maxHeight: "80px" }} />
          </Grid>
          <Grid item>
            <PositionedMenu />
          </Grid>
        </Grid>

        {/* Main content area */}
        <div style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Switch>
            <Route path="/" exact component={Home} /> {/* Use exact for the root route */}
            <Route path="/doctor" component={DoctorForm} />
            <Route path="/doctor/compleat" component={DoctorCompletedForm} />
            <Route path="/organisation" component={OrganisationSearch} />
            <Route path="/organisation/current" component={OrganisationEmployeeList} /> {/* Corrected path spelling */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
