export interface People {
  _id:     string;
  address: string;
  age:     number;
  balance: string;
  company:  string;
  email:    string;
  eyeColor: string;
  latitude: number;
  longitude: number;
  name:       Name;
  phone:      string;
  registered: string;
}

interface Name {
  first: string;
  last:  string;
}
