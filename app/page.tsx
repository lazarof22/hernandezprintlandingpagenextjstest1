"use client";

import * as React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import ReusableCard from "@/components/CardEstatico";
import ReusableCardDinamic from "@/components/CardDinamico";
import AppBarMain from "@/components/AppBarMain";
import HeroBanner from "@/components/HeroBanner";

export default function LandingPage() {
  return (
    <Box>
      <AppBarMain/>
      <HeroBanner/>
      <Container sx={{ py: 6, ml: 'center' }}>
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
            padding: "0.2em 0.5em",
            borderRadius: "4px",
            textAlign: 'center', // Añadir esta línea
            width: '100%', // Asegurar que ocupe todo el ancho
            display: 'block', // Cambiar a block
            mx: 'auto', // Margen horizontal automático
            mb: 3, // Margen inferior para separar de las cards
            '&:hover': {
              transform: "scale(1.02)",
              transition: "all 0.3s ease"
            }
          }}>
          Clientes que confían en nosotros:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <ReusableCard
              title="Tiendas"
              description="Tiendas comercializadoras de cualquier tipo de producto tanto comida, electrodomésticos, ropa, piezas de arte, y otros."
              image="https://i.pinimg.com/736x/61/9e/bf/619ebf49976a0f128956a0f0d86af516.jpg"
              tag="Digital"
            />
          </Grid>
          <Grid item>
            <ReusableCard
              title="Empresas"
              description="Instituciones Estatales, MYPIMES, Negocios Particulares de Ventas Mayoristas y Minoristas."
              image="https://i.pinimg.com/736x/68/03/3b/68033b30a991f8f55bd16844aa841405.jpg"
              tag="Digital"
            />
          </Grid>
          <Grid item>
            <ReusableCard
              title="Restaurantes"
              description="Restaurantes,Cafés,Cafeterías Medianas,Cafeterías Pequeñas,Puestos Pequeños de Comida, y otros."
              image="https://i.pinimg.com/736x/06/8d/c5/068dc52b100ec940bd407deea560481f.jpg"
              tag="Digital"
            />
          </Grid>
          <Grid item>
            <ReusableCard
              title="Eventos"
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
            />
          </Grid>
        </Grid>
      </Container>

      {/* SERVICIOS */}
      <Container sx={{ py: 6, ml: 'center' }}>
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
            padding: "0.2em 0.5em",
            borderRadius: "4px",
            textAlign: 'center', // Añadir esta línea
            width: '100%', // Asegurar que ocupe todo el ancho
            display: 'block', // Cambiar a block
            mx: 'auto', // Margen horizontal automático
            mb: 3, // Margen inferior para separar de las cards
            '&:hover': {
              transform: "scale(1.02)",
              transition: "all 0.3s ease"
            }
          }}>
          Nuestro Cátalogo de Servicios y Ofertas:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
          </Grid>
          <Grid item>
            <ReusableCardDinamic
              title=""
              description="Eventos de Ocio y Entretenimiento, Eventos Deportivos, Eventos Corporativos y Empresariales, Eventos Sociales."
              image="https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg"
              tag="Digital"
              price=""
            />
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
