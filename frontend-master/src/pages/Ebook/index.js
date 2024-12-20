/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import LifetimeMembership from "pages/Company/Pricing/sections/LifetimeMembership";
import HeroImage from "assets/images/Hero-main.jpg";
import Card from "@mui/material/Card";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Ebookpricing() {
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
      ></MKBox>
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
        {/* <BlogPostTwo /> */}
        <LifetimeMembership />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Ebookpricing;
