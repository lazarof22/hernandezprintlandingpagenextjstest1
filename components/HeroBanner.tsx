"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function HeroBanner() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #2d1b4e 100%)",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Efectos de fondo tipo Fluxora */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "float 6s ease-in-out infinite",
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-30px)' },
                    },
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "20%",
                    left: "10%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(229,46,113,0.1) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Grid de contenido */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    px: { xs: 3, sm: 5, md: 8 },
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                    gap: { xs: 4, lg: 8 },
                    alignItems: "center",
                    position: "relative",
                    zIndex: 2,
                    pt: { xs: 12, sm: 10 },
                }}
            >
                {/* Columna izquierda: Texto */}
                <Box sx={{ order: { xs: 2, lg: 1 } }}>
                    {/* Badge superior */}
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.8,
                            borderRadius: 5,
                            border: "1px solid rgba(255,107,53,0.3)",
                            background: "rgba(255,107,53,0.05)",
                            mb: 3,
                        }}
                    >
                        <TrendingUpIcon sx={{ color: "#ff6b35", fontSize: 16 }} />
                        <Typography sx={{ color: "#ff6b35", fontSize: "0.8rem", fontWeight: 600 }}>
                            Impresión Profesional
                        </Typography>
                    </Box>

                    {/* Título principal */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
                            lineHeight: 1.1,
                            color: "white",
                            mb: 3,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Impresiones que{" "}
                        <Box
                            component="span"
                            sx={{
                                background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                fontStyle: "italic",
                            }}
                        >
                            destacan
                        </Box>{" "}
                        tu marca
                    </Typography>

                    {/* Subtítulo */}
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                            maxWidth: "500px",
                            mb: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Impresión digital, gran formato, escaneo, plastificado y personalizados con acabados profesionales. Sin estrés. Solo calidad.
                    </Typography>

                    {/* Lista de features */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 5 }}>
                        {[
                            "Impresión digital de alta calidad",
                            "Gran formato para eventos",
                            "Escaneo y plastificado profesional",
                            "Entrega rápida y garantizada"
                        ].map((item, i) => (
                            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                <CheckCircleIcon sx={{ color: "#ff6b35", fontSize: 20 }} />
                                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Botones CTA */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #ff6b35 0%, #e52e71 100%)",
                                color: "white",
                                fontWeight: 600,
                                textTransform: "none",
                                borderRadius: 3,
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                                boxShadow: "0 8px 30px rgba(255, 107, 53, 0.4)",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 12px 40px rgba(255, 107, 53, 0.6)",
                                },
                            }}
                        >
                            Solicitar cotización
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "rgba(255,255,255,0.8)",
                                borderColor: "rgba(255,255,255,0.2)",
                                textTransform: "none",
                                borderRadius: 3,
                                px: 4,
                                py: 1.5,
                                fontWeight: 500,
                                '&:hover': {
                                    borderColor: "#ff6b35",
                                    color: "#ff6b35",
                                    background: "rgba(255,107,53,0.05)",
                                },
                            }}
                        >
                            Ver portafolio
                        </Button>
                    </Box>

                    {/* Stats */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: 3, sm: 6 },
                            mt: 6,
                            pt: 4,
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        {[
                            { num: "150+", label: "Proyectos entregados" },
                            { num: "98%", label: "Clientes satisfechos" },
                            { num: "10+", label: "Años de experiencia" },
                        ].map((stat, i) => (
                            <Box key={i}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1.5rem", sm: "2rem" },
                                        fontWeight: 800,
                                        background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {stat.num}
                                </Typography>
                                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", mt: 0.5 }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Columna derecha: Tu foto de perfil lateral */}
                <Box
                    sx={{
                        order: { xs: 1, lg: 2 },
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                    }}
                >
                    {/* Glow detrás de la imagen */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: { xs: "250px", sm: "350px", md: "450px" },
                            height: { xs: "250px", sm: "350px", md: "450px" },
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(255,107,53,0.3), rgba(229,46,113,0.2))",
                            filter: "blur(40px)",
                            animation: "pulse 4s ease-in-out infinite",
                            '@keyframes pulse': {
                                '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
                                '50%': { opacity: 1, transform: 'scale(1.1)' },
                            },
                        }}
                    />

                    {/* Contenedor de imagen con borde glow */}
                    <Box
                        sx={{
                            position: "relative",
                            width: { xs: "280px", sm: "380px", md: "480px" },
                            height: { xs: "280px", sm: "380px", md: "480px" },
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "2px solid rgba(255,107,53,0.2)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,107,53,0.1)",
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/profile-hero.png"
                            alt="HernandezPrint - Perfil"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                filter: "contrast(1.1) saturate(1.1)",
                            }}
                        />
                        {/* Overlay gradiente */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.8) 100%)",
                            }}
                        />
                    </Box>

                    {/* Elementos decorativos flotantes */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10%",
                            right: "5%",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: "rgba(255,107,53,0.15)",
                            border: "1px solid rgba(255,107,53,0.3)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Typography sx={{ color: "#ff6b35", fontSize: "0.75rem", fontWeight: 600 }}>
                            ✦ Alta Calidad
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "15%",
                            left: "0%",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: "rgba(229,46,113,0.15)",
                            border: "1px solid rgba(229,46,113,0.3)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Typography sx={{ color: "#e52e71", fontSize: "0.75rem", fontWeight: 600 }}>
                            ✦ Entrega Rápida
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Scroll indicator */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    animation: "bounce 2s infinite",
                    '@keyframes bounce': {
                        '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                        '40%': { transform: 'translateX(-50%) translateY(-10px)' },
                        '60%': { transform: 'translateX(-50%) translateY(-5px)' },
                    },
                }}
            >
                <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
                    Desplaza para ver más
                </Typography>
                <Box
                    sx={{
                        width: 24,
                        height: 40,
                        borderRadius: 12,
                        border: "2px solid rgba(255,255,255,0.3)",
                        display: "flex",
                        justifyContent: "center",
                        pt: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 4,
                            height: 8,
                            borderRadius: 2,
                            background: "#ff6b35",
                            animation: "scroll-dot 1.5s ease-in-out infinite",
                            '@keyframes scroll-dot': {
                                '0%': { opacity: 1, transform: 'translateY(0)' },
                                '100%': { opacity: 0, transform: 'translateY(12px)' },
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}