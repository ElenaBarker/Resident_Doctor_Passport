import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Grid } from '@mui/material';

const DoctorCard = () => {
    return (
        <Card sx={{ width: "40rem" }}>
            <CardContent>
                <Grid container direction={'row'} justifyContent={'space-between'}>
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="div">
                            Doctor Name
                        </Typography>
                    </Grid>
                    <Grid item><Checkbox /></Grid>

                </Grid>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    GMC Number 3525636
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Time authorised
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default DoctorCard