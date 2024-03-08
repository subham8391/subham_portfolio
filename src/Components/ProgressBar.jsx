import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProgressBar({targetProgress}) {
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

    return (
        <>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} />
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
        <p className='text-white'>html</p>
        </>
    );
}

export default ProgressBar;
