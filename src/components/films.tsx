import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Film } from "../models/film";

export const Films: FC = () => {
  const [error, setError] = useState(null);
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    axios
      .get("https://express-and-s.onrender.com/films")
      .then((res) => {
        setFilms(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <>
      <h1>Films</h1>
      <hr />
      <h2>Film stuff will go here.</h2>
      {error && <h3>{error}</h3>}
      {films.length > 0 && (
        <ul>
          {films.map((films) => {
            return (
              <li>
                {films.title} ({films.release_year})
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
