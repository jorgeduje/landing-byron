import { Box, Typography } from "@mui/material";
import "../styles/featuresCard.css";
export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Box
    sx={{
      height: "100%",
      width: "100%",
      backgroundColor: "#25293C",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: { xs: "scale(1)", sm: "scale(1.3)" },
      },
      boxShadow: 5,
      borderRadius: 2,
      padding: "10px 0",
      cursor: "pointer",
    }}
    className="feature-card"
  >
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      {icon}
      <Typography variant="h6" component="h3" mt={1}>
        {title}
      </Typography>
    </Box>
    <Typography
      variant="body2"
      align="center"
      sx={{
        width: "70%",
        margin: "0 auto  30px auto",
        color: "whitesmoke",
      }}
    >
      {description}
    </Typography>
  </Box>
);
