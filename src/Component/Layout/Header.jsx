import { AppBar, Box, Divider, Drawer, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link , NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderStyle from "../../Style/HeaderStyle.css";
import logo from '../images/logo.svg'
const Header = () => {
  const [mobile, setmobile] = useState(false);
  const handleDrawerToggler = () => {
    setmobile(!mobile);
  };
  const drawer = (
    <Box onClick={handleDrawerToggler}
     sx={{ textAlign: "center" ,
     my:2}}>
      <Typography color="goldenrod"
       flexGrow={1}
       variant="h6"
        component={"div"}
        >
        {/* <FastfoodIcon />
        My Resturant */}
         <img src={logo} alt="logo" height='70' width='200'/>
      </Typography>
        <Divider/>
      <ul className="mobile_navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggler}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="goldenrod"
              flexGrow={1}
              variant="h6"
              component={"div"}
            >
              {/* <FastfoodIcon />
              My Resturant */}
              <img src={logo} alt="logo" height='70' width='230'/>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation_menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        {/*  */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobile}
            onClose={handleDrawerToggler}
            sx={{ display: { xs: "block", sm: "none" },
            '& .MuiDrawer-paper':{
             boxSizing:'border-box',
             width:'240px'
            }
          }}
            
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
