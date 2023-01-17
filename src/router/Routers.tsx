import { createBrowserRouter } from "react-router-dom";
import DeatilChamp from "../pages/DeatilChamp";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Home />
    },
    {
        path: "champion/:championId",
        element: <DeatilChamp />
    }
])