import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Director } from "../models/director";

export const Directors: FC = () => {
  const [error, setError] = useState(null);
  const [directors, setDirectors] = useState<Director[]>([]);

  useEffect(() => {
    axios
      .get("https://express-and-s.onrender.com/directors")
      .then((res) => {
        setDirectors(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <>
      <h1>Directors</h1>
      <hr />
      <h2>Director stuff will go here.</h2>
      {error && <h3>{error}</h3>}
      {directors.length > 0 && (
        <ul>
          {directors.map((director) => {
            return (
              <li>
                {director.given_name} {director.family_name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
