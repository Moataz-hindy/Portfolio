import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: "AI Intern",
            company: "National Academy of Information Technology for Persons with Disabilities (NAID)",
            date: "Jun 2025 – Sept 2025",
            type: "Work Experience",
            icon: <WorkIcon sx={{ fontSize: '1rem', color: '#10b981' }} />,
            description: [
                "Co-developed Lexiland, an AI-driven prototype utilizing computer vision and standard webcams to track eye movement patterns for early dyslexia detection.",
                "Designed and implemented assistive features including a text-to-speech module and an accessible dyslexia-friendly UI layout in React to support neurodivergent learners.",
                "Presented a functional prototype, comprehensive technical documentation, and a business model canvas to key stakeholders during the final team pitch."
            ]
        },
        {
            id: 2,
            role: "Operations Committee (OC) Member",
            company: "IEEE EUI Student Branch (IEEE EUI SB)",
            date: "Oct 2024 – May 2025",
            type: "Leadership & Community",
            icon: <GroupsIcon sx={{ fontSize: '1rem', color: '#10b981' }} />,
            description: [
                "Contributed to planning, logistics, and ground operations for technical engineering workshops, hackathons, and student activities.",
                "Handled technical event equipment setup, coordinated cross-functional volunteer schedules, and managed participant flow to guarantee seamless execution."
            ]
        },
        {
            id: 3,
            role: "University Ambassador & Organizer",
            company: "Developer Student Clubs (DSC) MENA",
            date: "April 2024",
            type: "Leadership & Community",
            icon: <GroupsIcon sx={{ fontSize: '1rem', color: '#10b981' }} />,
            description: [
                "Coordinated keynote speakers, managed event logistics, and oversaw registration for the inaugural regional DSC MENA event hosted at Egypt University of Informatics.",
                "Collaborated within a multicultural team environment, developing strong project management, communication, and organizational execution skills."
            ]
        }
    ];

    return (
        <Box
            id="experience"
            sx={{
                position: 'relative',
                backgroundColor: '#064e3b',
                width: '100%',
                pt: { xs: 8, md: 12 },
                pb: { xs: 26, md: 30 },
                px: { xs: '5%', md: '10%' },
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            {/* SECTION TITLE */}
            <Typography
                variant="h2"
                sx={{
                    color: 'white',
                    fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 1.5,
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                }}
            >
                Experience & Leadership<span style={{ color: '#10b981' }}>.</span>
            </Typography>

            <Typography
                sx={{
                    color: '#94a3b8',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    textAlign: 'center',
                    maxWidth: '700px',
                    margin: '0 auto 70px auto',
                    lineHeight: 1.7,
                }}
            >
                Applied AI research, technical internships, and student leadership in engineering communities.
            </Typography>

            {/* THE TIMELINE CONTAINER */}
            <Box sx={{ position: 'relative', maxWidth: '920px', margin: '0 auto' }}>
                {/* --- THE SPINE (The Vertical Line) --- */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        bottom: 40,
                        left: { xs: '20px', md: '40px' },
                        width: '2px',
                        backgroundColor: 'rgba(16, 185, 129, 0.3)',
                        zIndex: 1,
                    }}
                />

                {/* --- THE EXPERIENCE ITEMS --- */}
                {experiences.map((exp, index) => (
                    <Box
                        key={exp.id}
                        sx={{
                            position: 'relative',
                            pl: { xs: '55px', md: '90px' },
                            mb: index === experiences.length - 1 ? 0 : 6,
                            zIndex: 2,
                        }}
                    >
                        {/* THE NODE (The Glowing Dot) */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '13px', md: '33px' },
                                top: '22px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: '#10b981',
                                boxShadow: '0 0 0 5px rgba(16, 185, 129, 0.25)',
                                zIndex: 3,
                            }}
                        />

                        {/* THE CARD */}
                        <Box
                            sx={{
                                backgroundColor: '#043722',
                                border: '1px solid rgba(16, 185, 129, 0.25)',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                borderRadius: '16px',
                                p: { xs: 3, sm: 4 },
                                transition: 'all 0.35s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    borderColor: '#10b981',
                                    boxShadow: '0 25px 50px rgba(16, 185, 129, 0.2)',
                                },
                            }}
                        >
                            {/* Type and Date Header */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                                <Chip
                                    icon={exp.icon}
                                    label={exp.type}
                                    size="small"
                                    sx={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                                        color: '#a7f3d0',
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                    }}
                                />
                                <Typography sx={{ color: '#94a3b8', fontFamily: 'monospace', fontSize: '0.88rem' }}>
                                    {exp.date}
                                </Typography>
                            </Box>

                            {/* Role & Company */}
                            <Typography variant="h5" sx={{ color: '#10b981', fontWeight: 800, mb: 0.5, fontSize: { xs: '1.25rem', md: '1.45rem' } }}>
                                {exp.role}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 2, fontSize: { xs: '1.05rem', md: '1.15rem' } }}>
                                {exp.company}
                            </Typography>

                            {/* Description Bullets */}
                            <Box
                                component="ul"
                                sx={{
                                    color: '#cbd5e1',
                                    m: 0,
                                    pl: 2.5,
                                    '& li': {
                                        mb: 1.2,
                                        lineHeight: 1.7,
                                        fontSize: { xs: '0.92rem', md: '0.98rem' },
                                    },
                                }}
                            >
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* THE BOTTOM ESCAPE WAVE (Transitions to Light #f8f9fa for Contact) */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    overflow: 'hidden',
                    lineHeight: 0,
                }}
            >
                <svg
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                >
                    <path
                        fill="#f8f9fa"
                        d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </svg>
            </Box>
        </Box>
    );
}