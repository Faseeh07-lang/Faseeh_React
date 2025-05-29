import React from "react";
import { Drawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Sidebar(){

return (

    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f4f4f4",
          borderRight: "1px solid #ddd",
          display:"flex",
          direction:"column",
          alignItems:"center"
        },

      }}
      >
        <Box sx={{ width: 240, padding: 2 ,  }}>
            <Typography variant="h5" sx={{ padding: 2, textAlign: "center" }}>
        My Website
        </Typography>
        <Typography variant="h6" sx={{ display:"flex", justifyContent:"center", alignItems:"center",transition:"all 0.3s ease",padding: 2, textAlign: "center" ,"&:hover": { backgroundColor:"#d3d3d3", fontSize:"100%",cursor:"pointer" } }}>
                Home
                </Typography>
         <Typography variant="h6" sx={{ display:"flex", justifyContent:"center", alignItems:"center",transition:"all 0.3s ease",padding: 2, textAlign: "center" ,"&:hover": { backgroundColor:"#d3d3d3", fontSize:"100%",cursor:"pointer"} }}>
        Contact
        </Typography> 
        <Typography variant="h6" sx={{ display:"flex", justifyContent:"center", alignItems:"center",transition:"all 0.3s ease",padding: 2, textAlign: "center" ,"&:hover": { backgroundColor:"#d3d3d3", fontSize:"100%",cursor:"pointer"} }}>
        Services
        </Typography>
         <Typography variant="h6" sx={{ display:"flex", justifyContent:"center", alignItems:"center",transition:"all 0.3s ease",padding: 2, textAlign: "center" ,"&:hover": { backgroundColor:"#d3d3d3", fontSize:"100%",cursor:"pointer"} }}>
        About
        </Typography>
                        </Box>
      

      </Drawer>
);
}
export default Sidebar;

