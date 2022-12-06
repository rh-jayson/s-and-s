import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Film, filmColumns } from "../models/film";
import { DataGrid } from "@mui/x-data-grid";

export const Films: FC = () => {
  const [error, setError] = useState(null);
  const [films, setFilms] = useState<Film[]>([]);

  // useEffect(() => {
  //   axios
  //     // .get("https://express-and-s.onrender.com/films")
  //     .get("http://localhost:3001/films")
  //     .then((res) => {
  //       setFilms(res.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, []);

  return (
    <>
      <h1>Films</h1>
      {error && <h3>{error}</h3>}
      {films.length > 0 && (
        <div style={{ height: "600px", width: "100%" }}>
          <DataGrid
            rows={films.map((film: Film, index: number) => {
              return {
                id: film.id,
                title: film.title,
                release_year: film.release_year,
                running_time: film.running_time,
              };
            })}
            columns={filmColumns}
          />
        </div>
      )}
    </>
  );
};
