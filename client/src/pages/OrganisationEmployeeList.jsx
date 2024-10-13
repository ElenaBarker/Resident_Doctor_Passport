import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { Box } from '@mui/material';

const OrganisationEmployeeList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:5005/doctors');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Current Doctors</h2>
            <Box sx={{ display: "flex", flexDirection: "column", alignContent: "space-around", gap: "1rem" }}>
                {doctors.map(doctor => (
                    <DoctorCard key={doctor.id_dr} doctor={doctor} />
                ))}
            </Box>
        </div>
    );
};

export default OrganisationEmployeeList;
