import React from 'react';
import Global from "../assests/globalAwarness/globe-free-img.png";
import Quality from "../assests/globalAwarness/quality-free-img.png";
import Lock from "../assests/globalAwarness/lock-free-img.png";
import Tag from "../assests/globalAwarness/tag-free-img.png";
import { Box } from '@mui/material';

const Siteservice = () => {
    const services = [
        {
            image: Global,
            title: "Worldwide Shipping",
            content: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: Quality,
            title: "Best Quality",
            content: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: Tag,
            title: "Best Offers",
            content: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            image: Lock,
            title: "Secure Payments",
            content: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ]
    return (
        <>
                {services.map((item, index) => {
                    return (
                        <>
                            <Box key={index} sx={{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",gap:"6px"}}>
                                <Box><img src={item.image} alt="serviceimage" style={{width:"70px"}}/></Box>
                                <Box sx={{fontSize:"18px",fontWeight:"bold"}}>{item.title}</Box>
                                <Box sx={{fontSize:"small"}}>{item.content}</Box>
                            </Box>
                        </>
                    )
                })
                }
        </>
    )
}

export default Siteservice