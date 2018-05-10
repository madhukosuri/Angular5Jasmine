export interface Users {
  users: UsersData[];
}

export interface UsersData {
  id: number;
  first_name :string;
  last_name :string;
  email :string;
  city :string;
  state :string;
  zipcode :number;
  country :string;
  date_of_birth :Date;
}
