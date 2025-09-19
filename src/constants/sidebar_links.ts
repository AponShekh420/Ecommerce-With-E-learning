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
    name: "E-Commerce",
    icon: "ph:shopping-cart-duotone",
    isDropdown: true,
    isShowDropdown: false,
    dropdownList: [
      { id: 101, name: "products", url: "/dashboard/ecommerce/products" },
      {
        id: 102,
        name: "create product",
        url: "/dashboard/ecommerce/create-product",
      },
      { id: 103, name: "categories", url: "/dashboard/ecommerce/categories" },
      {
        id: 104,
        name: "create category",
        url: "/dashboard/ecommerce/create-category",
      },
      { id: 105, name: "orders", url: "/dashboard/ecommerce/orders" },
    ],
  },

  {
    id: 3,
    url: "",
    name: "E-Learning",
    icon: "fluent-mdl2:publish-course",
    isDropdown: true,
    isShowDropdown: false,
    dropdownList: [{ id: 101, name: "Courses", url: "/dashboard/courses" }],
  },
];
