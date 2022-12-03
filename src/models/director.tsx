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
