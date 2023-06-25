export interface IUser {
  address: {
    geolocation: {
      lat: number;
      long: number;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  comfirmPassword: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}
