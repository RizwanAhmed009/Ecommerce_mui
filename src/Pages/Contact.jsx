import React from "react";
import Layout from "./../Component/Layout/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            fontsize: "2rem",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus
          cum, et nesciunt nulla fuga accusamus modi culpa aut. Perspiciatis,
          autem veritatis? At, sunt! Saepe delectus libero dolor excepturi
          deleniti.
        </p>
      </Box>
    <Box sx={{width:'600px' ,ml:10,
              '@media(max-width:600px)':{
                width:'300px',
                marginLeft:4,
                textAlign:'center'
              }
                }}>
        <TableContainer>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell sx={{background:'black' , 
                color:'white',
                textAlign:'center'
                
              }}>Contact Deatils</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  0992-111-222
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  example@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                {" "}
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  0341-9220114
                </TableCell>{" "}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
