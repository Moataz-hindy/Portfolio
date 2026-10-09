import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const labelSx = {
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#6ee7b7',
};

const cardSx = {
    p: { xs: 3, sm: 3.5 },
    borderRadius: '18px',
    backgroundColor: '#043722',
    border: '1px solid rgba(110, 231, 183, 0.22)',
};

const paragraphSx = {
    color: '#d1d5db',
    fontSize: { xs: '1rem', md: '1.06rem' },
    lineHeight: 1.8,
};

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
                textAlign: 'left',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'flex-start',
                    gap: { xs: 5, lg: 6 },
                    maxWidth: '1240px',
                    margin: '0 auto',
                }}
            >
                {/* ---------------- LEFT SIDE: BIO ---------------- */}
                <Box sx={{ flex: { lg: '1 1 560px' }, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.4rem' },
                                fontWeight: 800,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.15,
                            }}
                        >
                            About Me<span style={{ color: '#6ee7b7' }}>.</span>
                        </Typography>
                        <Typography sx={{ ...labelSx, fontSize: { xs: '0.85rem', md: '0.95rem' }, mt: 1.5 }}>
                            Engineering ML from first principles.
                        </Typography>
                    </Box>

                    <Typography sx={paragraphSx}>
                        I’m a third-year Computer Engineering student at <strong style={{ color: '#ffffff' }}>Egypt University of Informatics</strong>, focused on deep learning, computer vision and LLM systems.
                    </Typography>

                    <Typography sx={paragraphSx}>
                        Rather than treating models as black boxes, I like building them from the math up: a Residual U-Net trained from scratch in PyTorch with ablation studies, gradient-descent engines in pure NumPy, and now a multi-agent RAG platform where LLM analysts debate and their reasoning is measured.
                    </Typography>

                    <Typography sx={paragraphSx}>
                        I’m looking for AI/ML engineering internships working on real problems in computer vision, deep learning and production inference.
                    </Typography>
                </Box>

                {/* ---------------- RIGHT SIDE: EDUCATION & CERTS ---------------- */}
                <Box sx={{ flex: { lg: '1 1 400px' }, minWidth: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Education Card */}
                    <Box sx={cardSx}>
                        <Typography sx={{ ...labelSx, fontSize: '0.75rem', mb: 1.75 }}>EDUCATION</Typography>
                        <Typography sx={{ color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>
                            B.Sc. Computer Engineering
                        </Typography>
                        <Typography sx={{ color: '#d1d5db', fontSize: '0.95rem', mt: 0.5 }}>
                            Egypt University of Informatics · Oct 2023 – 2028 (expected)
                        </Typography>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                mt: 2,
                                px: 1.5,
                                py: 0.75,
                                borderRadius: '999px',
                                backgroundColor: '#6ee7b7',
                                color: '#064e3b',
                                fontSize: '0.82rem',
                                fontWeight: 800,
                            }}
                        >
                            GPA 3.88 / 4.00
                        </Box>
                        <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.7, mt: 2 }}>
                            <strong style={{ color: '#ffffff' }}>Coursework:</strong> Data Structures &amp; Algorithms, Machine Learning, Deep Learning, Data Science, OOP, Discrete Mathematics
                        </Typography>
                    </Box>

                    {/* Certifications Card */}
                    <Box sx={cardSx}>
                        <Typography sx={{ ...labelSx, fontSize: '0.75rem', mb: 1.75 }}>HONORS &amp; CERTIFICATIONS</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 700 }}>Best Team Award: Qubeterra AI NextGen Fellowship</Typography>
                                <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem', mt: 0.25 }}>
                                    For Touchline Intelligence, a multi-agent football RAG platform · Sep 2026
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 700 }}>Machine Learning Specialization</Typography>
                                <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem', mt: 0.25 }}>
                                    DeepLearning.AI &amp; Stanford (Coursera) · Feb 2026
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 700 }}>InnovEgypt Program</Typography>
                                <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem', mt: 0.25 }}>
                                    Technology Innovation &amp; Entrepreneurship Center · Feb 2026
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
