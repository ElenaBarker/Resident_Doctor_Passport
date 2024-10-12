import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

const DoctorFormComponent = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        // General Information
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        address: ['', '', '', '', ''], // Address fields
        nationalIns: '',
        phoneNumber: '',
        workEmail: '',
        privateEmail: '',
        emergencyName: '',
        emergencyNumber: '',

        // Contact Information
        connectionID: '',
        dateCreated: '',
        orgID: '',
        access: false,
        placementStartDate: '',
        placementEndDate: '',

        // Health Records
        healthRecordID: '',
        immunisations: '',
        healthConditions: '',
        dateOnset: '',

        // Employment History
        employmentID: '',
        employmentStartDate: '',
        employmentEndDate: '',
        finalSalaryNodalPoint: '',
        salaryIncrementDate: '',

        // Banking and Documents
        bankID: '',
        bankName: '',
        bankSort: '',
        bankAccountNumber: '',
        passport: '',
        drivingLicense: '',
        DBS: '',
        DBSDate: '',
        DBSUpdateService: false,

        // Car Information
        carID: '',
        carRegistration: '',
        carColour: '',
        carMake: '',
        carModel: '',
    });

    // Function to handle form data change
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: 2,
            overflowY: "auto",
            width: "70%"
        }}>
            {/* General Information Section */}
            <Typography variant="h6" gutterBottom>
                General Information
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Grid>
                {formData.address.map((addr, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <TextField
                            fullWidth
                            label={`Address Line ${index + 1}`}
                            name={`address[${index}]`}
                            value={formData.address[index]}
                            onChange={(e) => {
                                const newAddress = [...formData.address];
                                newAddress[index] = e.target.value;
                                setFormData({ ...formData, address: newAddress });
                            }}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="National Insurance Number"
                        name="nationalIns"
                        value={formData.nationalIns}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Work Email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Private Email"
                        name="privateEmail"
                        value={formData.privateEmail}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Emergency Contact Name"
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Emergency Contact Number"
                        name="emergencyNumber"
                        value={formData.emergencyNumber}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>

            {/* Contact Information Section */}
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Contact Information
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Connection ID"
                        name="connectionID"
                        value={formData.connectionID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Date Created"
                        name="dateCreated"
                        type="datetime-local"
                        value={formData.dateCreated}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Organization ID"
                        name="orgID"
                        value={formData.orgID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="access"
                                checked={formData.access}
                                onChange={handleChange}
                            />
                        }
                        label="Access Granted"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Placement Start Date"
                        name="placementStartDate"
                        type="datetime-local"
                        value={formData.placementStartDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Placement End Date"
                        name="placementEndDate"
                        type="datetime-local"
                        value={formData.placementEndDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
            </Grid>

            {/* Health Records Section */}
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Health Records
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Health Record ID"
                        name="healthRecordID"
                        value={formData.healthRecordID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Immunisations"
                        name="immunisations"
                        value={formData.immunisations}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Health Conditions"
                        name="healthConditions"
                        value={formData.healthConditions}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Date Onset"
                        name="dateOnset"
                        type="datetime-local"
                        value={formData.dateOnset}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
            </Grid>

            {/* Employment History Section */}
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Employment History
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Employment ID"
                        name="employmentID"
                        value={formData.employmentID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Employment Start Date"
                        name="employmentStartDate"
                        type="datetime-local"
                        value={formData.employmentStartDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Employment End Date"
                        name="employmentEndDate"
                        type="datetime-local"
                        value={formData.employmentEndDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Final Salary Nodal Point"
                        name="finalSalaryNodalPoint"
                        value={formData.finalSalaryNodalPoint}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Salary Increment Date"
                        name="salaryIncrementDate"
                        type="datetime-local"
                        value={formData.salaryIncrementDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
            </Grid>

            {/* Banking and Documents Section */}
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Banking and Documents
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bank ID"
                        name="bankID"
                        value={formData.bankID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bank Name"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bank Sort Code"
                        name="bankSort"
                        value={formData.bankSort}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bank Account Number"
                        name="bankAccountNumber"
                        value={formData.bankAccountNumber}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Passport Number"
                        name="passport"
                        value={formData.passport}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Driving License Number"
                        name="drivingLicense"
                        value={formData.drivingLicense}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="DBS Number"
                        name="DBS"
                        value={formData.DBS}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="DBS Date"
                        name="DBSDate"
                        type="datetime-local"
                        value={formData.DBSDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }} // Ensures label is always visible
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="DBSUpdateService"
                                checked={formData.DBSUpdateService}
                                onChange={handleChange}
                            />
                        }
                        label="Enrolled in DBS Update Service"
                    />
                </Grid>
            </Grid>

            {/* Car Information Section */}
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Car Information
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Car ID"
                        name="carID"
                        value={formData.carID}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Car Registration"
                        name="carRegistration"
                        value={formData.carRegistration}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Car Colour"
                        name="carColour"
                        value={formData.carColour}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Car Make"
                        name="carMake"
                        value={formData.carMake}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Car Model"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>

            {/* Submit Button */}
            <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
                Submit
            </Button>
        </Box>
    );
};

export default DoctorFormComponent;
