import MKTypography from "components/MKTypography";
import { Instagram } from "@mui/icons-material";

// Images
// import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Drip Journal",
    // image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/thedripjournal/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "https://cinsights.io" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Drip Journal
    </MKTypography>
  ),
};
