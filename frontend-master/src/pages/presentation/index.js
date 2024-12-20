/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections

import Counters from "pages/presentation/sections/Counters";

import routes from "routes";
import footerRoutes from "footer.routes";

import HeroImage from "assets/images/Hero-main.jpg";
// import HighlightedCafes from "./sections/HighlightedCafes";

// import HeaderTwo from "./sections/LandingPageHeader";
// import Search from "./sections/SearchBar";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import DripMap from "./sections/Map";

function Presentation() {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["Coffee Guide", "Co-Working Guide", "Travel Guide"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://cinsights.io",
          label: "Learn More",
          color: "default",
        }}
        transparent
        light
      />

      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-25}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["sm"],
                },
              })}
            >
              The Ultimate <span ref={typedJSRef} />
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <DripMap />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
