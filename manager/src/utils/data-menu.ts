type MenuType = {
    id?: string;
    path?: string;
    icon: string;
    title: string;
    subMenu: {
        title: string;
        path: string;
    }[];
};

const menu: MenuType[] = [
    {
        path: "/",
        icon: "mdi mdi-home menu-icon",
        title: "Dashboard",
        subMenu: [],
    },
    {
        id: "category",
        icon: "mdi mdi-view-grid",
        title: "Category",
        subMenu: [
            { title: "List Attributes", path: "/category/attribute" },
            { title: "List Category", path: "/category" },
        ],
    },
    {
        path: "/product",
        icon: "mdi mdi-cat",
        title: "Product",
        subMenu: [],
    },
    {
        id: "revenue",
        icon: "mdi mdi-currency-usd",
        title: "Revenue",
        subMenu: [
            { title: "List Orders", path: "/revenue/order" },
            { title: "List Bills", path: "/revenue/bill" },
        ],
    },
    {
        id: "auth",
        icon: "mdi mdi-account",
        title: "Auth",
        subMenu: [
            { title: "List Users", path: "/auth/user" },
            { title: "List Roles", path: "/auth/role" },
        ],
    },
];

export default menu;
