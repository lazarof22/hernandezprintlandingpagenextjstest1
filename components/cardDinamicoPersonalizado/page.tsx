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

const ModernCard = styled(Card)(({ theme }) => ({
  width: 250,
  borderRadius: 16,
  boxShadow: theme.shadows[6],
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[12],
  },
}));

const GradientOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "40%",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
});

/* 🔹 PROPS */
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
    <ModernCard>
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
          />
          <GradientOverlay />
        </Box>

        <CardContent sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1.5, lineHeight: 1.6 }}
          >
            {description}
          </Typography>

          {(price || tag) && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {price && (
                <Typography fontWeight={600} color="primary.main">
                  {price}
                </Typography>
              )}
              {tag && (
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.disabled",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {tag}
                </Typography>
              )}
            </Box>
          )}
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ px: 2, py: 1, justifyContent: "space-between" }}>
        <Box>
          <IconButton size="small">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <ShareIcon fontSize="small" />
          </IconButton>
        </Box>

        <Button
          size="small"
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardActions>
    </ModernCard>
  );
}
