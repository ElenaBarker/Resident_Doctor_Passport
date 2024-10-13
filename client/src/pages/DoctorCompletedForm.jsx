import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import DoctorInfoCard from '../components/DoctorInfoCard';

const DoctorCompletedForm = ({ id_dr }) => {
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const id_dr = 1000004
        const fetchDoctorData = async () => {
            try {
                const response = await fetch(`http://localhost:5005/doctors/${id_dr}`);
                if (!response.ok) {
                    throw new Error('Doctor not found');
                }
                const doctorData = await response.json();
                setDoctor(doctorData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctorData();
    }, [id_dr]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Doctor Completed Form</h2>
            {doctor && <DoctorInfoCard formData={doctor} />}
        </div>
    );
};

export default DoctorCompletedForm;
