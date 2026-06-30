"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';
import { useState, useEffect } from 'react';

export default function AppBarMain() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <AppBar 
            position="fixed" 
            elevation={0} 
            sx={{ 
                bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                transition: 'all 0.4s ease',
                borderBottom: scrolled ? '1px solid rgba(255,107,53,0.1)' : 'none',
                zIndex: 1100,
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

                {/* Navegación */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
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

                {/* Menú móvil (simplificado) */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 0.5 }}>
                    <Button sx={{ color: 'white', minWidth: 'auto', p: 1 }}>
                        <PrintIcon />
                    </Button>
                    <Button sx={{ ...ctaButtonStyles, px: 2, py: 0.5, fontSize: '0.8rem' }}>
                        Cotizar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}