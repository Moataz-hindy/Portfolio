import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "moatazhindy17@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <Box
            id="contact"
            sx={{
                position: 'relative',
                backgroundColor: '#f8f9fa',
                width: '100%',
                pt: { xs: 8, md: 10 },
                pb: 6,
                px: { xs: '5%', md: '10%' },
                boxSizing: 'border-box',
            }}
        >
            <Box sx={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#1f2937',
                            fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            mb: 2,
                        }}
                    >
                        Get In Touch<span style={{ color: '#10b981' }}>.</span>
                    </Typography>

                    <Typography
                        sx={{
                            color: '#4b5563',
                            fontSize: { xs: '1.05rem', md: '1.2rem' },
                            maxWidth: '680px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        I’m currently seeking <strong>AI & Machine Learning internships</strong> and collaborative research projects.
                        Whether you want to discuss custom neural architectures or have an opportunity, feel free to reach out!
                    </Typography>
                </Box>

                {/* Contact Cards Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                        gap: 3,
                        mb: 8,
                    }}
                >
                    {/* Email Card */}
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            p: 3.5,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                borderColor: '#10b981',
                                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 54,
                                height: 54,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                                color: '#047857',
                            }}
                        >
                            <EmailIcon fontSize="medium" />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                            Email
                        </Typography>
                        <Typography sx={{ color: '#6b7280', fontSize: '0.86rem', mb: 2.5, wordBreak: 'break-all' }}>
                            {email}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                            <Button
                                component="a"
                                href={`mailto:${email}`}
                                variant="contained"
                                size="small"
                                sx={{
                                    backgroundColor: '#047857',
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    borderRadius: '20px',
                                    '&:hover': { backgroundColor: '#05966d' },
                                }}
                            >
                                Send Email
                            </Button>
                            <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                                <IconButton
                                    onClick={handleCopyEmail}
                                    size="small"
                                    sx={{
                                        color: copied ? '#10b981' : '#4b5563',
                                        border: '1px solid #e5e7eb',
                                    }}
                                >
                                    {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    {/* LinkedIn Card */}
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            p: 3.5,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                borderColor: '#10b981',
                                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 54,
                                height: 54,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                                color: '#047857',
                            }}
                        >
                            <LinkedInIcon fontSize="medium" />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                            LinkedIn
                        </Typography>
                        <Typography sx={{ color: '#6b7280', fontSize: '0.86rem', mb: 2.5 }}>
                            moatazashrafmohamed
                        </Typography>
                        <Button
                            component="a"
                            href="https://www.linkedin.com/in/moatazashrafmohamed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            size="small"
                            sx={{
                                mt: 'auto',
                                color: '#047857',
                                borderColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                borderRadius: '20px',
                                '&:hover': {
                                    borderColor: '#047857',
                                    backgroundColor: 'rgba(4, 120, 87, 0.06)',
                                },
                            }}
                        >
                            Connect
                        </Button>
                    </Box>

                    {/* GitHub Card */}
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            p: 3.5,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                borderColor: '#10b981',
                                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 54,
                                height: 54,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                                color: '#047857',
                            }}
                        >
                            <GitHubIcon fontSize="medium" />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                            GitHub
                        </Typography>
                        <Typography sx={{ color: '#6b7280', fontSize: '0.86rem', mb: 2.5 }}>
                            @Moataz-hindy
                        </Typography>
                        <Button
                            component="a"
                            href="https://github.com/Moataz-hindy"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            size="small"
                            sx={{
                                mt: 'auto',
                                color: '#047857',
                                borderColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                borderRadius: '20px',
                                '&:hover': {
                                    borderColor: '#047857',
                                    backgroundColor: 'rgba(4, 120, 87, 0.06)',
                                },
                            }}
                        >
                            View Repos
                        </Button>
                    </Box>

                    {/* Location & Phone Card */}
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            p: 3.5,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                borderColor: '#10b981',
                                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 54,
                                height: 54,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                                color: '#047857',
                            }}
                        >
                            <LocationOnIcon fontSize="medium" />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                            Location & Phone
                        </Typography>
                        <Typography sx={{ color: '#4b5563', fontSize: '0.88rem', fontWeight: 600, mb: 0.5 }}>
                            Cairo, Egypt
                        </Typography>
                        <Typography sx={{ color: '#6b7280', fontSize: '0.8rem', mb: 2 }}>
                            Open to Remote / Relocation
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#047857', fontWeight: 700, fontSize: '0.9rem', mt: 'auto' }}>
                            <PhoneIcon fontSize="small" />
                            <span>+20 111 076 4301</span>
                        </Box>
                    </Box>
                </Box>

                {/* Footer Section */}
                <Box
                    sx={{
                        pt: 5,
                        borderTop: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography sx={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Moataz Ashraf Hendy • AI & Machine Learning Engineer
                    </Typography>

                    <Button
                        component="a"
                        href="#hero"
                        size="small"
                        endIcon={<ArrowUpwardIcon />}
                        sx={{
                            color: '#047857',
                            fontWeight: 700,
                            textTransform: 'none',
                            '&:hover': { backgroundColor: 'rgba(4, 120, 87, 0.08)' },
                        }}
                    >
                        Back to Top
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
