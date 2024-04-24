import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./routes/HomePage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./routes/IndexPage.tsx";
import AllMonstersPage from "./routes/AllMonstersPage.tsx";
import SearchMonster from "./routes/SearchMonster.tsx";
import AddMonsterPage from "./routes/AddMonsterPage.tsx";
import UpdateMonsterPage from "./routes/UpdateMonsterPage.tsx";
import DeleteMonsterPage from "./routes/DeleteMonsterPage.tsx";
import Monster from "./routes/Monster.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: (
      <div>
        <h1>error</h1>
        <p>Jobba på denna sidan när tid finnes</p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/allamonster",
        element: <AllMonstersPage />,
      },
      {
        path: "/sökmonster",
        element: <SearchMonster />,
      },
      {
        path: "/läggtillmonster",
        element: <AddMonsterPage />,
      },
      {
        path: "/uppdateramonster",
        element: <UpdateMonsterPage />,
      },
      {
        path: "/deletemonster",
        element: <DeleteMonsterPage />,
      },
      {
        path: "/sökmonster/:monsterID",
        element: <Monster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
