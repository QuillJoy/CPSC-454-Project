import * as React from 'react';
import { Container, Typography, Button, Grid, Box} from "@mui/material";


function Welcome() {
    return (
        <Container maxWidth="sm">
            <Box
            component="img"
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Logo"
            src=""
            />
            <Typography
            variant="h2"
            sx={{ my: 4, textAlign: "center", color: "primary.main"}}
            >
                Angel Blood Bank
            </Typography>
            <Grid container spacing={2} justifyContent={"center"} display={'flex'} direction={'column'}>
                <Grid item>
                    <Button variant="contained" color="primary">Donor Login</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary">Donor Sign Up</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary">Employee Login</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Welcome;