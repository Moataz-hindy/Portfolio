import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={{
                position: 'relative',
                minHeight: '92vh',
                width: '100%',
                backgroundColor: '#f8f9fa',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                pt: { xs: 8, md: 4 },
                pb: { xs: 16, md: 18 },
                boxSizing: 'border-box',
            }}
        >
            {/* Blob 1: Soft Emerald/Mint Green */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-5%',
                    width: { xs: '80vw', md: '45vw' },
                    height: { xs: '80vw', md: '45vw' },
                    backgroundColor: 'rgba(16, 185, 129, 0.16)',
                    borderRadius: '50%',
                    filter: 'blur(90px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Blob 2: Soft Lime Green */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '5%',
                    width: { xs: '70vw', md: '38vw' },
                    height: { xs: '70vw', md: '38vw' },
                    backgroundColor: 'rgba(132, 204, 22, 0.13)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Content Container */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    px: { xs: 3, sm: 6, md: 10 },
                    maxWidth: '850px',
                }}
            >
                {/* Available for Opportunities Chip */}
                <Box sx={{ mb: 2 }}>
                    <Chip
                        icon={<AutoAwesomeIcon sx={{ fontSize: '1rem', color: '#047857' }} />}
                        label="Open to AI/ML & Computer Vision Opportunities • Cairo / Remote"
                        sx={{
                            backgroundColor: 'rgba(16, 185, 129, 0.12)',
                            color: '#047857',
                            fontWeight: 700,
                            fontSize: { xs: '0.78rem', sm: '0.85rem' },
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            py: 0.5,
                        }}
                    />
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1.2rem', sm: '1.4rem' },
                        color: '#4b5563',
                        fontWeight: 500,
                        mb: 1,
                    }}
                >
                    Hi there, I am
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.2rem' },
                        fontWeight: 900,
                        lineHeight: 1.1,
                        color: '#111827',
                        mb: 2,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Moataz Ashraf <span style={{ color: '#10b981' }}>Hendy</span>
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        color: '#047857',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.3rem' },
                        mb: 2.5,
                        letterSpacing: '-0.01em',
                    }}
                >
                    AI & Machine Learning Engineer
                </Typography>

                <Typography
                    sx={{
                        color: '#4b5563',
                        fontSize: { xs: '1.05rem', sm: '1.2rem' },
                        lineHeight: 1.7,
                        maxWidth: '720px',
                        mb: 3.5,
                    }}
                >
                    Computer Engineering student at Egypt University of Informatics (GPA: 3.88/4.00).
                    Passionate about deep learning from first principles, custom neural architectures,
                    computer vision pipelines, and rigorous mathematical machine learning.
                </Typography>

                {/* Tech Pills */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.2,
                        mb: 4,
                    }}
                >
                    {['PyTorch', 'Computer Vision', 'Residual U-Net', 'Scikit-Learn', 'C++', '3.88 GPA'].map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                                backgroundColor: 'white',
                                color: '#1f2937',
                                fontWeight: 600,
                                border: '1px solid #e5e7eb',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
                            }}
                        />
                    ))}
                </Box>

                {/* CTAs */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Button
                        component="a"
                        href="#projects"
                        variant="contained"
                        endIcon={<ArrowDownwardIcon />}
                        sx={{
                            backgroundColor: '#047857',
                            color: 'white',
                            borderRadius: '50px',
                            padding: '13px 32px',
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            boxShadow: '0px 10px 24px rgba(4, 120, 87, 0.35)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#05966d',
                                transform: 'translateY(-2px)',
                                boxShadow: '0px 14px 28px rgba(4, 120, 87, 0.5)',
                            },
                        }}
                    >
                        Explore Projects
                    </Button>

                    <Button
                        component="a"
                        href="#contact"
                        variant="outlined"
                        endIcon={<SendIcon />}
                        sx={{
                            borderRadius: '50px',
                            padding: '12px 28px',
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            color: '#047857',
                            borderColor: '#047857',
                            borderWidth: '2px',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                                borderWidth: '2px',
                                borderColor: '#047857',
                                backgroundColor: 'rgba(4, 120, 87, 0.08)',
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        Contact Me
                    </Button>

                    <Box sx={{ display: 'flex', gap: 1, ml: { xs: 0, sm: 1 } }}>
                        <Button
                            component="a"
                            href="https://github.com/Moataz-hindy"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<GitHubIcon />}
                            sx={{
                                color: '#4b5563',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: '50px',
                                px: 2,
                                '&:hover': { color: '#047857', backgroundColor: 'rgba(4, 120, 87, 0.08)' },
                            }}
                        >
                            GitHub
                        </Button>

                        <Button
                            component="a"
                            href="https://www.linkedin.com/in/moatazashrafmohamed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<LinkedInIcon />}
                            sx={{
                                color: '#4b5563',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: '50px',
                                px: 2,
                                '&:hover': { color: '#047857', backgroundColor: 'rgba(4, 120, 87, 0.08)' },
                            }}
                        >
                            LinkedIn
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Wave Transition to Dark Green (#064e3b) */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    overflow: 'hidden',
                    lineHeight: 0,
                    zIndex: 2,
                }}
            >
                <svg
                    viewBox="0 0 1440 110"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                >
                    <path
                        fill="#064e3b"
                        stroke="#064e3b"
                        strokeWidth="1"
                        d="M0,50 L80,55.3 C160,61,320,71,480,66 C640,61,800,43,960,38 C1120,33,1280,43,1360,48 L1440,53 L1440,120 L0,120 Z"
                    />
                </svg>
            </Box>
        </Box>
    );
}