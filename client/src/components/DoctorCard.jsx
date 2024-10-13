import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid } from '@mui/material';

const DoctorCard = ({ doctor }) => {
    return (
        <Card sx={{ width: "40rem" }}>
            <CardContent>
                <Grid container direction={'row'} justifyContent={'space-between'}>
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="div">
                            {doctor.first_name} {doctor.last_name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox />
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    GMC Number {doctor.gmc_number} {/* Replace with actual GMC number */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Phone number: {doctor.phone_number} {/* Replace with actual time authorised */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default DoctorCard;
