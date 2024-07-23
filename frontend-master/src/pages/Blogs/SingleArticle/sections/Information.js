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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={12} mx="auto">
          <MKTypography variant="h3" mb={3}>
            Introduction
          </MKTypography>
          <MKTypography variant="body1">
            Imagine working from a sun-drenched terrace overlooking the Mediterranean Sea, sipping
            on freshly brewed coffee, and feeling the warm breeze on your face.
            <br /> <br />
            This was my reality for one month as I traveled through the south of Spain while
            maintaining my full-time job back in the United States. The great weather, culture, and
            prices made the time difference worthwhile during my stay.
            <br /> <br />
            My journey took me to Malaga, Granada, Almeria, Alicante, and finally Valencia. Each
            stay was unique and offered something different to enhance my travel experience and keep
            me productive while maintaining my full-time position.
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            Part 1: Malaga
          </MKTypography>
          <MKTypography variant="body1">
            Malaga boasts a beautiful and architecturally pleasing town center that encapsulates the
            southern Spain aesthetic. With marble walkways accompanied by swaying palm trees and
            15th-century church towers, Malaga was a fitting place to start my southern Spain
            journey. The city is known for its vibrant culture and coastal charm.
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            Favorite Eateries:
          </MKTypography>
          <MKTypography variant="body1">
            Café: Mala Leche
            <br /> <br />
            Restaurant: La Sole del Pimpi
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            Accommodations:
          </MKTypography>
          <MKTypography variant="body1">
            I stayed in a shared room Airbnb that included a dedicated workspace for $55 per night.
            It was a two-floor apartment with three bedrooms and one shared bathroom on each floor.
            There was a terrace with weights for working out, and it was located only a 10-minute
            walk from the city&aposl;s historic district.
            <br />
            Restaurant: La Sole del Pimpi
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
