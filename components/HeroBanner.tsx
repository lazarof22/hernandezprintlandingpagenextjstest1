import { Box, Button, Typography } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';

export default function HeroBanner() {
    return (
        <Box
            minHeight={{ xs: "60vh", sm: "70vh", md: "80vh" }}
            width="100%"
            color="white"
            sx={{
                backgroundImage: `linear-gradient(to right,rgba(127,0,255,0.15),rgba(0,0,0,0)),url("/images/profile-hero.png")`,
                backgroundSize: "cover",
                backgroundPosition: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 4, sm: 6, md: 8 },
                position: "relative",
            }}
        >
            {/* Título principal con iconos */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={{ xs: 1, sm: 2 }}
                mb={{ xs: 2, sm: 3 }}
                flexWrap="wrap"
            >


                <Typography
                    variant="h3"
                    fontWeight={800}
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
                        lineHeight: { xs: 1.3, sm: 1.2 },
                        maxWidth: { xs: '90%', sm: '80%', md: '70%' },
                    }}
                >
                    <PrintIcon sx={{
                        fontSize: { xs: 35, sm: 40, md: 50 }
                    }} />
                    Impresiones que hacen destacar tu marca 
                    <PrintIcon sx={{
                        fontSize: { xs: 35, sm: 40, md: 50 }
                    }} />
                </Typography>


            </Box>

            {/* Subtítulo 1 */}
            <Typography
                variant="overline"
                sx={{
                    opacity: 0.85,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    letterSpacing: { xs: '0.1em', sm: '0.15em' },
                    mb: { xs: 1, sm: 2 },
                }}
            >
                Sin estrés. Solo calidad.
            </Typography>

            {/* Descripción */}
            <Typography
                variant="h6"
                sx={{
                    opacity: 0.9,
                    mb: { xs: 3, sm: 4 },
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    maxWidth: { xs: '95%', sm: '80%', md: '600px' },
                    px: { xs: 1, sm: 0 },
                }}
            >
                Impresión digital, gran formato y personalizados con acabados profesionales.
            </Typography>

            {/* Botón CTA */}
            <Button
                variant="outlined"
                size="medium"
                sx={{
                    color: "white",
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "white",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.2 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': {
                        borderColor: "white",
                        backgroundColor: "rgba(255,255,255,0.1)",
                    },
                }}
            >
                Solicitar cotización
            </Button>
        </Box>
    )
}