import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

]);

export default router;