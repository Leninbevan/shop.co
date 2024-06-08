import { Box } from '@mui/material';
import React from 'react';
import Logo from "../assests/Logo/headerLogo.png"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    return (
        <>
            <Box className="header">
                <Box className="leftNav">
                    <Box><img src={Logo} alt="logo" style={{ width: "110px" }} /></Box>
                    <Box sx={{ color: "white",fontWeight:"bold"}}>EVERYTHING</Box>
                    <Box sx={{ color: "white" ,fontWeight:"bold"}}>WOMEN</Box>
                    <Box sx={{ color: "white",fontWeight:"bold" }}>MEN</Box>
                    <Box sx={{ color: "white" ,fontWeight:"bold"}}>ACCESSORIES</Box>
                </Box>
                <Box className="rightNav">
                    <Box className="contactNav">
                        <Box sx={{ color: "white",fontWeight:"bold" }}>ABOUT</Box>
                        <Box sx={{ color: "white" ,fontWeight:"bold"}}>CONTACT US</Box>
                    </Box>
                    <Box className="cartNav">
                        <Box sx={{ color: "white" ,fontWeight:"bold"}}>$150.00</Box>
                        <Box sx={{ color: "white" ,fontWeight:"bold"}}><ShoppingBagIcon/></Box>
                        <Box sx={{ color: "white" ,fontWeight:"bold"}}><PersonIcon/></Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header