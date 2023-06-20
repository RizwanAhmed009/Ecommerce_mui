import React from "react";
import Layout from "../Component/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{textAlign:'center',
      my:15,
      p:2,
      '& h4':{
        fontWeight:'bold',
        my:2,
        fontSize:'2rem'
      },
      '& p':{
        textAlign:'justify'
      },
      '@media (max-width:600px)':{
           marginTop:0,
           
           '& h4':{
            fontSize:'1.3rem' 
          }
      }
    }}>
        <Typography variant="h4" >
          Welcome to my Resturant
          </Typography>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            laboriosam minima explicabo commodi deserunt vel odit ipsam placeat
            eveniet. Non, maxime quidem! Eius aliquam quae culpa placeat
            repellendus inventore explicabo dolorem sed sint, dignissimos
            perspiciatis ut? Iure at, quisquam atque magni facere doloremque
            repellat nulla nemo explicabo quas. Atque quam itaque tempore harum
            amet doloribus pariatur quas commodi! Deleniti odit asperiores
            consequuntur error rerum necessitatibus exercitationem? At fugit
            debitis ea.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro
            ex libero modi. Nihil ipsa quibusdam excepturi maxime earum. Labore
            sit saepe nulla rerum ab ipsa provident nam molestiae expedita
            aliquid. A, nihil. Consequatur, obcaecati ex? Dignissimos
            praesentium hic quas ad est earum sequi, odio ratione deserunt a
            laboriosam suscipit voluptatum harum voluptatibus laudantium sit
            architecto, quidem natus iste minus soluta laborum, unde id.
            Consequatur commodi eos aliquam pariatur dolores quas velit
            quibusdam consequuntur voluptate, rerum harum sit nesciunt
            exercitationem possimus rem nobis recusandae! Voluptates minima
            delectus facere consequatur ex nostrum nisi repellat nam iusto
            sapiente harum velit, asperiores hic.
          </p>
        
      </Box>
    </Layout>
  );
};

export default About;
