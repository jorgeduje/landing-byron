import React, { useRef, useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Restaurant as RestaurantIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { FeatureCard } from "../../components/FeatureCard";

import { PricingCard } from "../../components/PricingCard";
import { MercadoPagoIcon } from "../../icons/MercadoPagoIcon";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import demoVideo from "../../demoVideo.mp4";
import banner from "../../banner.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Reviews } from "../../components/Reviews";

export const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado", info);

    setInfo({
      name: "",
      email: "",
      message: "",
    });
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        color: "whitesmoke",
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          margin: 0,
          padding: 0,
          width: "90%",
        }}
      >
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
            }}
          >
            Gestión Gastronómica Simplificada
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem" },
                marginBottom: { xs: 2, sm: 4 },
                width: { xs: "90%", sm: "70%" },
              }}
            >
              Optimiza tu negocio con nuestro software de gestión. Desde las
              estadisticas de tu negocio hasta la autogestión de tus clientes,
              OrdenApp lo hace todo.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
              onClick={handlePlayPause}
            >
              {!isPlaying && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "64px",
                    height: "64px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                  }}
                >
                  <PlayArrowIcon
                    sx={{ color: "whitesmoke", fontSize: "48px" }}
                  />
                </Box>
              )}
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                poster={banner}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                autoPlay
                muted
              >
                <source src={demoVideo} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Iniciar Prueba Gratuita
            </Button>
          </Box>
        </Box>

        <Box id="caracteristicas" sx={{ my: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3.1rem" },
            }}
          >
            Principales características
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={
                  <RestaurantIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                }
                title="Gestión de Menú"
                description="Crea y actualiza tu menú fácilmente. Categorias, platos, sugerencias y mucho más."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={
                  <QrCodeIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                }
                title="Carta Digital"
                description="Poné a disposición de tus clientes una carta digital con códigos QR para acceder desde sus dispositivos."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={<MercadoPagoIcon color="#fff" />}
                title="MercadoPago"
                description="Permite a tus clientes pagar con tarjetas de crédito, débito o dinero en cuenta a través de MercadoPago."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={
                  <BarChartIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                }
                title="Análisis de Ventas"
                description="Obtén insights valiosos sobre tu negocio con reportes detallados y visualizaciones interactivas."
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={
                  <PeopleIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                }
                title="Gestión de Personal"
                description="Organiza turnos, asigna tareas y realiza un seguimiento del rendimiento de tus empleados."
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={
                  <TableRestaurantIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                }
                title="Gestión de Mesas"
                description="Gestiona las mesas de tus restaurantes, donde recibiras en tiempo real los pedidos o llamados de los clientes."
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          id="testimonios"
          sx={{
            my: 8,
            py: 8,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3.1rem" },
            }}
          >
            Lo que dicen nuestros clientes
          </Typography>
          <Reviews />
        </Box>

        <Box id="precios" sx={{ my: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3.1rem" },
            }}
          >
            Planes y Precios
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            centered
            sx={{ mb: 4 }}
          >
            <Tab
              label="Mensual"
              sx={{
                color: "whitesmoke",
              }}
            />
            <Tab
              label="Anual (20% de descuento)"
              sx={{
                color: "whitesmoke",
              }}
            />
          </Tabs>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <PricingCard
                period={tabValue === 0 ? "mes" : "año"}
                option="basic"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PricingCard
                highlighted={true}
                period={tabValue === 0 ? "mes" : "año"}
                option="pro"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PricingCard
                period={tabValue === 0 ? "mes" : "año"}
                option="Enterprise"
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          id="contacto"
          sx={{
            my: 8,
            py: 8,
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3.1rem" },
            }}
          >
            Contáctanos
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                fullWidth
                placeholder="Nombre"
                variant="outlined"
                value={info.name}
                onChange={handleChange}
                name="name"
                sx={{
                  marginTop: "5px",
                  textAlign: "left",
                  color: "#000",
                  bgcolor: "background.paper",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ababab",
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                  "& .MuiOutlinedInput-input": {
                    color: "#000",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                }}
              />
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                value={info.email}
                onChange={handleChange}
                name="email"
                sx={{
                  marginTop: "5px",
                  textAlign: "left",
                  color: "#000",
                  bgcolor: "background.paper",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ababab",
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                  "& .MuiOutlinedInput-input": {
                    color: "#000",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#ababab",
                    },
                }}
              />
            </Box>

            <TextField
              fullWidth
              placeholder="Mensaje"
              variant="outlined"
              value={info.message}
              onChange={handleChange}
              sx={{
                marginTop: "5px",
                textAlign: "left",
                color: "#000",
                bgcolor: "background.paper",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ababab",
                  borderRadius: "8px",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ababab",
                  },
                "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ababab",
                  },
                "& .MuiOutlinedInput-input": {
                  color: "#000",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#ababab",
                  },
              }}
              name="message"
              rows={2}
              multiline
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 10px)" },
                }}
                size="large"
              >
                Enviar Mensaje
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
