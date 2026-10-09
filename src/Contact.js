import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
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

    const links = [
        {
            icon: <LinkedInIcon />,
            title: 'LinkedIn',
            detail: 'moatazashrafmohamed',
            href: 'https://www.linkedin.com/in/moatazashrafmohamed/',
            external: true,
        },
        {
            icon: <GitHubIcon />,
            title: 'GitHub',
            detail: '@Moataz-hindy',
            href: 'https://github.com/Moataz-hindy',
            external: true,
        },
        {
            icon: <PhoneIcon />,
            title: '+20 111 076 4301',
            detail: 'Cairo, Egypt · open to remote',
            href: 'tel:+201110764301',
        },
    ];

    return (
        <Box
            id="contact"
            sx={{
                position: 'relative',
                backgroundColor: '#f8f9fa',
                width: '100%',
                pt: { xs: 6, md: 8 },
                pb: 5,
                px: { xs: '5%', md: '8%' },
                boxSizing: 'border-box',
                textAlign: 'left',
            }}
        >
            <Box sx={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
                {/* Main call to action */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        justifyContent: 'space-between',
                        gap: 4,
                        p: { xs: 3.5, md: 7 },
                        borderRadius: '24px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 20px 50px -30px rgba(6, 78, 59, 0.35)',
                    }}
                >
                    <Box sx={{ flex: '1 1 auto', minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.75 }}>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', color: '#047857' }}>
                            CONTACT
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{ color: '#111827', fontSize: { xs: '2rem', sm: '2.6rem', md: '2.9rem' }, fontWeight: 800, letterSpacing: '-0.02em' }}
                        >
                            Let’s build something.
                        </Typography>
                        <Typography sx={{ maxWidth: '560px', color: '#4b5563', fontSize: { xs: '1rem', md: '1.06rem' }, lineHeight: 1.7 }}>
                            I’m looking for <strong>AI &amp; ML internships</strong> and research collaborations. If you have an opportunity or want to talk architectures, my inbox is open.
                        </Typography>
                        <Box
                            component="a"
                            href={`mailto:${email}`}
                            sx={{
                                mt: 0.75,
                                color: '#047857',
                                fontSize: { xs: '1.1rem', md: '1.6rem' },
                                fontWeight: 700,
                                textDecoration: 'underline',
                                textUnderlineOffset: '6px',
                                wordBreak: 'break-all',
                                '&:hover': { color: '#064e3b' },
                            }}
                        >
                            {email}
                        </Box>
                    </Box>

                    <Box sx={{ flex: { md: '0 0 280px' }, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                        <Button
                            component="a"
                            href={`mailto:${email}`}
                            variant="contained"
                            startIcon={<EmailIcon />}
                            sx={{
                                minHeight: 52,
                                borderRadius: '999px',
                                backgroundColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                boxShadow: 'none',
                                '&:hover': { backgroundColor: '#065f46', boxShadow: 'none' },
                            }}
                        >
                            Send an email
                        </Button>
                        <Button
                            onClick={handleCopyEmail}
                            variant="outlined"
                            startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                            sx={{
                                minHeight: 52,
                                borderRadius: '999px',
                                color: '#047857',
                                borderColor: '#047857',
                                borderWidth: '2px',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                '&:hover': { borderWidth: '2px', borderColor: '#047857', backgroundColor: 'rgba(4, 120, 87, 0.06)' },
                            }}
                        >
                            {copied ? 'Copied!' : 'Copy email'}
                        </Button>
                    </Box>
                </Box>

                {/* Secondary links */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
                    {links.map((link) => (
                        <Box
                            key={link.title}
                            component="a"
                            href={link.href}
                            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.75,
                                p: 2.25,
                                borderRadius: '16px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                textDecoration: 'none',
                                color: '#111827',
                                transition: 'border-color 0.25s ease, transform 0.25s ease',
                                '&:hover': { borderColor: '#10b981', transform: 'translateY(-2px)' },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    flexShrink: 0,
                                    borderRadius: '12px',
                                    backgroundColor: '#ecfdf5',
                                    color: '#047857',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {link.icon}
                            </Box>
                            <Box sx={{ minWidth: 0 }}>
                                <Typography sx={{ fontWeight: 700 }}>{link.title}</Typography>
                                <Typography sx={{ fontSize: '0.88rem', color: '#4b5563' }}>{link.detail}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Footer Section */}
                <Box
                    sx={{
                        pt: 3.5,
                        borderTop: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1.5,
                        textAlign: 'center',
                    }}
                >
                    <Typography sx={{ color: '#4b5563', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Moataz Ashraf Hendy • AI &amp; Machine Learning Engineer
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
