import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                position: 'relative',
                backgroundColor: '#064e3b',
                width: '100%',
                pt: { xs: 8, md: 10 },
                pb: { xs: 6, md: 8 },
                px: { xs: '5%', md: '8%' },
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: { xs: 5, lg: 6 },
                    maxWidth: '1240px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* ---------------- LEFT SIDE: BIO (55%) ---------------- */}
                <Box
                    sx={{
                        flex: '1 1 550px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontSize: { xs: '2.4rem', sm: '3rem', md: '3.4rem' },
                            fontWeight: 800,
                            margin: '0 0 24px 0',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        About Me<span style={{ color: '#10b981' }}>.</span>
                    </Typography>

                    <Typography
                        sx={{
                            color: '#cbd5e1',
                            fontSize: { xs: '1.05rem', md: '1.15rem' },
                            lineHeight: 1.8,
                            mb: 2.5,
                        }}
                    >
                        I’m a third-year Computer Engineering student at <strong style={{ color: '#a7f3d0' }}>Egypt University of Informatics (EUI)</strong> with a <strong style={{ color: '#10b981' }}>3.88/4.00 GPA</strong>, driven by a deep focus on Artificial Intelligence, Deep Learning, and Computer Vision.
                    </Typography>

                    <Typography
                        sx={{
                            color: '#cbd5e1',
                            fontSize: { xs: '1.05rem', md: '1.15rem' },
                            lineHeight: 1.8,
                            mb: 2.5,
                        }}
                    >
                        Rather than treating AI models as black boxes or relying solely on off-the-shelf pre-trained backbones, I enjoy engineering machine learning systems from mathematical first principles. From building a custom <strong style={{ color: '#10b981' }}>Residual U-Net from scratch in PyTorch</strong> with rigorous ablation studies to implementing linear regression and gradient descent engines in pure NumPy, I believe true mastery comes from architectural understanding.
                    </Typography>

                    <Typography
                        sx={{
                            color: '#cbd5e1',
                            fontSize: { xs: '1.05rem', md: '1.15rem' },
                            lineHeight: 1.8,
                            mb: 3,
                        }}
                    >
                        I actively look for AI/ML engineering internships where I can tackle challenging real-world problems in computer vision, deep learning architecture, and production inference pipelines.
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                        {['PyTorch Enthusiast', 'Mathematical ML', 'Computer Vision', 'Ablation Testing', 'Research-Driven'].map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                                    color: '#a7f3d0',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    fontWeight: 600,
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* ---------------- RIGHT SIDE: EDUCATION & CERTS (45%) ---------------- */}
                <Box
                    sx={{
                        flex: '1 1 420px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        width: '100%',
                    }}
                >
                    {/* Education Card */}
                    <Box
                        sx={{
                            backgroundColor: 'rgba(16, 185, 129, 0.06)',
                            border: '1px solid rgba(16, 185, 129, 0.35)',
                            borderRadius: '16px',
                            p: { xs: 3, sm: 4 },
                            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#10b981',
                                transform: 'translateY(-3px)',
                                boxShadow: '0 16px 36px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                            <SchoolIcon sx={{ color: '#10b981', fontSize: '1.8rem' }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                }}
                            >
                                Education
                            </Typography>
                        </Box>

                        <Typography sx={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 700, mb: 0.5 }}>
                            Bachelor of Computer Engineering
                        </Typography>

                        <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1.05rem', mb: 0.5 }}>
                            Egypt University of Informatics (EUI)
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 2 }}>
                            <Typography sx={{ color: '#94a3b8', fontSize: '0.92rem' }}>
                                Oct 2023 – Present (Expected 2028)
                            </Typography>
                            <Chip
                                label="GPA: 3.88 / 4.00"
                                size="small"
                                sx={{
                                    backgroundColor: '#10b981',
                                    color: '#064e3b',
                                    fontWeight: 800,
                                }}
                            />
                        </Box>

                        <Typography sx={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            <span style={{ color: '#a7f3d0', fontWeight: 700 }}>Key Coursework:</span><br />
                            Data Structures & Algorithms, Machine Learning, Deep Learning, Data Science, Object-Oriented Programming (OOP), Discrete Mathematics.
                        </Typography>
                    </Box>

                    {/* Certifications Card */}
                    <Box
                        sx={{
                            backgroundColor: 'rgba(16, 185, 129, 0.06)',
                            border: '1px solid rgba(16, 185, 129, 0.35)',
                            borderRadius: '16px',
                            p: { xs: 3, sm: 4 },
                            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#10b981',
                                transform: 'translateY(-3px)',
                                boxShadow: '0 16px 36px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                            <WorkspacePremiumIcon sx={{ color: '#10b981', fontSize: '1.8rem' }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                }}
                            >
                                Certifications & Honors
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#10b981', fontWeight: 700, fontSize: '1.05rem', mb: 0.3 }}>
                                Machine Learning Specialization
                            </Typography>
                            <Typography sx={{ color: '#cbd5e1', fontSize: '0.92rem' }}>
                                DeepLearning.AI & Stanford University (Coursera) • Feb 2026
                            </Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ color: '#10b981', fontWeight: 700, fontSize: '1.05rem', mb: 0.3 }}>
                                InnovEgypt Program
                            </Typography>
                            <Typography sx={{ color: '#cbd5e1', fontSize: '0.92rem' }}>
                                Technology Innovation & Entrepreneurship Center • Feb 2026
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}