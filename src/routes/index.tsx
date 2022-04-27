import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";
import { DashboardLayout } from "layouts";
import Users from "routes/Users";
import Posts from "routes/Posts";

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route
        element={
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        }
      >
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Route>

      <Route path="*" element={<Navigate to="/users" />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
