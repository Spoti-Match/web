//Michał Wilewski
import {Preferences} from "../userDetails/preferences";

export interface User {
  id: number;
  email: string;
  name: string;
  sex: string;
  age: number;
  bio: string;
  picture: string;
  preferences: Preferences;
  timestamp: string;
}
