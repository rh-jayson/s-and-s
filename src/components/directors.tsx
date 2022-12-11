import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Director, directorColumns } from "../models/director";
import { DataGrid } from "@mui/x-data-grid";
const BACKEND = process.env['BACKEND'] || "localhost";
const BACKEND_PORT = process.env['BACKEND_PORT'] || "3001";

export const Directors: FC = () => {
  const [error, setError] = useState(null);
  const [directors, setDirectors] = useState<Director[]>([]);

  useEffect(() => {
    axios
      // .get("https://express-and-s.onrender.com/directors")
      .get(`http://${BACKEND}:${BACKEND_PORT}/directors`)
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
      {error && <h3>{error}</h3>}
      {directors.length > 0 && (
        <div style={{ height: "600px", width: "100%" }}>
          <DataGrid
            rows={directors.map((director: Director, index: number) => {
              return {
                id: director.id,
                name: `${director.given_name} ${director.family_name}`,
                birth_place: director.birth_place,
                date_of_birth: director.date_of_birth,
              };
            })}
            columns={directorColumns}
          />
        </div>
      )}
    </>
  );
};
