import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { ThemeContext } from '../../ThemeContext';

export default function DonorAppointment() {
  const [formState, setFormState] = React.useState({
    month: '',
    day: '',
    year: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(formState)
    console.log(formState)
    const data = new FormData(event.currentTarget);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { month, day, year } = formState;
  
  //   try {
  //     const response = await fetch('http://localhost:5000/api/insertAppointment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ 
  //         emailAddr, 
  //         password, 
  //         firstName, 
  //         lastName, 
  //         DOB, 
  //         sex, 
  //         bloodType, 
  //         phoneNum, 
  //         emailAddr 
  //       })
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       alert(data.message);
  //       navigate('/donorhome');
  //     } else {
  //       alert(data.message);
  //       navigate('/');
  //     }
  //   } catch (error) {
  //     console.error('Error sending the insert request', error);
  //   }
  // };

  return (
    <Container maxWidth="xs" sx={{my:5}}>
        <Box sx={{ minWidth: 120 }}>
          <Typography variant='h4' align='center' sx={{p:5}}> Set Appointment Date</Typography>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formState.month}
            label="Age"
            onChange={ e => setFormState({...formState, month: e.target.value})}
            >
            <MenuItem value={0}>January</MenuItem>
            <MenuItem value={1}>February</MenuItem>
            <MenuItem value={2}>March</MenuItem>
            <MenuItem value={3}>April</MenuItem>
            <MenuItem value={4}>May</MenuItem>
            <MenuItem value={5}>June</MenuItem>
            <MenuItem value={6}>July</MenuItem>
            <MenuItem value={7}>August</MenuItem>
            <MenuItem value={8}>September</MenuItem>
            <MenuItem value={9}>October</MenuItem>
            <MenuItem value={10}>November</MenuItem>
            <MenuItem value={11}>December</MenuItem>
            </Select>
            <TextField
            type="number"
            id="day" label="Day"
            variant="outlined"
            inputProps={{ min: "1", max: "31" }}
            value={formState.day}
            onChange={ e => setFormState({...formState, day: e.target.value})}
            />
            <TextField
            type="number"
            id="year" label="Year"
            variant="outlined"
            inputProps={{ min: "2024", max: "2025" }}
            value={formState.year}
            onChange={ e => setFormState({...formState, year: e.target.value})}
            />
            <button onClick={handleSubmit}>Schedule</button>
        </FormControl>
        </Box>
    </Container>

  );
}