import * as React from 'react';
import { Container, Typography, Button, Grid, Box} from "@mui/material";
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';


function EmployeeHome() {
    const {currentUser} = React.useContext(ThemeContext)
    console.log(currentUser)
    return (
        <Container maxWidth="md">
            <Typography
            variant='h2' 
            sx={{my: 5, textAlign: "center", color: "primary.main"}} 
            > 
            Hello {currentUser}
            </Typography>
            <Grid container spacing={2} justifyContent={"center"} display={'flex'} direction={'column'} >
                <Grid item>
                    <Button variant='contained' color='primary' component={Link} to="/employeeseedonors">See Donors In Database</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EmployeeHome;