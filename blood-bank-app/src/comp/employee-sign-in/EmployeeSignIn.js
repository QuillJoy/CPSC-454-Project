import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function EmployeeSignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    emailAddr: '',
    password: '',
  });

  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();

  // Check if email address exists in localStorage
    const storedEmailAddr = sessionStorage.getItem("employeeEmail");

    if (storedEmailAddr === formState.emailAddr) {
      // Email address exists, now check password
      const storedPassword = sessionStorage.getItem("employeePassword");
      const enteredPassword = formState.password;

      if (storedPassword && storedPassword === enteredPassword) {
        // Password matches, set isAuthenticated to true
        let isAuthenticated = true;
        sessionStorage.setItem("isAuthenticated", isAuthenticated);

        navigate ('/employeehome')
      }
      else {
        alert("Incorrect password")
        navigate ('/')

      }
    } else {
      alert("Email not found")
      navigate ('/')
    }

    
    const data = new FormData(event.currentTarget);
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
          Employee Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formState.emailAddr}
            onChange={ e => setFormState({...formState, emailAddr: e.target.value})}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formState.password}
            onChange={ e => setFormState({...formState, password: e.target.value})}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}