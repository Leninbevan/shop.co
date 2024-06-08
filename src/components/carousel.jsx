import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        // Reset currentIndex to 0 when images change to avoid inconsistency
        setCurrentIndex(0);
    }, [images]);

    const renderImages = () => {
        if (images.length === 0) return null;
        const duplicatedImages = images.concat(images);
        return duplicatedImages.map((image, index) => (
            <Box key={index} className="carousel-item">
                <img src={image} alt={`Logo ${index}`} style={{ width: "100px" }} />
            </Box>
        ));
    };

    return (
        <Box className="carousel-container">
            <Box className="carousel" style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
                {renderImages()}
            </Box>
        </Box>
    );
};

export default Carousel;
