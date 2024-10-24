import React, { useState, useRef } from "react";
import { IconButton } from "@mui/material";
import "../styles/reviews.css";
import { TestimonialCard } from "./TestimonialCard";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { reviews } from "../utils/reviews";

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewContainerRef = useRef(null);

  // Guardar la posición inicial del toque
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Funciones para cambiar la reseña
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Manejo de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX; // Almacenar la posición inicial del toque
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX; // Actualizar la posición mientras se desliza
  };

  const handleTouchEnd = () => {
    // Diferencia entre la posición inicial y final del toque
    const touchDiff = touchStartX.current - touchEndX.current;

    // Determinar si el deslizamiento fue lo suficientemente largo
    if (touchDiff > 50) {
      // Deslizar a la izquierda
      handleNext();
    } else if (touchDiff < -50) {
      // Deslizar a la derecha
      handlePrev();
    }
  };

  return (
    <div className="carousel-container" ref={reviewContainerRef}>
      <div
        className="carousel-content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Desplazar la reseña actual
        }}
      >
        {reviews.map((review, index) => (
          <TestimonialCard
            key={index}
            name={review.name}
            role={review.role}
            testimonial={review.testimonial}
            rating={review.rating}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <IconButton
          onClick={handlePrev}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <ArrowBackIosIcon
            color="primary"
            sx={{
              fontSize: "2.5rem",
            }}
          />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <ArrowForwardIosIcon
            color="primary"
            sx={{
              fontSize: "2.5rem",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};
