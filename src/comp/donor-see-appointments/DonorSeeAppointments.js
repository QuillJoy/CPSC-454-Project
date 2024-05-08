import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container, Typography } from "@mui/material";

const DonorSeeAppointments = () => {
    let [rows, setRows] = useState([]);
    const { currentUser } = useContext(ThemeContext);

    useEffect(() => {
        let donorID = null;

        const fetchID = async () => {
      
          try {
            const email = currentUser;
            console.log(email);
            const response = await fetch(`http://localhost:5000/api/getID?email=${encodeURIComponent(email)}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
      
            if (response.ok) {
              const data = await response.json();
              donorID = data;
              console.log('DonorID:', data); 
              fetchAppointments();
            } else {
              console.error('Response:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };

        const fetchAppointments = async () => {
      
            try {
              const email = currentUser;
              console.log(email);
              const response = await fetch(`http://localhost:5000/api/getAppointments?DonorID=${encodeURIComponent(donorID)}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
        
              if (response.ok) {
                const data = await response.json();
                rows = data;
                setRows(rows)
                console.log(rows)
              } else {
                console.error('Response:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };
      
        fetchID();


    
      }, []);
      
  
    return (
        <Container maxWidth="xs">
            <Typography variant="h3" align="center" sx={{p: 5}}> Appointments </Typography>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell>Day</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={`${row.Month}-${row.Day}-${row.Year}`}>
                        <TableCell>{row.Month}</TableCell>
                        <TableCell>{row.Day}</TableCell>
                        <TableCell>{row.Year}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
  };
 
export default DonorSeeAppointments;