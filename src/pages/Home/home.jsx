import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BackImage from "../../assests/backgroundImage/HomeBackGround.jpg";
import Carousel from '../../components/carousel';
import Header from '../../components/header';
import "../../styles/hompage.css";
import image1 from "../../assests/Logo/Balenciaga_Logo.svg";
import image2 from "../../assests/Logo/Bulgari_logo.svg";
import image3 from "../../assests/Logo/CK_Calvin_Klein_logo.svg";
import image4 from "../../assests/Logo/Hermes-Logo.svg";
import image5 from "../../assests/Logo/ZARA-logo.svg";
import Advertisementcard from '../../components/advertisementCard';
import Homeproducts from '../../components/homeProducts';
import Specialedition from '../../components/specialEdition';
import Backimage from "../../assests/backgroundImage/banner-03.jpg";
import Siteservice from '../../components/siteService';
import Categories from '../../components/categories';
import Footerr from '../../components/footer';
const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState(BackImage);

    useEffect(() => {
        const handleScroll = () => {
            const yourComponent = document.getElementById('your-component-id');
            if (yourComponent) {
                const componentOffset = yourComponent.getBoundingClientRect().top;
                if (componentOffset < window.innerHeight * 1) {
                    setBackgroundImage(Backimage);
                } else {
                    setBackgroundImage(BackImage);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];
    return (
        <>
            <Box className="mainHome">
                <Box className="homePage">
                    <img src={backgroundImage} alt="BackImage" className='backImage' />
                </Box>
                <Box>
                    <Header />
                    <Box className="homeContent">
                        <Box className="fadeIn" sx={{ color: "white", fontWeight: "bold", fontSize: "100px" }}>Raining Offers For</Box>
                        <Box className="fadeIn" sx={{ color: "white", fontWeight: "bold", fontSize: "100px" }}>Hot Summer!</Box>
                        <Box className="fadeIn" sx={{ color: "white", fontWeight: "bold", fontSize: "50px" }}>25% Off On All Products</Box>
                        <Box className="fadeIn" sx={{ paddingTop: "30px", display: "flex", gap: "30px" }}>
                            <Button sx={{ color: "black", backgroundColor: "white", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "black", color: "white" } }}>shop now</Button>
                            <Button sx={{ color: "white", backgroundColor: "transparent", borderRadius: "0px", fontWeight: "bold", border: "solid 2px white", padding: "8px 30px", ":hover": { backgroundColor: "white", color: "black" } }}>find more</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className="advertisementContainer">
                    <Carousel images={images} />
                    <Advertisementcard />
                </Box>
                <Box className="homeproductsContainer">
                    <Homeproducts />
                </Box>
                <Box id="your-component-id" className="specialEditionContainer">
                    <Specialedition />
                </Box>
                <Box className="aboutSite" sx={{ backgroundColor: "#F5F7F9" }}>
                    <Siteservice />
                </Box>
                <Box className="specialOffer">
                    SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
                </Box>
                <Box className="allCollections" sx={{borderBottom:"1px solid #e4e0e0"}}>
                    <Categories/>
                </Box>
                <Box sx={{backgroundColor:"white"}}>
                    <Footerr/>
                </Box>
            </Box>
        </>
    )
}

export default Home