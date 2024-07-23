import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
// import MKDatePicker from "components/MKDatePicker";
import MKButton from "components/MKButton";
import cafeslists from "pages/presentation/sections/data/Mapdata";
import MKBadge from "components/MKBadge";
import DripMap from "./Map";
import { useState } from "react";

// import { useState } from "react";
function Search() {
  const cities = [];
  cafeslists.forEach((item) => {
    if (!cities.includes(item.city)) {
      cities.push(item.city);
    }
  });

  const states = [];
  cafeslists.forEach((item) => {
    if (!states.includes(item.state)) {
      states.push(item.state);
    }
  });

  const [selectedCities, setSelectedCities] = useState(cities);

  // const [selectedStates, setSelectedStates] = useState([cities]);

  const handleSearch = (event, value) => {
    console.log("Selection event:", event);
    console.log("Selection value", value);
    // // setSelectedCity(newValue)
    // var labels = event.points;
    // setSelectedCities(labels);
    setSelectedCities(value);
  };

  return (
    <>
      <MKBox component="section">
        <Container>
          <Grid
            container
            item
            xs={8}
            flexDirection="column"
            alignItems="center"
            mx="auto"
            textAlign="center"
            mb={6}
          >
            <MKBadge
              badgeContent="Drip Map"
              variant="contained"
              color="success"
              container
              sx={{ mb: 1.5 }}
            />
            <MKTypography variant="h2" mb={1}>
              Find a place to Work and drink Coffee
            </MKTypography>
            <MKTypography variant="body2" color="text">
              Stop wasting your time reading through Google Reviews and get working fast using our
              Drip Map.
            </MKTypography>
          </Grid>
          <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ pt: 2, pb: 3, px: 2, mx: "auto" }}>
            <Grid item xs={12} lg={4} sx={{ mt: 2 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="regular"
                color="text"
                mb={1}
              >
                Country
              </MKTypography>
              <Autocomplete
                defaultValue="New York"
                options={states}
                renderInput={(params) => <MKInput {...params} variant="standard" />}
              />
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mt: 2 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="regular"
                color="text"
                mb={1}
              >
                City
              </MKTypography>
              <Autocomplete
                // value={selectedCities}
                onChange={handleSearch}
                defaultValue="Brooklyn"
                options={cities}
                renderInput={(params) => <MKInput {...params} variant="standard" />}
              />
            </Grid>

            <Grid item xs={12} lg={4} sx={{ mt: 4 }}>
              <MKButton variant="gradient" color="success" fullWidth onClick={handleSearch}>
                search
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox>
        <DripMap selectedCities={selectedCities} />
      </MKBox>
    </>
  );
}

export default Search;
