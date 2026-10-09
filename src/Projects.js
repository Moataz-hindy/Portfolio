import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LaunchIcon from '@mui/icons-material/Launch';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

export default function Projects() {
    // Dialog state for unavailable repositories
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogProject, setDialogProject] = useState('');

    const handleUnavailableRepo = (projectName) => {
        setDialogProject(projectName);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Box
            id="projects"
            sx={{
                position: 'relative',
                backgroundColor: '#f8f9fa',
                width: '100%',
                pt: { xs: 8, md: 12 },
                pb: { xs: 26, md: 30 },
                px: { xs: '5%', md: '8%' },
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            {/* SECTION TITLE */}
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                <Typography
                    variant="h2"
                    sx={{
                        color: '#1f2937',
                        fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        mb: 1.5,
                    }}
                >
                    Featured Projects<span style={{ color: '#10b981' }}>.</span>
                </Typography>
                <Typography
                    sx={{
                        color: '#6b7280',
                        fontSize: { xs: '1rem', md: '1.15rem' },
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}
                >
                    Production-ready machine learning pipelines, custom neural architectures, and software systems.
                </Typography>
            </Box>

            {/* =========================================================================
                PROJECT 1: FOOTBALL ANALYSIS RAG (FLAGSHIP FEATURED)
            ========================================================================= */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 5, lg: 6 },
                    mb: { xs: 12, md: 16 },
                    maxWidth: '1240px',
                    margin: '0 auto 110px auto',
                }}
            >
                {/* --- VISUAL (Left side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '54%' },
                        flex: { lg: '1 1 54%' },
                        position: 'relative',
                        zIndex: 1,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.01)' },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0f172a',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
                            border: '1px solid #334155',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Browser Top Bar */}
                        <Box
                            sx={{
                                backgroundColor: '#1e293b',
                                py: 1.5,
                                px: 2.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#eab308' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                                <Typography noWrap sx={{ color: '#94a3b8', fontSize: { xs: '0.72rem', sm: '0.8rem' }, fontFamily: 'monospace', ml: 1.5, minWidth: 0 }}>
                                    touchline-intelligence/arena
                                </Typography>
                            </Box>
                            <Chip
                                label="MULTI-AGENT DEMO"
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                    color: '#34d399',
                                    fontWeight: 700,
                                    fontSize: '0.7rem',
                                    height: 22,
                                    flexShrink: 0,
                                    display: { xs: 'none', sm: 'inline-flex' },
                                }}
                            />
                        </Box>

                        {/* Video Player */}
                        <Box
                            sx={{
                                backgroundColor: '#000000',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component="video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                src="/demo.mp4"
                                sx={{
                                    width: '100%',
                                    maxHeight: { xs: '320px', md: '440px' },
                                    objectFit: 'contain',
                                    display: 'block',
                                    backgroundColor: '#050c18',
                                }}
                            />

                            {/* Overlay Banner */}
                            <Box
                                sx={{
                                    p: { xs: 2, sm: 2.5 },
                                    background: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    justifyContent: 'space-between',
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: 1.5,
                                    borderTop: '1px solid rgba(16, 185, 129, 0.25)',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                    <AutoAwesomeIcon sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.92rem' }}>
                                        AI Analysts Debating in Structured Rounds
                                    </Typography>
                                </Box>

                                <Button
                                    component="a"
                                    href="https://github.com/Moataz-hindy/Football-Analysis-RAG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    size="small"
                                    startIcon={<GitHubIcon sx={{ fontSize: '0.9rem' }} />}
                                    sx={{
                                        backgroundColor: '#10b981',
                                        color: '#064e3b',
                                        fontWeight: 800,
                                        fontSize: '0.8rem',
                                        py: 0.5,
                                        px: 1.5,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        '&:hover': { backgroundColor: '#34d399' },
                                    }}
                                >
                                    View Repository
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* --- TEXT (Right side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '46%' },
                        flex: { lg: '1 1 46%' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        zIndex: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LayersIcon sx={{ color: '#10b981', fontSize: '1rem' }} />
                        <Typography sx={{ color: '#047857', fontWeight: 800, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                            FLAGSHIP LLM & RAG PROJECT
                        </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ color: '#111827', fontWeight: 800, mb: 1.5, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                        Touchline Intelligence
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        <Chip
                            icon={<EmojiEventsIcon sx={{ fontSize: '1rem' }} />}
                            label="Best Team Award · Qubeterra AI NextGen Fellowship 2026"
                            size="small"
                            sx={{
                                backgroundColor: '#064e3b',
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '0.78rem',
                                height: 'auto',
                                py: 0.5,
                                maxWidth: '100%',
                                '& .MuiChip-label': { whiteSpace: 'normal' },
                                '& .MuiChip-icon': { color: '#6ee7b7' },
                            }}
                        />
                        <Typography sx={{ color: '#6b7280', fontFamily: 'monospace', fontSize: '0.82rem' }}>
                            Football Analysis RAG
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            p: { xs: 3, md: 3.5 },
                            borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            mb: 2.5,
                            borderLeft: '5px solid #10b981',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem' }}>
                            A multi-agent deliberation platform where LLM football analysts <strong>debate a question in structured rounds</strong>, grounded in a RAG knowledge base of 83 sources (tactics, analytics, IFAB laws) embedded with <strong>PostgreSQL + pgvector</strong>. Agents use tools (knowledge search, web search, calculator) and exchange messages over a strongly connected communication graph. Each debate is then measured with stance trajectories, convergence, influence analysis and sentiment, ending in an LLM synthesis and advisor decision, all served through a FastAPI job queue and a React web app.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
                        {['RAG', 'Multi-Agent LLMs', 'pgvector', 'FastAPI', 'React + Vite', 'Docker'].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                sx={{ color: '#047857', borderColor: '#10b981', fontWeight: 600, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Button
                            component="a"
                            href="https://github.com/Moataz-hindy/Football-Analysis-RAG"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            sx={{
                                backgroundColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                borderRadius: '20px',
                                '&:hover': { backgroundColor: '#05966d' },
                            }}
                        >
                            GitHub Repository
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* =========================================================================
                PROJECT 2: U-NET BACKGROUND REMOVER
            ========================================================================= */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row-reverse' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 5, lg: 6 },
                    mb: { xs: 12, md: 16 },
                    maxWidth: '1240px',
                    margin: '0 auto 110px auto',
                }}
            >
                {/* --- VISUAL PREVIEW / VIDEO / INTERACTIVE (Right side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '54%' },
                        flex: { lg: '1 1 54%' },
                        position: 'relative',
                        zIndex: 1,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.01)' },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0f172a',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
                            border: '1px solid #334155',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Browser Top Bar */}
                        <Box
                            sx={{
                                backgroundColor: '#1e293b',
                                py: 1.5,
                                px: 2.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#eab308' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                                <Typography noWrap sx={{ color: '#94a3b8', fontSize: { xs: '0.72rem', sm: '0.8rem' }, fontFamily: 'monospace', ml: 1.5, minWidth: 0 }}>
                                    background-remover-ui.vercel.app
                                </Typography>
                            </Box>
                            <Chip
                                label="LIVE APP ONLINE"
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                    color: '#34d399',
                                    fontWeight: 700,
                                    fontSize: '0.7rem',
                                    height: 22,
                                    flexShrink: 0,
                                    display: { xs: 'none', sm: 'inline-flex' },
                                }}
                            />
                        </Box>

                        {/* Video / Interactive UI Mockup Body */}
                        <Box
                            sx={{
                                backgroundColor: '#000000',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component="video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                src="/bg_ui.mp4"
                                sx={{
                                    width: '100%',
                                    maxHeight: { xs: '320px', md: '440px' },
                                    objectFit: 'contain',
                                    display: 'block',
                                    backgroundColor: '#050c18',
                                }}
                            />

                            {/* Overlay banner with live links */}
                            <Box
                                sx={{
                                    p: { xs: 2, sm: 2.5 },
                                    background: 'linear-gradient(135deg, #0f172a 0%, #064e3b 100%)',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    justifyContent: 'space-between',
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: 1.5,
                                    borderTop: '1px solid rgba(16, 185, 129, 0.25)',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                    <AutoAwesomeIcon sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.92rem' }}>
                                        Live PyTorch Inference Demo
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Button
                                        component="a"
                                        href="https://background-remover-ui.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        size="small"
                                        endIcon={<LaunchIcon sx={{ fontSize: '0.9rem' }} />}
                                        sx={{
                                            backgroundColor: '#10b981',
                                            color: '#064e3b',
                                            fontWeight: 800,
                                            fontSize: '0.8rem',
                                            py: 0.5,
                                            px: 1.5,
                                            textTransform: 'none',
                                            borderRadius: '8px',
                                            '&:hover': { backgroundColor: '#34d399' },
                                        }}
                                    >
                                        Try Live App
                                    </Button>
                                    <Button
                                        component="a"
                                        href="https://huggingface.co/spaces/moataz115/background-remover"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            borderColor: 'rgba(255,255,255,0.3)',
                                            color: 'white',
                                            fontSize: '0.8rem',
                                            py: 0.5,
                                            px: 1.5,
                                            textTransform: 'none',
                                            borderRadius: '8px',
                                            '&:hover': { borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)' },
                                        }}
                                    >
                                        Hugging Face
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* --- TEXT AREA (Left side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '46%' },
                        flex: { lg: '1 1 46%' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        zIndex: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LayersIcon sx={{ color: '#10b981', fontSize: '1rem' }} />
                        <Typography sx={{ color: '#047857', fontWeight: 800, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                            DEEP LEARNING & COMPUTER VISION
                        </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ color: '#111827', fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                        U-Net Background Remover
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            p: { xs: 3, md: 3.5 },
                            borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            mb: 2.5,
                            borderLeft: '5px solid #10b981',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem' }}>
                            An end-to-end Machine Learning pipeline for human image segmentation. Built mathematically from scratch in <strong>PyTorch</strong> without pre-trained backbones. Conducted strict ablation studies on loss functions and architectures to retain high-frequency details on a constrained dataset (~2,600 images), served through a React frontend and Hugging Face inference backend.
                        </Typography>
                    </Box>

                    {/* Tech Stack Chips */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
                        {['PyTorch', 'Residual U-Net', 'OpenCV', 'Ablation Studies', 'Gradio', 'React UI'].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                sx={{ color: '#047857', borderColor: '#10b981', fontWeight: 600, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                            />
                        ))}
                    </Box>

                    {/* Links */}
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Button
                            component="a"
                            href="https://background-remover-ui.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="contained"
                            endIcon={<OpenInNewIcon />}
                            sx={{
                                backgroundColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                borderRadius: '20px',
                                '&:hover': { backgroundColor: '#05966d' },
                            }}
                        >
                            Live App
                        </Button>
                        <IconButton
                            component="a"
                            href="https://huggingface.co/spaces/moataz115/background-remover"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                            title="Hugging Face Space"
                        >
                            <OpenInNewIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleUnavailableRepo('U-Net Background Remover')}
                            sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                            title="GitHub Repository"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* =========================================================================
                PROJECT 3: EGYPT MULTI-ASSET AI PORTFOLIO OPTIMIZATION SYSTEM
            ========================================================================= */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 5, lg: 6 },
                    mb: { xs: 12, md: 16 },
                    maxWidth: '1240px',
                    margin: '0 auto 110px auto',
                }}
            >
                {/* --- VISUAL (Left side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '54%' },
                        flex: { lg: '1 1 54%' },
                        position: 'relative',
                        zIndex: 1,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.01)' },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0f172a',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(6, 78, 59, 0.35)',
                            border: '1px solid #334155',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Browser / App Header */}
                        <Box
                            sx={{
                                backgroundColor: '#1e293b',
                                py: 1.5,
                                px: 2.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#eab308' }} />
                                <Box sx={{ width: 12, height: 12, flexShrink: 0, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                                <Typography noWrap sx={{ color: '#94a3b8', fontSize: { xs: '0.72rem', sm: '0.8rem' }, fontFamily: 'monospace', ml: 1.5, minWidth: 0 }}>
                                    portfolio_optimization_demo.mp4
                                </Typography>
                            </Box>
                            <Chip
                                label="DATA SCIENCE DEMO"
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                    color: '#34d399',
                                    fontWeight: 700,
                                    fontSize: '0.7rem',
                                    height: 22,
                                    flexShrink: 0,
                                    display: { xs: 'none', sm: 'inline-flex' },
                                }}
                            />
                        </Box>

                        {/* Video Player */}
                        <Box
                            sx={{
                                backgroundColor: '#000000',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component="video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                src="/portfolio_optimization.mp4"
                                sx={{
                                    width: '100%',
                                    maxHeight: { xs: '320px', md: '440px' },
                                    objectFit: 'contain',
                                    display: 'block',
                                    backgroundColor: '#050c18',
                                }}
                            />

                            {/* Overlay Banner */}
                            <Box
                                sx={{
                                    p: { xs: 2, sm: 2.5 },
                                    background: 'linear-gradient(135deg, #043722 0%, #064e3b 100%)',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    justifyContent: 'space-between',
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: 1.5,
                                    borderTop: '1px solid rgba(16, 185, 129, 0.25)',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                    <AutoAwesomeIcon sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.92rem' }}>
                                        AI Risk Parity & Asset Allocation
                                    </Typography>
                                </Box>

                                <Button
                                    component="a"
                                    href="https://github.com/Moataz-hindy/Egypt-Multi-Asset-AI-Portfolio-Optimization/tree/main"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    size="small"
                                    startIcon={<GitHubIcon sx={{ fontSize: '0.9rem' }} />}
                                    sx={{
                                        backgroundColor: '#10b981',
                                        color: '#064e3b',
                                        fontWeight: 800,
                                        fontSize: '0.8rem',
                                        py: 0.5,
                                        px: 1.5,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        '&:hover': { backgroundColor: '#34d399' },
                                    }}
                                >
                                    View Repository
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* --- TEXT (Right side) --- */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '46%' },
                        flex: { lg: '1 1 46%' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        zIndex: 2,
                    }}
                >
                    <Typography sx={{ color: '#047857', fontWeight: 800, fontFamily: 'monospace', mb: 1, letterSpacing: '0.05em' }}>
                        DATA SCIENCE & MACHINE LEARNING
                    </Typography>

                    <Typography variant="h3" sx={{ color: '#111827', fontWeight: 800, mb: 2, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                        AI Portfolio Optimization System
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            p: { xs: 3, md: 3.5 },
                            borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                            mb: 2.5,
                            borderLeft: '5px solid #10b981',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem' }}>
                            Conducted extensive Exploratory Data Analysis (EDA) and robust feature engineering on diverse financial market datasets. Engineered machine learning data pipelines to predict optimal asset allocation weights, maximizing Sharpe ratio and risk-adjusted returns while minimizing volatility.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
                        {['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Financial Analytics', 'EDA'].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                sx={{ color: '#047857', borderColor: '#10b981', fontWeight: 600, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Button
                            component="a"
                            href="https://github.com/Moataz-hindy/Egypt-Multi-Asset-AI-Portfolio-Optimization/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            sx={{
                                backgroundColor: '#047857',
                                textTransform: 'none',
                                fontWeight: 700,
                                borderRadius: '20px',
                                '&:hover': { backgroundColor: '#05966d' },
                            }}
                        >
                            GitHub Repository
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* =========================================================================
                TIER 2: OTHER NOTEWORTHY PROJECTS GRID (Streamlined)
            ========================================================================= */}
            <Box sx={{ mt: { xs: 8, md: 12 }, mb: 6, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#1f2937', fontWeight: 800 }}>
                    Other Noteworthy Projects
                </Typography>
                <Typography sx={{ color: '#10b981', fontFamily: 'monospace', mt: 1 }}>
                    software engineering, algorithms & assistive research
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                    },
                    // An odd card out stretches across the row instead of sitting alone
                    '& > :last-child:nth-of-type(odd)': { gridColumn: { sm: '1 / -1' } },
                    gap: 3,
                    maxWidth: '1240px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Card 0: Set-Piece Tactical Analyzer (ITI capstone) */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        p: 3.5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                            borderColor: '#10b981',
                        },
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ color: '#10b981' }}>
                                <AutoAwesomeIcon />
                            </Box>
                            <IconButton
                                component="a"
                                href="https://github.com/Moataz-hindy/Set-piece-rag-assistant"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                                title="View on GitHub"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Typography variant="h6" sx={{ color: '#111827', fontWeight: 700, mb: 1.5 }}>
                            Set-Piece Tactical Analyzer – Multimodal RAG
                        </Typography>

                        <Typography sx={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, mb: 3 }}>
                            ITI graduation capstone that helps coaches analyze corner kicks. A YOLOv8 vision module turns an uploaded image into spatial context (e.g. a crowded goalkeeper), which is fused with the coach's question to retrieve from 20 coaching PDFs in ChromaDB. A local Ollama LLM (phi3) then gives a cited tactical answer.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>
                        <span>YOLOv8</span>
                        <span>ChromaDB</span>
                        <span>LangChain</span>
                        <span>Ollama</span>
                        <span>FastAPI</span>
                        <span>Streamlit</span>
                    </Box>
                </Box>

                {/* Card 1: MathGPT */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        p: 3.5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                            borderColor: '#10b981',
                        },
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ color: '#10b981' }}>
                                <AutoAwesomeIcon />
                            </Box>
                            <IconButton
                                onClick={() => handleUnavailableRepo('MathGPT – Handwritten Math Solver & AI Tutor')}
                                size="small"
                                sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                                title="GitHub Repository"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Typography variant="h6" sx={{ color: '#111827', fontWeight: 700, mb: 1.5 }}>
                            MathGPT – Handwritten Math AI
                        </Typography>

                        <Typography sx={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, mb: 3 }}>
                            An end-to-end AI desktop system translating handwritten math equations into solved, step-by-step digital explanations. Architected the interactive React desktop interface (whiteboard canvas and camera inputs bridged via pywebview) and engineered the system prompts for the LLM tutoring layer.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>
                        <span>React</span>
                        <span>Prompt Engineering</span>
                        <span>LLM Tutoring</span>
                        <span>pywebview</span>
                    </Box>
                </Box>

                {/* Card 2: Linear Regression from Scratch */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        p: 3.5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                            borderColor: '#10b981',
                        },
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ color: '#10b981' }}>
                                <AutoAwesomeIcon />
                            </Box>
                            <IconButton
                                component="a"
                                href="https://github.com/Moataz-hindy/linear-regression-from-scratch"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                                title="View on GitHub"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Typography variant="h6" sx={{ color: '#111827', fontWeight: 700, mb: 1.5 }}>
                            Linear Regression from Scratch
                        </Typography>

                        <Typography sx={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, mb: 3 }}>
                            Implemented a linear regression algorithm mathematically from scratch in pure NumPy. Developed gradient descent, custom cost functions, and benchmarked metrics against Scikit-Learn on Kaggle datasets.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>
                        <span>NumPy</span>
                        <span>Python</span>
                        <span>Gradient Descent</span>
                        <span>Kaggle</span>
                    </Box>
                </Box>

                {/* Card 3: Lexiland Dyslexia Detection AI */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        p: 3.5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                            borderColor: '#10b981',
                        },
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ color: '#10b981' }}>
                                <LayersIcon />
                            </Box>
                            <IconButton
                                onClick={() => handleUnavailableRepo('Lexiland – Early Dyslexia Detection AI')}
                                size="small"
                                sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                                title="GitHub Repository"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Typography variant="h6" sx={{ color: '#111827', fontWeight: 700, mb: 1.5 }}>
                            Lexiland – Dyslexia Detection AI
                        </Typography>

                        <Typography sx={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, mb: 3 }}>
                            AI prototype co-developed during the NAID internship. Uses standard webcam computer vision to track eye-movement saccades for early dyslexia indicators, paired with assistive neurodivergent UI features.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>
                        <span>OpenCV</span>
                        <span>Computer Vision</span>
                        <span>Python</span>
                        <span>React</span>
                    </Box>
                </Box>

                {/* Card 4: Virtual Event Management System */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        p: 3.5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                            borderColor: '#10b981',
                        },
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ color: '#10b981' }}>
                                <LayersIcon />
                            </Box>
                            <IconButton
                                component="a"
                                href="https://github.com/Moataz-hindy/Virtual-Event-Management-System/tree/main/Main"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#4b5563', '&:hover': { color: '#10b981' } }}
                                title="View on GitHub"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Typography variant="h6" sx={{ color: '#111827', fontWeight: 700, mb: 1.5 }}>
                            Virtual Event Management System
                        </Typography>

                        <Typography sx={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7, mb: 3 }}>
                            University team project: a Qt desktop application for managing virtual events, built on core OOP principles (inheritance, polymorphism, encapsulation) with modular backend code for user roles, scheduling and registrations.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>
                        <span>C++</span>
                        <span>Qt Framework</span>
                        <span>OOP</span>
                        <span>Data Structures</span>
                    </Box>
                </Box>
            </Box>

            {/* =========================================================================
                REPOSITORY UNAVAILABLE DIALOG / POP-UP
            ========================================================================= */}
            <Dialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                PaperProps={{
                    sx: {
                        borderRadius: '16px',
                        p: 1.5,
                        maxWidth: '450px',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                    }
                }}
            >
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#111827', fontWeight: 700 }}>
                    <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#047857',
                    }}>
                        <LockIcon fontSize="small" />
                    </Box>
                    Repository Status
                </DialogTitle>

                <DialogContent>
                    <Typography sx={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7, mb: 1 }}>
                        The repository for <strong style={{ color: '#047857' }}>{dialogProject}</strong> is currently <strong>private</strong> or being prepared for open-source release.
                    </Typography>
                    <Typography sx={{ color: '#6b7280', fontSize: '0.88rem' }}>
                        If you are an interviewer, recruiter, or collaborator and would like to see a demo, code walkthrough, or access, feel free to reach out directly!
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 2, pt: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        component="a"
                        href="#contact"
                        onClick={handleCloseDialog}
                        variant="contained"
                        size="small"
                        startIcon={<EmailIcon />}
                        sx={{
                            backgroundColor: '#047857',
                            textTransform: 'none',
                            fontWeight: 700,
                            borderRadius: '20px',
                            '&:hover': { backgroundColor: '#05966d' },
                        }}
                    >
                        Contact Moataz
                    </Button>
                    <Button
                        onClick={handleCloseDialog}
                        size="small"
                        sx={{
                            color: '#6b7280',
                            textTransform: 'none',
                            fontWeight: 600,
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Bottom Wave Transition to Dark Green (#064e3b) for Experience */}
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
                    viewBox="0 0 1440 220"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                >
                    <path
                        fill="#064e3b"
                        d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </Box>
        </Box>
    );
}