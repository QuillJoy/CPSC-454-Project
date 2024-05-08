import * as React from 'react';
import { Container, Typography, Button, Grid, Box} from "@mui/material";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Welcome() {
  function toggleTheme(){
    document.documentElement.classList.toggle("dark");
  }
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from the server when the component mounts
      fetch('http://localhost:5000/api/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Update state with the data received from the server
          setData(data);
        })
        .catch(error => {
          // Handle errors
          setError(error);
        });
    }, []); // Empty dependency array ensures the effect runs only once, on mount
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
                <Grid item>
                  <Button className="absolute bg:black text:white  hover:bg-stone-700" onClick={toggleTheme} variant="outlined" color="secondary">
                    Dark Mode Plugin
                  </Button>

                </Grid>
            </Grid>
        </Container>
    );
}

export default Welcome;