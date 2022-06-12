import { Preferences } from "./preferences";

export class UserDetails {
  id: number
  email: string;
  name: string;
  sex: string;
  age: number;
  bio: string;
  picture: string;
  preferences: Preferences;
  timestamp: string;


  constructor(id: number,email: string,
    name: string,
    sex: string,
    age: number,
    bio: string,
    picture: string,
    preferences: Preferences,
    timestamp: string){

      this.id = id;
      this.email = email;
      this.name = name;
      this.sex = sex;
      this.age = age;
      this.bio = bio;
      this.picture = picture;
      this.preferences = preferences;
      this.timestamp = timestamp;
  }

}
