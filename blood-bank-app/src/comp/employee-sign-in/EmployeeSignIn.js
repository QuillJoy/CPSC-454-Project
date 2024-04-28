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
import { ThemeContext } from '../../ThemeContext';

export default function EmployeeSignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    emailAddr: '',
    password: '',
  });
  
  const { currentUser, setUser, isAuthenticated, setAuth } = React.useContext(ThemeContext);

  const theme = createTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { emailAddr, password } = formState;
  
  
    try {
      const response = await fetch('http://localhost:5000/api/authenticateEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailAddr, password })
      });

      if (!response.ok) {
        console.error('Server responded with status', response.status);
        return;
      }
  
      const data = await response.json();
  
      if (data.isAuthenticated) {
        setAuth(true)
        setUser(data.email)
        navigate('/employeehome');
      } else {
        alert(data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Error sending the authentication request', error);
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
        </Box>
      </Box>
    </Container>
  );
}

