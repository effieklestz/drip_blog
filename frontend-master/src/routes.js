import BlogLanding from "pages/Blogs";
import Ebookpricing from "pages/Ebook";

const routes = [
  {
    name: "Blog",
    route: "/Blogs",
    component: <BlogLanding />,
  },
  {
    name: "Ebook",
    route: "/Ebook",
    component: <Ebookpricing />,
  },
];

export default routes;
