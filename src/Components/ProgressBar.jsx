import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProgressBar({ targetProgress, skillName }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= targetProgress) {
                    clearInterval(timer);
                    return targetProgress;
                }
                return prevProgress + 10;
            });
        }, 10);

        return () => {
            clearInterval(timer);
        };
    }, [targetProgress]);

    // Determine color based on progress value
    const getColor = (progress) => {
        if (progress < 50) {
            return 'red'; 
        }else if (progress < 90 && progress>=80) {
            return 'skyblue'; 
        }else if (progress < 80 && progress>=70) {
            return 'yellow'; 
        }else if (progress < 70 && progress>=60) {
            return 'orange'; 
        }else if (progress < 60 && progress>=50) {
            return 'orangered'; 
        }else {
            return 'green'; 
        }
    };

    return (
        <>
            <div className="progressbar flex flex-col justify-center items-center">
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                        variant="determinate"
                        value={progress}
                        size={150}
                        sx={{ color: getColor(progress) }} // Set color dynamically
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className='text-white'>{`${Math.round(progress)}%`}</span>
                    </Box>
                </Box>
                <p className='text-white mt-2'>{skillName}</p>
            </div>
        </>
    );
}

export default ProgressBar;
