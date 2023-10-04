import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";
import Messages from "../pages/messages/Messages";
import Lists from "../pages/lists/Lists";
import Premium from "../pages/premium/Premium";
import Profile from "../pages/profile/Profile";
import Bookmarks from "../pages/bookmarks/Bookmarks";
import store from "../store";

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
            {
                path: "messages",
                element: <Messages />
            },
            {
                path: "lists",
                element: <Lists />
            },
            {
                path: "premium",
                element: <Premium />
            },
            {
                path: `:username`,
                element: <Profile />
            },
            {
                path: "bookmarks",
                element: <Bookmarks />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

]);

export default router;