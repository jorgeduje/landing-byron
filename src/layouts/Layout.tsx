import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        backgroundColor: "#25293C",
        color: "whitesmoke",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
