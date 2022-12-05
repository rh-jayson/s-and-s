import { GridColDef } from "@mui/x-data-grid";

export interface Director {
  id: number;
  given_name: string;
  family_name: string;
  birth_place: string;
  date_of_birth: Date;
  date_of_death?: Date;
  hq_lat: number;
  hq_long: number;
}

export const directorColumns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 500 },
  { field: "birth_place", headerName: "Birth Place", width: 300 },
  { field: "date_of_birth", headerName: "Date of Birth", width: 300 },
];
