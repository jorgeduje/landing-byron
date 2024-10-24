import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Fab,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Menu as MenuIcon, ArrowUpward } from "@mui/icons-material";

import { theme } from "../../themeConfig";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      const yOffset = -80; // Ajusta este valor según sea necesario
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Container
            maxWidth={"lg"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setIsMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OrdenApp
            </Typography>
            {!isMobile && (
              <>
                <Box
                  color="inherit"
                  onClick={() => scrollToSection("caracteristicas")}
                  sx={{
                    borderRight: "2px solid whitesmoke",
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  Características
                </Box>
                <Box
                  color="inherit"
                  onClick={() => scrollToSection("testimonios")}
                  sx={{
                    borderRight: "2px solid whitesmoke",
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  Testimonios
                </Box>
                <Box
                  color="inherit"
                  onClick={() => scrollToSection("precios")}
                  sx={{
                    borderRight: "2px solid whitesmoke",
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  Precios
                </Box>
                <Box
                  color="inherit"
                  onClick={() => scrollToSection("contacto")}
                  sx={{
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  Contacto
                </Box>
                <Button color="inherit" variant="outlined">
                  Prueba Gratuita
                </Button>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <List
          sx={{
            backgroundColor: theme.palette.primary.main,
            minHeight: "100vh",
            color: "whitesmoke",
          }}
        >
          {["Características", "Testimonios", "Precios", "Contacto"].map(
            (text) => (
              <ListItem
                key={text}
                onClick={() => scrollToSection(text.toLowerCase())}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
          <ListItem>
            <ListItemText primary="Prueba Gratuita" />
          </ListItem>
        </List>
      </Drawer>

      {showScrollTop && (
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </Box>
  );
};
