"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';
import ReusableCard from "@/components/cardPersonalizada/page";
import Image from 'next/image'

export default function LandingPage() {
  return (
    <Box>
      {/* HEADER */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", color: "black" }}>
        <Toolbar>
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
              '&:hover': {
                transform: "scale(1.02)",
                transition: "all 0.3s ease"
              }
            }}>
            HernandezPrint
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginLeft: 'auto' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="buttonGradient" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff8a00" />
                  <stop offset="1" stopColor="#e52e71" />
                </linearGradient>
              </defs>
            </svg>
            <Button variant="outlined"
              startIcon={<PrintIcon />}
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                background: 'grey.900',
                borderStyle: "hidden",
                textTransform: 'none',
                backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                boxShadow: 4,
                '&:hover': {
                  background: 'grey.900',
                  boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                },
                '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                  fill: 'url(#buttonGradient)'
                }
              }}
            >Servicios</Button>
            <Button variant="outlined"
              startIcon={<StyleIcon />}
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                background: 'grey.900',
                borderStyle: "hidden",
                textTransform: 'none',
                backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                boxShadow: 4,
                '&:hover': {
                  background: 'grey.900',
                  boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                },
                '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                  fill: 'url(#buttonGradient)'
                }
              }}
            >Portafolio</Button>
            <Button variant="outlined"
              startIcon={<CallIcon />}
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                background: 'grey.900',
                borderStyle: "hidden",
                textTransform: 'none',
                backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                boxShadow: 4,
                '&:hover': {
                  background: 'grey.900',
                  boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                },
                '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                  fill: 'url(#buttonGradient)'
                }
              }}
            >Contacto</Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(120deg, #7f00ff, #e100ff, #ffb347)",
          color: "white",
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline">Sin estrés. Solo calidad.</Typography>
              <Typography variant="h2" fontWeight={800} gutterBottom>
                Impresiones que hacen destacar tu marca
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                Impresión digital, gran formato y personalizados con acabados profesionales.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  borderRadius: 5,
                  px: 4,
                  fontWeight: 600,
                }}
              >
                Solicitar cotización
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 360,
                  borderRadius: 4,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CLIENTES */}
      <Container sx={{ py: 6 }}>
        <Typography align="center" variant="body2" color="text.secondary" gutterBottom>
          Empresas que confían en nosotros
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <ReusableCard
              title="Tarjetas de Presentación"
              description="Impresión full color en cartulina premium con acabados profesionales."
              image="https://i.pinimg.com/736x/61/9e/bf/619ebf49976a0f128956a0f0d86af516.jpg"
              tag="Digital"
            />
          </Grid>
        </Grid>
      </Container>

      {/* SERVICIOS */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="overline">Nuestros servicios</Typography>
            <Typography variant="h4" fontWeight={700}>
              Imprime mejor. Vende más.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {["Tarjetas y flyers", "Lonas y vinilos", "Personalizados"].map((s) => (
                <Grid item xs={12} md={4} key={s}>
                  <Card sx={{ height: "100%", borderRadius: 4 }}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {s}
                      </Typography>
                      <Typography color="text.secondary">
                        Alta calidad, colores vivos y entrega rápida.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ py: 10, bgcolor: "grey.100" }}>
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h4" fontWeight={700}>
              ¿Listo para imprimir tu próxima idea?
            </Typography>
            <Typography color="text.secondary">
              Escríbenos y recibe una cotización rápida y personalizada.
            </Typography>
            <Button variant="contained" size="large" sx={{ borderRadius: 5, px: 5 }}>
              Contáctanos
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ py: 4 }}>
        <Container>
          <Typography align="center" variant="body2" color="text.secondary">
            © {new Date().getFullYear()} HernandezPrint. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
