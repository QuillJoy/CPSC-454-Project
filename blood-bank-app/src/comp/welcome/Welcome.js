import * as React from 'react';
import { Container, Typography, Button, Grid, Box} from "@mui/material";
import { Link } from 'react-router-dom';


function Welcome() {
    return (
        <Container maxWidth="sm">
            <Typography
            variant="h2"
            sx={{ my: 4, textAlign: "center", color: "primary.main"}}
            >
                Angel Blood Bank
            </Typography>
            <Grid container spacing={2} alignContent={"center"} alignItems={"center"} display={'flex'} direction={'column'}>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/donorsignin" >Donor Sign In</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary" component={Link} to="/donorsignup">Donor Sign Up</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary" component={Link} to="/employeesignin">Employee Login</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Welcome;