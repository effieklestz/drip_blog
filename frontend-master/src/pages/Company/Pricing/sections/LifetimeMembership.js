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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function LifetimeMembership() {
  return (
    <MKBox component="section" py={{ xs: 12, lg: 18 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={1}>
            The Digital Nomad Ebook
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Our Guide with more 10 tips and best practices to becoming a digital nomad
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Card sx={{ width: "100%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h3" mb={1}>
                    Lifetime Membership
                  </MKTypography>
                  {/* <MKTypography variant="body2" color="text" fontWeight="regular">
                    You have Free Unlimited Updates and Premium Support on each package. You also
                    have 30 days to request a refund.
                  </MKTypography> */}
                  <Grid container item xs={12} lg={3} sx={{ mt: 6, mb: 1 }}>
                    <MKTypography variant="h6">What&apos;s included</MKTypography>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          10 Tips to Working and traveling
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Stories from our experience
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Best Websites for digital nomads
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Support
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MKBox p={3} textAlign="center">
                  <MKTypography variant="h6" mt={{ xs: 0, sm: 3 }}>
                    Pay once, own it forever
                  </MKTypography>
                  <MKTypography variant="h1">
                    <MKBox component="small">$</MKBox>4.99
                  </MKTypography>
                  <MKButton
                    // eslint-disable-next-line react/no-string-refs
                    onClick={() =>
                      (window.location.href = "https://buy.stripe.com/bIYaFc7kBbLvdYQcMM")
                    }
                    variant="gradient"
                    color="error"
                    size="large"
                    sx={{ my: 2 }}
                  >
                    Get Access
                  </MKButton>
                  {/* <MKTypography display="block" variant="button" color="text" fontWeight="regular">
                    Get a free sample (20MB)
                  </MKTypography> */}
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LifetimeMembership;
