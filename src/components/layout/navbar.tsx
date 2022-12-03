import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const Navbar: FC = () => {
  return (
    <div>
      <Link to={ROUTE.DASHBOARD}>Dashboard</Link>
      <span> | </span>
      <Link to={ROUTE.DIRECTORS}>Directors</Link>
      <span> | </span>
      <Link to={ROUTE.FILMS}>Films</Link>
    </div>
  );
};
