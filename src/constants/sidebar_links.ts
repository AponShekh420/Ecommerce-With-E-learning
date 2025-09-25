export const sidebar_links = [
  {
    id: 1,
    url: "/dashboard",
    name: "Dashboard",
    icon: "duo-icons:dashboard",
  },
  {
    id: 2,
    url: "",
    name: "E-commerce",
    icon: "ph:shopping-cart-duotone",
    isDropdown: true,
    isShowDropdown: false,
    dropdownList: [
      { id: 101, name: "products", url: "/dashboard/ecommerce/products" },
    ],
  },

  {
    id: 3,
    url: "",
    name: "E-Learning",
    icon: "fluent-mdl2:publish-course",
    isDropdown: true,
    isShowDropdown: false,
    dropdownList: [
      { id: 101, name: "Courses", url: "/dashboard/courses" },
      { id: 101, name: "Classes", url: "/dashboard/classes" },
      { id: 101, name: "Paid Records", url: "/dashboard/paid-records" },
      { id: 101, name: "Free Records", url: "/dashboard/free-records" }
    ],
  },
];
