import { GridColDef } from "@mui/x-data-grid";

export interface Film {
  id: number;
  title: string;
  release_year: number;
  running_time: number;
}

export const filmColumns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 500 },
  { field: "release_year", headerName: "Release Year", width: 300 },
  {
    field: "running_time",
    headerName: "Running Time",
    type: "number",
    width: 300,
  },
];
