"use client";

import * as React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Stack,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReusableCard from "@/components/CardEstatico";
import ReusableCardDinamic from "@/components/CardDinamico";
import AppBarMain from "@/components/AppBarMain";
import HeroBanner from "@/components/HeroBanner";

// Sección de título reutilizable
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="overline"
        sx={{
          color: "#ff6b35",
          fontWeight: 600,
          letterSpacing: 3,
          fontSize: "0.75rem",
          display: "block",
          mb: 1,
        }}
      >
        ● {children === "Clientes que confían en nosotros" ? "Nuestros Clientes" : "Servicios"}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 800,
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          color: "white",
          lineHeight: 1.2,
        }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 4,
          borderRadius: 2,
          background: "linear-gradient(90deg, #ff6b35, #e52e71)",
          mx: "auto",
          mt: 2,
        }}
      />
    </Box>
  );
}

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: "#0a0a0f", minHeight: "100vh" }}>
      <AppBarMain />
      <HeroBanner />

      {/* CLIENTES */}
      <Box sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
        <Container maxWidth="lg">
          <SectionTitle>Clientes que confían en nosotros</SectionTitle>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <ReusableCard
                title="Tiendas"
                description="Tiendas comercializadoras de cualquier tipo de producto: comida, electrodomésticos, ropa, piezas de arte y más."
                image="https://i.pinimg.com/736x/61/9e/bf/619ebf49976a0f128956a0f0d86af516.jpg"
                tag="Retail"
              />
            </Grid>
            <Grid item>
              <ReusableCard
                title="Empresas"
                description="Instituciones estatales, MYPIMES, negocios particulares de ventas mayoristas y minoristas."
                image="https://i.pinimg.com/736x/68/03/3b/68033b30a991f8f55bd16844aa841405.jpg"
                tag="B2B"
              />
            </Grid>
            <Grid item>
              <ReusableCard
                title="Restaurantes"
                description="Restaurantes, cafés, cafeterías medianas y pequeñas, puestos de comida y más."
                image="https://i.pinimg.com/736x/06/8d/c5/068dc52b100ec940bd407deea560481f.jpg"
                tag="Food"
              />
            </Grid>
            <Grid item>
              <ReusableCard
                title="Eventos"
                description="Eventos de ocio, deportivos, corporativos, empresariales y sociales de todo tipo."
                image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
                tag="Events"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICIOS */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: "relative",
          background: "linear-gradient(180deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)",
        }}
      >
        {/* Efecto de fondo */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,107,53,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <SectionTitle>Nuestro Catálogo de Servicios</SectionTitle>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Impresión Digital",
                description: "Impresión de alta calidad en papel couché, bond, adhesivo y más. Ideal para flyers, brochures y catálogos.",
                image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400&h=300&fit=crop",
                price: "Desde $50",
              },
              {
                title: "Gran Formato",
                description: "Banners, viniles, lonas y pancartas en tamaños grandes para eventos, fachadas y publicidad exterior.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
                price: "Desde $200",
              },
              {
                title: "Escaneo Profesional",
                description: "Digitalización de documentos, fotos y planos con resolución de hasta 1200 DPI. Formatos PDF, JPG, TIFF.",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
                price: "Desde $10",
              },
              {
                title: "Plastificado",
                description: "Laminado térmico y en frío para proteger documentos, credenciales, menús y materiales de uso frecuente.",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
                price: "Desde $15",
              },
              {
                title: "Personalizados",
                description: "Tazas, playeras, gorras, termos y más artículos personalizados con sublimación y serigrafía.",
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
                price: "Desde $80",
              },
              {
                title: "Diseño Gráfico",
                description: "Creación de logos, identidad visual, tarjetas de presentación y material publicitario profesional.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
                price: "Desde $300",
              },
              {
                title: "Copias e Impresiones",
                description: "Copias en blanco y negro y a color. Encuadernación, perforado, doblez y acabados especiales.",
                image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=300&fit=crop",
                price: "Desde $1",
              },
              {
                title: "Señalización",
                description: "Letreros luminosos, señalética interior y exterior, displays y stands para ferias y exposiciones.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
                price: "Desde $500",
              },
            ].map((service, i) => (
              <Grid item key={i}>
                <ReusableCardDinamic
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  tag="Disponible"
                  price={service.price}
                  buttonText="Cotizar"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECCIÓN "MEET THE MINDS" estilo Fluxora */}
      <Box sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Columna en móvil, fila en desktop
                  alignItems: "stretch",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "2px solid rgba(255,107,53,0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
                }}
              >
                {/* Imagen del fundador - IZQUIERDA */}
                <Box
                  component="img"
                  src="/images/profile-front.png"
                  alt="HernandezPrint - Fundador"
                  sx={{
                    width: { xs: "100%", sm: "40%" },
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                    filter: "contrast(1.09) saturate(1.1)",
                  }}
                />

                {/* Información - DERECHA */}
                <Box
                  sx={{
                    flex: 1,
                    p: { xs: 3, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#ff6b35",
                      fontWeight: 600,
                      letterSpacing: 3,
                      fontSize: "0.75rem",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    ● Sobre Nosotros
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
                      color: "white",
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    El talento detrás de{" "}
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
                      cada impresión
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                    }}
                  >
                    En <strong style={{
                      background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}>
                      HernandezPrint
                    </strong>, combinamos tecnología de punta con pasión por el detalle.
                    Nos especializamos en transformar tus ideas en productos impresos de calidad profesional,
                    desde tarjetas de presentación hasta lonas de gran formato. Cada proyecto es una oportunidad
                    para superar expectativas.
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontWeight: 600,
                      mt: 1
                    }}>
                    Fundador: Lázaro Miguel Hernández Izquierdo
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontWeight: 600,
                      mt: 1
                    }}>
                    Profesión: Ingeniero en Informática
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ display: "flex", gap: 4, mb: 4, flexWrap: "wrap" }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    400+
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                    Proyectos completados
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    230+
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                    Clientes satisfechos
                  </Typography>
                </Box>
              </Box>

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
                  boxShadow: "0 8px 30px rgba(255, 107, 53, 0.4)",
                  '&:hover': {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(255, 107, 53, 0.6)",
                  },
                }}
              >
                Conoce más sobre nosotros
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA FINAL */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            left: "-20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-30%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229,46,113,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                color: "white",
                lineHeight: 1.2,
              }}
            >
              ¿Listo para imprimir tu{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                próxima idea
              </Box>
              ?
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.1rem",
                maxWidth: "500px",
                lineHeight: 1.7,
              }}
            >
              Escríbenos y recibe una cotización rápida y personalizada.
              Tu proyecto merece la mejor calidad.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(135deg, #ff6b35 0%, #e52e71 100%)",
                color: "white",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 3,
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                boxShadow: "0 10px 40px rgba(255, 107, 53, 0.5)",
                transition: "all 0.3s ease",
                '&:hover': {
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: "0 15px 50px rgba(255, 107, 53, 0.7)",
                },
              }}
            >
              Contáctanos ahora
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          py: 6,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "#0a0a0f",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <EmailIcon sx={{ color: "#ff6b35", mb: 1 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                info@hernandezprint.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <PhoneIcon sx={{ color: "#ff6b35", mb: 1 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                +52 (55) 1234-5678
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <LocationOnIcon sx={{ color: "#ff6b35", mb: 1 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                Ciudad de México, México
              </Typography>
            </Grid>
          </Grid>
          <Typography
            align="center"
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.3)", pt: 2 }}
          >
            © {new Date().getFullYear()} HernandezPrint. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}