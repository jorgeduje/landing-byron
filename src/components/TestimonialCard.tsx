import { Box, Rating, Typography } from "@mui/material";

export const TestimonialCard = ({
  name,
  role,
  testimonial,
  rating,
}: {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}) => (
  <Box className="review-slide">
    <Rating value={rating} readOnly />
    <Typography variant="subtitle1" fontWeight="bold">
      {name}
    </Typography>
    <Typography variant="body2">{role}</Typography>
    <Typography variant="body1" mt={2} mb={2}>
      {testimonial}
    </Typography>
  </Box>
);
