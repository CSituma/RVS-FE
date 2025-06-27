export interface Volunteer {
  name: {
    first: string;
    last: string;
  };
  login:{
    uuid: string;
  }
  email: string;
  picture: {
    medium: string;
    thumbnail: string;
  };
  phone:string;
}

export interface VolunteerContextType {
  volunteers: Volunteer[];
  setVolunteers: React.Dispatch<React.SetStateAction<Volunteer[]>>;
}

export interface RandomUserAPIResponse {
  results: Volunteer[];
  info: {
  page: number;
  results:number;
}

}

