import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const DoctorInfoCard = ({ formData }) => {
    return (
        <Card sx={{ width: "40rem", margin: "20px" }}>
            <CardContent>
                {/* General Information Section */}
                <Typography variant="h5" component="div" gutterBottom>
                    General Information
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Name: {formData.firstName} {formData.lastName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Username: {formData.username}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    National Insurance Number: {formData.nationalIns}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Phone Number: {formData.phoneNumber}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Work Email: {formData.workEmail}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Private Email: {formData.privateEmail}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Emergency Contact: {formData.emergencyName} - {formData.emergencyNumber}
                </Typography>

                {/* Contact Information Section */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                    Contact Information
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Connection ID: {formData.connectionID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Date Created: {new Date(formData.dateCreated).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Organization ID: {formData.orgID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Access Granted: {formData.access ? 'Yes' : 'No'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Placement Start Date: {new Date(formData.placementStartDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Placement End Date: {new Date(formData.placementEndDate).toLocaleString()}
                </Typography>

                {/* Health Records Section */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                    Health Records
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Health Record ID: {formData.healthRecordID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Immunisations: {formData.immunisations}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Health Conditions: {formData.healthConditions}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Date Onset: {new Date(formData.dateOnset).toLocaleString()}
                </Typography>

                {/* Employment History Section */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                    Employment History
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Employment ID: {formData.employmentID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Employment Start Date: {new Date(formData.employmentStartDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Employment End Date: {new Date(formData.employmentEndDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Final Salary Nodal Point: {formData.finalSalaryNodalPoint}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Salary Increment Date: {new Date(formData.salaryIncrementDate).toLocaleString()}
                </Typography>

                {/* Banking and Documents Section */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                    Banking and Documents
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Bank ID: {formData.bankID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Bank Name: {formData.bankName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Bank Sort Code: {formData.bankSort}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Bank Account Number: {formData.bankAccountNumber}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Passport Number: {formData.passport}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Driving License Number: {formData.drivingLicense}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    DBS Number: {formData.DBS}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    DBS Date: {new Date(formData.DBSDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Enrolled in DBS Update Service: {formData.DBSUpdateService ? 'Yes' : 'No'}
                </Typography>

                {/* Car Information Section */}
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                    Car Information
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Car ID: {formData.carID}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Car Registration: {formData.carRegistration}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Car Colour: {formData.carColour}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Car Make: {formData.carMake}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Car Model: {formData.carModel}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DoctorInfoCard;
