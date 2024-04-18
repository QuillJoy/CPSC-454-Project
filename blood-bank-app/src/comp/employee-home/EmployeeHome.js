import * as React from 'react';
import { Container, Typography, Button, Grid, Box} from "@mui/material";


function EmployeeHome() {
    return (
        <Container maxWidth="md">
            <Typography
            variant='h2' 
            sx={{my: 5, textAlign: "center", color: "primary.main"}} 
            > 
            Hello 'User'
            </Typography>
            <Grid container spacing={2} justifyContent={"center"} display={'flex'} direction={'column'} >
                <Grid item>
                    <Button variant='contained' color='primary'>See Blood Availability</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='primary'>See Donor Information</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EmployeeHome;