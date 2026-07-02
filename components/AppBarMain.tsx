"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from 'react';
import React from "react";

export default function AppBarMain() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navButtonStyles = {
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 500,
        fontSize: '0.9rem',
        textTransform: 'none',
        letterSpacing: '0.02em',
        px: 2,
        py: 1,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
            color: '#ff6b35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
        },
    };

    const ctaButtonStyles = {
        background: 'linear-gradient(135deg, #ff6b35 0%, #e52e71 100%)',
        color: 'white',
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: 3,
        px: 3,
        py: 1,
        boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
        },
    };

    // Items del bottom nav
    const bottomNavItems = [
        { icon: <HomeIcon />, label: 'Inicio' },
        { icon: <PrintIcon />, label: 'Servicios' },
        { icon: <StyleIcon />, label: 'Portafolio' },
        { icon: <CallIcon />, label: 'Contacto' },
    ];

    return (
        <>
            {/* ===== NAVBAR DESKTOP ===== */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    transition: 'all 0.4s ease',
                    borderBottom: scrolled ? '1px solid rgba(255,107,53,0.1)' : 'none',
                    zIndex: 1100,
                    display: { xs: 'none', md: 'block' },
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        py: 1.5,
                        px: { xs: 2, sm: 4, md: 6 },
                    }}
                >
                    {/* Logo animado moderno */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #ff6b35 0%, #e52e71 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'pulse-glow 2s ease-in-out infinite',
                                '@keyframes pulse-glow': {
                                    '0%, 100%': {
                                        boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
                                        transform: 'scale(1)',
                                    },
                                    '50%': {
                                        boxShadow: '0 0 40px rgba(255, 107, 53, 0.7), 0 0 60px rgba(229, 46, 113, 0.3)',
                                        transform: 'scale(1.05)',
                                    },
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 800,
                                    fontSize: '1.2rem',
                                    fontFamily: '"Montserrat", sans-serif',
                                }}
                            >
                                H
                            </Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 700,
                                background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                letterSpacing: "0.02em",
                                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -2,
                                    left: 0,
                                    width: '0%',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #ff6b35, #e52e71)',
                                    transition: 'width 0.4s ease',
                                },
                                '&:hover::after': {
                                    width: '100%',
                                },
                            }}
                        >
                            HernandezPrint
                        </Typography>
                    </Box>

                    {/* Navegación Desktop */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button startIcon={<PrintIcon />} sx={navButtonStyles}>
                            Servicios
                        </Button>
                        <Button startIcon={<StyleIcon />} sx={navButtonStyles}>
                            Portafolio
                        </Button>
                        <Button startIcon={<CallIcon />} sx={navButtonStyles}>
                            Contacto
                        </Button>
                        <Button sx={ctaButtonStyles}>
                            Cotizar
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* ===== BOTTOM NAVIGATION MÓVIL ===== */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    position: 'fixed',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1300,
                    width: 'calc(100% - 32px)',
                    maxWidth: 400,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-around',
                        width: '100%',
                        height: 70,
                        bgcolor: 'rgba(20, 20, 30, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        border: '1px solid rgba(255,107,53,0.15)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,53,0.05)',
                        position: 'relative',
                        px: 1,
                        pb: 1,
                    }}
                >
                    {bottomNavItems.map((item, index) => {
                        const isActive = activeTab === index;
                        return (
                            <Button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: isActive ? 'flex-start' : 'center',
                                    minWidth: 0,
                                    flex: 1,
                                    height: isActive ? 90 : 50,
                                    position: 'relative',
                                    top: isActive ? -25 : 0,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    bgcolor: 'transparent',
                                    '&:hover': { bgcolor: 'transparent' },
                                }}
                            >
                                {/* Círculo del item activo */}
                                <Box
                                    sx={{
                                        width: isActive ? 56 : 40,
                                        height: isActive ? 56 : 40,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        background: isActive
                                            ? 'linear-gradient(135deg, #ff6b35 0%, #e52e71 100%)'
                                            : 'transparent',
                                        boxShadow: isActive
                                            ? '0 8px 25px rgba(255, 107, 53, 0.4)'
                                            : 'none',
                                        mb: isActive ? 0.5 : 0,
                                    }}
                                >
                                    {React.cloneElement(item.icon, {
                                        sx: {
                                            fontSize: isActive ? 24 : 22,
                                            color: isActive ? 'white' : 'rgba(255,255,255,0.4)',
                                            transition: 'all 0.3s ease',
                                        },
                                    })}
                                </Box>

                                {/* Label */}
                                <Typography
                                    sx={{
                                        fontSize: '0.7rem',
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? '#ff6b35' : 'rgba(255,255,255,0.4)',
                                        transition: 'all 0.3s ease',
                                        mt: isActive ? 0.5 : 0,
                                        opacity: isActive ? 1 : 0.7,
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Button>
                        );
                    })}

                    {/* Indicador de "home bar" estilo iOS/Android */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 6,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 100,
                            height: 4,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.1)',
                        }}
                    />
                </Box>
            </Box>

            {/* Espaciador para que el bottom nav no tape contenido en móvil */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, height: 100 }} />
        </>
    );
}