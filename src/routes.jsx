import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Invoices from "./Pages/Invoices";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Messages from "./Pages/Messages";
import Customers from "./Pages/Customers";
import Transactions from "./Pages/Transactions";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'invoices',
                element: <Invoices />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'customers',
                element: <Customers />
            },
            {
                path: 'transactions',
                element: <Transactions />
            }
        ]
    }
]);
export default routes;