import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function DonorSignUp() {
  const [formState, setFormState] = React.useState({
    firstName: '',
    lastName: '',
    DOB: '',
    sex: '',
    bloodType: '',
    phoneNum: '',
    emailAddr: '',
    password: ''
  });

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
      const { 
      emailAddr, 
      password, 
      firstName, 
      lastName, 
      DOB, 
      sex, 
      bloodType, 
      phoneNum 
    } = formState;
  
    try {
      const response = await fetch('http://localhost:5000/api/insertDonor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          emailAddr, 
          password, 
          firstName, 
          lastName, 
          DOB, 
          sex, 
          bloodType, 
          phoneNum, 
          emailAddr 
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        navigate('/donorhome');
      } else {
        alert(data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Error sending the insert request', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formState.firstName}
                onChange={ e => setFormState({...formState, firstName: e.target.value})}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formState.lastName}
                onChange={ e => setFormState({...formState, lastName: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="dob"
                label="Date of Birth"
                name="Date of Birth"
                value={formState.DOB}
                onChange={ e => setFormState({...formState, DOB: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="sex"
                label="Sex"
                name="Sex"
                value={formState.sex}
                onChange={ e => setFormState({...formState, sex: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="btype"
                label="Blood Type"
                name="Blood Type"
                value={formState.bloodType}
                onChange={ e => setFormState({...formState, bloodType: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="pnum"
                label="Phone Number"
                name="Phone Number"
                value={formState.phoneNum}
                onChange={ e => setFormState({...formState, phoneNum: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formState.emailAddr}
                onChange={ e => setFormState({...formState, emailAddr: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={ e => setFormState({...formState, password: e.target.value})}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}