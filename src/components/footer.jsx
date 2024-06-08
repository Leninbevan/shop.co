import { Box } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Footerr = () => {
    return (
        <>
            <Box sx={{display:"flex",justifyContent:"space-between",padding:"30px"}}>
                <Box>Copyright © 2024 Brandstore. Powered by Brandstore.</Box>
                <Box sx={{display:"flex",gap:"18px"}}>
                    <Box><FacebookIcon /></Box>
                    <Box><YouTubeIcon /></Box>
                    <Box><XIcon /></Box>
                    <Box><InstagramIcon /></Box>
                    <Box><GoogleIcon /></Box>
                </Box>
            </Box>
        </>
    )
}

export default Footerr
