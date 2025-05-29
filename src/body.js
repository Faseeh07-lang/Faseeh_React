import React from "react";
import { Box, Toolbar } from "@mui/material";

function Body() 

{
    return( <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly'
, alignItems: 'center', height: '100vh', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}>
       
             <Box sx={{display:"flex", justifyContent: "center" ,flexDirection:"column",borderColor: 'black', borderWidth: 1, borderStyle: 'solid', padding: 2, marginTop: 2 ,textAlign: 'center' ,height:"40%", width:{ xs: '90%',
      sm: '80%',
      md: '30%',
      lg: '20%'
    },
}}>
                <h1>Welcome to the Competition </h1>
                 <p>Select a problem from the list to begin. This is my practice website i am going to build to test my react js skills

                </p>
            </Box>
           
            <Box sx={{display:"flex", justifyContent: "center" ,flexDirection: 'column',borderColor: 'black',height:"40%", borderWidth: 1, borderStyle: 'solid', padding: 2, marginTop: 2 ,textAlign: 'center',  width: {
      xs: '90%',
      sm: '80%',
      md: '30%',
      lg: '20%'
    },
   
    wordWrap: 'break-word'}}>
                <h1>Get Started</h1>
                <p>Select a problem from the list to begin. This is my practice website i am going to build to test my react js skills

                </p>
             </Box>


              <Box sx={{display:"flex", justifyContent: "center" ,flexDirection: 'column',borderColor: 'black', borderWidth: 1, borderStyle: 'solid', padding: 2, marginTop: 2 ,textAlign: 'center', height:"40%", width: {
      xs: '90%',
      sm: '80%',
      md: '30%',
      lg: '20%'
    },
   
    wordWrap: 'break-word'}}>
                <h1>Get Started</h1>
                <p>Select a problem from the list to begin. This is my practice website i am going to build to test my react js skills

                </p>
             </Box>


        </Toolbar>
    );
}
export default Body;