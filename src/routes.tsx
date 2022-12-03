import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Directors } from "./components/directors";
import { Films } from "./components/films";

export enum ROUTE {
  DASHBOARD = "/",
  FILMS = "/films/",
  DIRECTORS = "/directors/",
}

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTE.FILMS} element={<Films />} />
      <Route path={ROUTE.DIRECTORS} element={<Directors />} />
    </Routes>
  );
};
