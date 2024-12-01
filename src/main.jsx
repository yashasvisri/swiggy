import React from "react";
import { createRoot } from "react-dom/client";
import {  RouterProvider } from "react-router-dom";



import "./index.css";

import { appRouter } from "./App";

createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);
