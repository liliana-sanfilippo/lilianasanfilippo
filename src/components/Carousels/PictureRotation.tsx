import React, {useEffect, useState} from 'react';

const PictureRotation: React.FC<{ images: string[]; interval?: number }> = ({
                                                                                images, interval = 7000, // Default interval of 7 seconds
                                                                            }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup the timer on unmount
    }, [images, interval]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index); // Update the current index to the clicked dot's index
    };

    return (<div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                height: '540px', // Set a fixed height
            }}
        >
            {/* Image Display */}
            {images.map((src, index) => (<img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'opacity 1.1s ease-in-out',
                        opacity: index === currentIndex ? 1 : 0,
                        zIndex: index === currentIndex ? 1 : 0,
                    }}
                />))}

            {/* Dots Indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 2, // Ensure dots stay visible on top of images
                }}
            >
                {images.map((_, index) => (<div
                        key={index}
                        onClick={() => handleDotClick(index)} // Navigate to the corresponding image
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#444' : '#ccc',
                            transition: 'background-color 0.3s ease',
                            cursor: 'pointer', // Make the dots clickable
                        }}
                    />))}
            </div>
        </div>);
};

export default PictureRotation;
