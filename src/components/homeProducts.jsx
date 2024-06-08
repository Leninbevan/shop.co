import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Divider, Radio, Rating, Tooltip, Typography, styled, tooltipClasses } from '@mui/material';
import React, { useState } from 'react';
import "../styles/homeProduct.css";
import shoe3 from "../assests/products/sports-shoe3.jpg";
import shoe1 from "../assests/products/sports-shoe1.jpg";
import mjeans1 from "../assests/products/product-m-jeans1.jpg";
import wjeans2 from "../assests/products/product-w-jeans2.jpg";
import wjeans1 from "../assests/products/product-w-jeans1.jpg";
import wjeans4 from "../assests/products/product-w-jeans4.jpg";
import bag1 from "../assests/products/product-bag1.jpg";
import bag3 from "../assests/products/product-bag3.jpg";
import accessory1 from "../assests/products/product-accessory1.jpg";
import accessory2 from "../assests/products/product-accessory2.jpg";


const Homeproducts = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
            padding: '8px',
            fontSize: '14px',
            border: '1px solid white',
        },
    }));

    const [products,setProducts] = useState([
        {
            image: shoe3,
            name: "DNK Yellow Shoes",
            category: "Men",
            price: 120,
            selectedValue: "b",
            rating:5
        },
        {
            image: shoe1,
            name: "DNK Blue Shoes",
            category: "Men",
            price: 140,
            selectedValue: "b",
            rating:3
        },
        {
            image: mjeans1,
            name: "Dark Brwon Jeans",
            category: "Men",
            price: 190,
            selectedValue: "b",
            rating:5
        },
        {
            image: wjeans2,
            name: "Blue Denim Jeans",
            category: "Women",
            price: 150,
            selectedValue: "b",
            rating:2
        },
        {
            image: wjeans1,
            name: "Blue Denim Shorts",
            category: "Women",
            price: 170,
            selectedValue: "b",
            rating:2
        },
        {
            image: wjeans4,
            name: "Basic Gray Jeans",
            category: "Women",
            price: 220,
            selectedValue: "b",
            rating:5
        },
        {
            image: bag1,
            name: "Light Brown Purse",
            category: "Accessories",
            price: 110,
            selectedValue: "b",
            rating:4
        },
        {
            image: bag3,
            name: "Bright Red Bag",
            category: "Accessories",
            price: 100,
            selectedValue: "b",
            rating:2
        },
        {
            image: accessory1,
            name: "Boho Bangle Bracelet",
            category: "Accessories",
            price: 340,
            selectedValue: "b",
            rating:3
        },
        {
            image: accessory2,
            name: "Anchor Bracelet",
            category: "Accessories",
            price: 120,
            selectedValue: "b",
            rating:5
        },
        {
            image: wjeans2,
            name: "Blue Denim Jeans",
            category: "Women",
            price: 150,
            selectedValue: "b",
            rating:2
        },
        {
            image: wjeans1,
            name: "Blue Denim Shorts",
            category: "Women",
            price: 170,
            selectedValue: "b",
            rating:2
        }
    ]);
    const handleRatingChange = (index, newValue) => {
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index].rating = newValue;
            return updatedProducts;
        });
    };
    return (
        <>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ paddingTop: "60px", fontWeight: "bold" }}>Featured Products</Typography>
                    <Divider sx={{ borderBottomWidth: 3, width: "100px", my: 2, backgroundColor: "#0084D6" }} />
                </Box>
                <Box className="productsContainer">
                    {products.map((item, index) => { 
                        return (
                            <Box className="homeProductContainer" key={index}>
                                <Box className="homeProductImageContainer" sx={{ cursor: "pointer" }}>
                                    <img src={item.image} alt="product" width={280} style={{ objectFit: "fill" }} onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)} className="image" />
                                    {hoveredProduct === index && (
                                        <>
                                            <BootstrapTooltip placement="left-start" title="Add to cart">
                                                <Box className="iconDiv" onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)}><LocalMallIcon className='icon' /></Box>
                                            </BootstrapTooltip>
                                        </>
                                    )}
                                </Box>
                                <Box className="productDetails">
                                    <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                                    <Typography sx={{ color: "gray" }}>{item.category}</Typography>
                                    <Typography sx={{ color: "gray" }}>${item.price}</Typography>
                                    <Typography>
                                        <Rating name="simple-controlled" value={item.rating} onChange={(event, newValue) => handleRatingChange(index,newValue)} />
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })
                    }
                </Box>
            </Box>
        </>
    )
}

export default Homeproducts