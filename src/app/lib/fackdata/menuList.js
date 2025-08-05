export const menuList = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about-us",
    label: "About Us",
    dropDownMenu: false,
  },
  {
    id: 3,
    path: "#",
    label: "Services",
    dropDownMenu: [
      {
        id: 1,
        path: "/services",
        label: "Services",
      },
      {
        id: 2,
        path: "/service-details",
        label: "Service Details",
      },
    ],
  },
  {
    id: 4,
    path: "#",
    label: "Blog",
    dropDownMenu: [
      {
        id: 1,
        path: "/blog",
        label: "Blog",
      },
      {
        id: 2,
        path: "/blog-details",
        label: "Blog Details",
      },
    ],
  },
  {
    id: 5,
    path: "#",
    label: "Pages",
    dropDownMenu: [
      {
        id: 1,
        path: "/about-us",
        label: "About Us",
      },
      {
        id: 2,
        path: "/services",
        label: "Service Details",
      },
      {
        id: 3,
        path: "/faq",
        label: "Faq's",
      },
      {
        id: 4,
        path: "/portfolio",
        label: "Portfolio",
      },
      {
        id: 5,
        path: "/contact-us",
        label: "Contact Us",
      },
    ],
  },
  {
    id: 6,
    path: "/contact-us",
    label: "Contact Us",
    dropDownMenu: false,
  },
];
