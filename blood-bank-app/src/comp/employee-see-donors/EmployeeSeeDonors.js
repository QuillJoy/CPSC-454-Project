import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container, Typography } from "@mui/material";

const EmployeeSeeDonors = () => {
    let [rows, setRows] = useState([]);
    const { currentUser } = useContext(ThemeContext);

    useEffect(() => {
        const fetchDonors = async () => {
      
            try {
              const response = await fetch(`http://localhost:5000/api/getDonors`, {
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

        fetchDonors()
    }, [])
      
  
    return (
        <Container maxWidth="md">
            <Typography variant="h3" align="center" sx={{p: 5}}> Donors </Typography>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>Blood Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={`${row.DonorID}`}>
                        <TableCell>{row.FirstName}</TableCell>
                        <TableCell>{row.LastName}</TableCell>
                        <TableCell>{row.Email}</TableCell>
                        <TableCell>{row.PhoneNumber}</TableCell>
                        <TableCell>{row.Sex}</TableCell>
                        <TableCell>{row.DOB}</TableCell>
                        <TableCell>{row.BloodType}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
  };
 
export default EmployeeSeeDonors;