import React from 'react';
import logo from "../assests/Logo/logo@2x-free-img.png"
import { Box, Button, TextField, Typography } from '@mui/material';

const Categories = () => {
    const allcategories = [
        {
            title: logo,
            content: ["The best look anytime, anywhere."]
        },
        {
            title: "For Her",
            content: ["Women Jeans", "Tops and Shirts", "Women Jackets", "Heels and Flats", "Women Accessories"]
        },
        {
            title: "For Him",
            content: ["Men Jeans", "Men Shirts", "Men Shoes", "Men Accessories", "Men Jackets"]
        },
        {
            title: "Subscribe",
            content: [<TextField placeholder='Your Email Address...'/>, <Button sx={{ color: "white", backgroundColor: "#0075BE", borderRadius: "0px", fontWeight: "bold", padding: "8px 30px", ":hover": { backgroundColor: "#0075BE", color: "white" } }}>Subscribe</Button>]
        }
    ]
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {
                    allcategories.map((item, index) => {
                        return (
                            <Box key={index}>
                                {index === 0 ?
                                    <Typography ><img src={item.title} alt="title" style={{width:"100px"}}/></Typography>
                                    :
                                    <Typography sx={{fontSize:"20px",fontWeight:"600"}}>{item.title}</Typography>
                                }
                                <Typography >{item.content.map((itm, index) => {
                                    return (
                                        <Typography sx={{paddingTop:"15px"}}>{itm}</Typography>
                                    )
                                })}</Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Categories