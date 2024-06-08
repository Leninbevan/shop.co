import { Box, Button } from '@mui/material';
import React from 'react';
import Backimage from "../assests/backgroundImage/banner-03.jpg";
import "../styles/specialEdition.css";

const Specialedition = () => {
    return (
        <>
                <Box className='specialEditionContent'>
                    <Box sx={{fontSize:"30px",color:"white", opacity:"0.7",fontWeight:"bold"}}>Special Edition</Box>
                    <Box sx={{fontSize:"20px",color:"white", opacity:"0.7",fontWeight:"bold"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Box>
                    <Box sx={{fontSize:"30px",color:"white", opacity:"0.7",fontWeight:"bold"}}>Buy This T-shirt At 20% Discount, Use Code OFF20</Box>
                    <Button sx={{ color: "black", backgroundColor: "white", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "black", color: "white" } }}>shop now</Button>
                </Box>
        </>
    )
}

export default Specialedition