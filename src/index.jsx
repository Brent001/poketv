import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Stream from "./pages/Stream";
import store from "./redux/store";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/anime/:animeId",
        element: <Anime />,
      },
      {
        path: "/watch/:animeId/:lang/:episodeId",
        element: <Stream />,
      },
    ],
  },
]);

ReactGA.initialize("G-0M5JPSSMNZ");
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
