import React from "react";
import { Box, Typography } from "@mui/material";
import DoctorFormComponent from "../components/DoctorFormComponent"; // Adjust the import according to your file structure

const DoctorInfoPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Doctor Info Form
            </Typography>
            <DoctorFormComponent />
        </Box>
    );
};

export default DoctorInfoPage;
