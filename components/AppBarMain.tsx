import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';

// Estilos compartidos de botones para no repetir código
const buttonStyles = {
    fontWeight: 600,
    fontSize: { xs: '0.875rem', sm: '1rem' },
    background: 'grey.900',
    borderStyle: "hidden",
    textTransform: 'none',
    backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    boxShadow: 4,
    px: { xs: 1.5, sm: 2 },
    py: { xs: 0.8, sm: 1 },
    flex: { xs: 1, sm: 'none' },
    maxWidth: { xs: '140px', sm: 'none' },
    minWidth: { xs: '70px', sm: 'auto' },
    justifyContent: 'center',
    '&:hover': {
        background: 'grey.900',
        boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
    },
    '& .MuiSvgIcon-root': {
        fill: 'url(#buttonGradient)',
        fontSize: { xs: '1.1rem', sm: '1.5rem' },
    }
};

export default function AppBarMain() {
    return (
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", color: "black" }}>
            <Toolbar
                sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'center' },
                    py: { xs: 2, sm: 0 },
                    gap: { xs: 2, sm: 0 },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        letterSpacing: "0.05em",
                        display: "inline-block",
                        padding: "0.2em 0.5em",
                        borderRadius: "4px",
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                        textAlign: 'center',
                        '&:hover': {
                            transform: "scale(1.02)",
                            transition: "all 0.3s ease"
                        }
                    }}>
                    HernandezPrint
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 1, sm: 1 },
                        flexWrap: 'wrap',
                        marginLeft: { xs: 0, sm: 'auto' },
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                        <defs>
                            <linearGradient id="buttonGradient" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff8a00" />
                                <stop offset="1" stopColor="#e52e71" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <Button variant="outlined" startIcon={<PrintIcon />} sx={buttonStyles}>
                        Servicios
                    </Button>

                    <Button variant="outlined" startIcon={<StyleIcon />} sx={buttonStyles}>
                        Portafolio
                    </Button>

                    <Button variant="outlined" startIcon={<CallIcon />} sx={buttonStyles}>
                        Contacto
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
