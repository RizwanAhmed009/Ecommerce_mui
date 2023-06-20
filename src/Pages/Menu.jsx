import React from "react";
import Layout from "../Component/Layout/Layout";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../Data/data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
        
      {
        MenuList.map((menu)=>(
          <Card sx={{ maxWidth: 345, display:'flex' , m:2}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={menu.image}
              alt={menu.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {menu.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {menu.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {`${menu.price}PKR`}
            </Button>
          </CardActions>
        </Card>
        ))
      }
      </Box>
    </Layout>
  );
};

export default Menu;
