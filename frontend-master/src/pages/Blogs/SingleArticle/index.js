// import { useEffect, useRef } from "react";

// import Rellax from "rellax";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import Information from "pages/Blogs/SingleArticle/sections/Information";
import Steps from "pages/Blogs/SingleArticle/sections/Steps";
import OurEfforts from "pages/Blogs/SingleArticle/sections/OurEfforts";
import Features from "pages/Blogs/SingleArticle/sections/Features";
import Posts from "pages/Blogs/SingleArticle/sections/Posts";
import Support from "pages/Blogs/SingleArticle/sections/Support";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import HeroImage from "assets/images/Hero-main.jpg";
// Images
// import bgImage from "assets/images/bg5.jpg";
// import { useEffect, useRef } from "react";

// import Card from "@mui/material/Card";
// import MKBox from "components/MKBox";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import routes from "routes";
// import footerRoutes from "footer.routes";
// import HeroImage from "assets/images/Hero-main.jpg";
// import BlogBox2 from "./sections/Blogfull";
// import BlogPostTwo from "./sections/BlogBox";
// import Rellax from "rellax";
// import Rellax from "rellax";

function SouthernSpainArticle() {
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
      ></Card>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Steps />
        <OurEfforts />
        <Features />
        <Posts />
        <Support />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
export default SouthernSpainArticle;

// function SouthernSpainArticle() {
//   const headerRef = useRef(null);

//   // Setting up rellax
//   useEffect(() => {
//     const parallax = new Rellax(headerRef.current, {
//       speed: -6,
//     });

//     return () => parallax.destroy();
//   }, []);

//   return (
//     <>
//       <MKBox bgColor="white" py={0.25}>
//         <DefaultNavbar
//           routes={routes}
//           action={{
//             type: "external",
//             route: "https://www.creative-tim.com/product/material-kit-pro-react",
//             label: "buy now",
//             color: "success",
//           }}
//           transparent
//           relative
//         />
//       </MKBox>
//       <MKBox
//         ref={headerRef}
//         minHeight="85vh"
//         width="100%"
//         sx={{
//           backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
//             `${linearGradient(
//               rgba(gradients.dark.main, 0.8),
//               rgba(gradients.dark.state, 0.8)
//             )}, url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "grid",
//           placeItems: "center",
//         }}
//       >
//         <Container>
//           <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
//             <MKTypography
//               variant="h1"
//               color="white"
//               sx={({ breakpoints, typography: { size } }) => ({
//                 [breakpoints.down("md")]: {
//                   fontSize: size["3xl"],
//                 },
//               })}
//             >
//               Material Design - News
//             </MKTypography>
//             <MKTypography
//               variant="body1"
//               color="white"
//               opacity={0.8}
//               mb={2}
//               mr={{ xs: 0, sm: 6 }}
//               pr={{ xs: 0, sm: 6 }}
//             >
//               The time is now for it be okay to be great. People in this world shun people for being
//               nice.
//             </MKTypography>
//             <MKTypography variant="h5" color="white" mt={2} mb={1}>
//               Connect with us on
//             </MKTypography>
//             <MKBox display="flex" alignItems="center">
//               <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
//                 <i className="fab fa-facebook" />
//               </MKTypography>
//               <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
//                 <i className="fab fa-instagram" />
//               </MKTypography>
//               <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
//                 <i className="fab fa-twitter" />
//               </MKTypography>
//               <MKTypography component="a" variant="body1" color="white" href="#">
//                 <i className="fab fa-google-plus" />
//               </MKTypography>
//             </MKBox>
//           </Grid>
//         </Container>
//       </MKBox>
//       <Card
//         sx={{
//           p: 2,
//           mx: { xs: 2, lg: 3 },
//           mt: -8,
//           mb: 4,
//           boxShadow: ({ boxShadows: { xxl } }) => xxl,
//         }}
//       >
//         <Information />
//         <Steps />
//         <OurEfforts />
//         <Features />
//         <Posts />
//         <Support />
//       </Card>
//       <MKBox pt={6} px={1} mt={6}>
//         <DefaultFooter content={footerRoutes} />
//       </MKBox>
//     </>
//   );
// }

// export default SouthernSpainArticle;
