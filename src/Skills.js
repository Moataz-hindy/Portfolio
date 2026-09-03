import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

const skillCategories = [
    {
        title: 'Deep Learning & Computer Vision',
        icon: <PsychologyIcon sx={{ color: '#10b981', fontSize: '2rem' }} />,
        skills: [
            'PyTorch',
            'Custom Residual U-Net',
            'Image Segmentation',
            'Computer Vision',
            'OpenCV',
            'TensorFlow',
            'Ablation Studies',
            'Eye-Tracking Models',
        ],
    },
    {
        title: 'Machine Learning & Data Science',
        icon: <BarChartIcon sx={{ color: '#10b981', fontSize: '2rem' }} />,
        skills: [
            'Scikit-Learn',
            'NumPy',
            'Pandas',
            'MATLAB',
            'Exploratory Data Analysis (EDA)',
            'Feature Engineering',
            'Optimization from Scratch',
            'Gradient Descent Engines',
        ],
    },
    {
        title: 'Languages & Core CS Foundations',
        icon: <CodeIcon sx={{ color: '#10b981', fontSize: '2rem' }} />,
        skills: [
            'Python',
            'C++',
            'C',
            'JavaScript',
            'SQL',
            'Data Structures & Algorithms',
            'Object-Oriented Design (OOP)',
            'Discrete Mathematics',
        ],
    },
    {
        title: 'Frameworks, Tools & Platforms',
        icon: <BuildIcon sx={{ color: '#10b981', fontSize: '2rem' }} />,
        skills: [
            'Git & GitHub',
            'Hugging Face Spaces',
            'Gradio',
            'Linux / Bash',
            'Qt Framework',
            'React',
            'Prompt Engineering',
            'pywebview',
            'REST APIs',
        ],
    },
];

export default function Skills() {
    return (
        <Box
            id="skills"
            sx={{
                position: 'relative',
                backgroundColor: '#064e3b',
                width: '100%',
                pt: { xs: 8, md: 10 },
                pb: { xs: 24, md: 28 }, // Space for the bottom wave transition into light Projects section
                px: { xs: '5%', md: '8%' },
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Title */}
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontSize: { xs: '2.4rem', sm: '3rem', md: '3.4rem' },
                        fontWeight: 800,
                        textAlign: 'center',
                        mb: 2,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Skills<span style={{ color: '#10b981' }}>.</span>
                </Typography>

                <Typography
                    sx={{
                        color: '#94a3b8',
                        fontSize: { xs: '1rem', md: '1.15rem' },
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 60px auto',
                        lineHeight: 1.7,
                    }}
                >
                    Specialized in designing custom neural architectures, data pipelines, and mathematical ML models with solid engineering foundations.
                </Typography>

                {/* Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)',
                        },
                        gap: 3.5,
                    }}
                >
                    {skillCategories.map((cat, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                backgroundColor: '#043722',
                                border: '1px solid rgba(16, 185, 129, 0.25)',
                                borderRadius: '16px',
                                p: { xs: 3.5, md: 4 },
                                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    borderColor: '#10b981',
                                    boxShadow: '0 20px 45px rgba(16, 185, 129, 0.2)',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                    }}
                                >
                                    {cat.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    }}
                                >
                                    {cat.title}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                                {cat.skills.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        sx={{
                                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                            color: '#a7f3d0',
                                            border: '1px solid rgba(16, 185, 129, 0.3)',
                                            fontWeight: 600,
                                            fontSize: '0.88rem',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                backgroundColor: '#10b981',
                                                color: '#064e3b',
                                                borderColor: '#10b981',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Bottom Wave Transition to Light (#f8f9fa) for Projects */}
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
                        fill="#f8f9fa"
                        stroke="#f8f9fa"
                        strokeWidth="1"
                        d="M0,50 L80,55.3 C160,61,320,71,480,66 C640,61,800,43,960,38 C1120,33,1280,43,1360,48 L1440,53 L1440,120 L0,120 Z"
                    />
                </svg>
            </Box>
        </Box>
    );
}
