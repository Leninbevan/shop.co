import { Box, Button } from '@mui/material';
import React from 'react';
import Women from "../assests/backgroundImage/women-fashion-free-img1.jpg";
import Men from "../assests/backgroundImage/men-fashion-free-img1.jpg";
import Footwear from "../assests/backgroundImage/footwear-free-img.jpg";

const Advertisementcard = () => {
    return (
        <Box className="cardContainer">
            <Box sx={{ backgroundImage: "url(" + Women + ")" }} className="fashionImage">
                <Box className="fashionContent">
                    <Box className="offerTag">
                        20% Off On Tank Tops
                    </Box>
                    <Box className="brandDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </Box>
                    <Box>
                        <Button sx={{ color: "black", backgroundColor: "white", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "black", color: "white" } }}>shop now</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundImage: "url(" + Men + ")" }} className="menfashionImage">
                <Box className="fashionContent">
                    <Box className="offerTag">
                        Latest Eyewear For You
                    </Box>
                    <Box className="brandDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </Box>
                    <Box>
                        <Button sx={{ color: "black", backgroundColor: "white", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "black", color: "white" } }}>shop now</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundImage: "url(" + Footwear + ")" }} className="fashionImage">
                <Box className="fashionContent">
                    <Box className="offerTag">
                        Let's Lorem Suit Up!
                    </Box>
                    <Box className="brandDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </Box>
                    <Box>
                        <Button sx={{ color: "black", backgroundColor: "white", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "black", color: "white" } }}>check out</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Advertisementcard