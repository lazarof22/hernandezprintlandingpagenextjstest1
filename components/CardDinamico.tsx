"use client";

import * as React from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DarkCard = styled(Card)(({ theme }) => ({
  width: 280,
  borderRadius: 20,
  background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
  border: "1px solid rgba(255,107,53,0.1)",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  "&:hover": {
    transform: "translateY(-12px)",
    borderColor: "rgba(255,107,53,0.3)",
    boxShadow: "0 20px 60px rgba(255, 107, 53, 0.15), 0 0 0 1px rgba(255,107,53,0.2)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #ff6b35, #e52e71)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}));

const GradientOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "50%",
  background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 100%)",
});

interface ReusableCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  tag?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ReusableCardDinamic({
  title,
  description,
  image,
  price,
  tag,
  buttonText = "Ver más",
  onButtonClick,
}: ReusableCardProps) {
  return (
    <DarkCard>
      <CardActionArea>
        <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{
              transition: "transform 0.6s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <GradientOverlay />
          {tag && (
            <Box
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                background: "linear-gradient(135deg, #ff6b35, #e52e71)",
                color: "white",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {tag}
            </Box>
          )}
        </Box>

        <CardContent sx={{ px: 3, pt: 2.5, pb: 1, background: "transparent" }}>
          <Typography
            variant="h6"
            fontWeight={700}
            gutterBottom
            sx={{
              color: "white",
              fontSize: "1.1rem",
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              fontSize: "0.85rem",
              mb: 1,
            }}
          >
            {description}
          </Typography>

          {price && (
            <Typography
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg, #ff6b35, #e52e71)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontSize: "1.1rem",
              }}
            >
              {price}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          px: 2.5,
          py: 1.5,
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            size="small"
            sx={{
              color: "rgba(255,255,255,0.4)",
              '&:hover': { color: "#ff6b35", background: "rgba(255,107,53,0.1)" },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              color: "rgba(255,255,255,0.4)",
              '&:hover': { color: "#ff6b35", background: "rgba(255,107,53,0.1)" },
            }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </Box>

        <Button
          size="small"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            color: "#ff6b35",
            border: "1px solid rgba(255,107,53,0.3)",
            px: 2,
            py: 0.5,
            '&:hover': {
              background: "linear-gradient(135deg, #ff6b35, #e52e71)",
              color: "white",
              borderColor: "transparent",
            },
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardActions>
    </DarkCard>
  );
}