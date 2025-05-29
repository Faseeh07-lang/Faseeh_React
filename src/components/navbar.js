import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs')); 

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


  const drawerItems = (
    <Box sx={{ width: 250 }}>
      <List>
        {['Home', 'About', 'Contact', 'Services'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={handleDrawerClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', 
                },
                transition: 'background-color 0.3s ease'
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Brand name */}
          <Typography variant="h6" component="div">
            My Website
          </Typography>

      
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                pl: {
                  xs: 1,
                  sm: 3,
                  md: 5,
                  lg: 7,
                  xl: 9,
                },
                gap: 3
              }}
            >
              {['Home', 'About', 'Contact', 'Services'].map((text) => (
                <Typography
                  key={text}
                  variant="body1"
                  component="div"
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0', 
                    }
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          )}

          
          {isMobile && (
            <IconButton
              edge="end"
              onClick={handleDrawerToggle}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        {drawerItems}
      </Drawer>
    </>
  );
}

export default Navbar;

