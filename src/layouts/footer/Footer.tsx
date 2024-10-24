import { Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SocialNetwork } from "../../components/SocialNetwork";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: "whitesmoke",

        paddingTop: 6,
        paddingBottom: 2,
        background: "linear-gradient(180deg, #25293C 1%, #2F3349 25%)",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid
          container
          rowSpacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              OrdenApp
            </Typography>
            <Typography variant="body2">
              Simplificando la gestión gastronómica desde 2024.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "row",
                flexWrap: { xs: "wrap", lg: "nowrap" },
                justifyContent: "space-evenly",
              }}
            >
              <SocialNetwork title={"Facebook"} Icon={FacebookIcon} link="" />
              <SocialNetwork title={"Instagram"} Icon={InstagramIcon} link="" />
              <SocialNetwork title={"X"} Icon={XIcon} link="" />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © 2024 OrdenApp. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
