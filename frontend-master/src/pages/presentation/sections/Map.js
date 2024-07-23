"use client";
import { useEffect, useRef, useState } from "react";
import { APIProvider, Map, AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import PropTypes from "prop-types";
import cafeslists from "../sections/data/Mapdata";
// import { CoPresent } from "@mui/icons-material";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Autocomplete from "@mui/material/Autocomplete";

// // Material Kit 2 PRO React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// // import MKDatePicker from "components/MKDatePicker";
// import MKButton from "components/MKButton";
// // import cafeslists from "pages/presentation/sections/data/Mapdata";
// import MKBadge from "components/MKBadge";

export default function DripMap({ selectedCities }) {
  // console.log(cafeslists);
  // console.log(selectedCities);

  const filteredCafes = cafeslists.filter((cafe) => {
    return !selectedCities || cafe.city === selectedCities;
  });
  // console.log(filteredCafes);

  // var cities = [];
  // filteredCafes.forEach((item) => {
  //   if (!cities.includes(item.city)) {
  //     cities.push(item.city);
  //   }
  // });
  // console.log(cities);

  // const states = [];
  // cafeslists.forEach((item) => {
  //   if (!states.includes(item.state)) {
  //     states.push(item.state);
  //   }
  // });

  // const [selectedCities, setSelectedCities] = useState([cities]);

  // const [selectedStates, setSelectedStates] = useState([cities]);

  // const handleSelectedCities = (event) => {
  //   console.log("Selection event:", event);
  //   // console.log("Selected State:", selectedState);
  //   console.log("Selected City:", selectedCities);
  //   var labels = event.points;
  //   setSelectedCities(labels);
  // };
  return (
    <APIProvider apiKey={"AIzaSyAUPr2P0KXs11ASStGs2CpkKVM9rKfysiA"}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          style={{ width: "", height: "100vh", borderRadius: "10px" }}
          defaultCenter={{ lat: 30, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"cooperative"}
          mapId={"3b51b13376b240db"}
        >
          <Markers points={filteredCafes} />
        </Map>
      </div>
    </APIProvider>
  );
}

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkersRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;
    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkersRef(marker, point.key)}
        >
          <span style={{ fontSize: "2.5rem" }}>☕️</span>
        </AdvancedMarker>
      ))}
    </>
  );
};

// Specify prop types for the `points` prop
Markers.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      // Add more properties as needed
    })
  ).isRequired,
};
DripMap.propTypes = {
  selectedCities: PropTypes.string.isRequired,
};
