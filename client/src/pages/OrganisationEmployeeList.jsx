import React from 'react';
import DoctorCard from '../components/DoctorCard';
import { Box } from '@mui/material';

const OrganisationEmployeeList = () => {
    return (
        <div>
            <h2>Organisation Employee List</h2>
            <Box sx={{ display: "flex", flexDirection: "column", alignContent: "space-around", gap: "1rem" }}>
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
            </Box>
        </div >
    );
};

export default OrganisationEmployeeList;
