export class Pair {

  id: number;
  leftUserId: number;
  rightUserId: number;
  leftUserName: string;
  rightUserName: string;
  timestamp: string

  constructor(id: number, leftuserId: number,
    rightUserId: number, timestamp: string,
    leftUserName: string,rightUserName: string){
      this.id = id;
      this.leftUserId = leftuserId;
      this.rightUserId = rightUserId;
      this.leftUserName = leftUserName;
      this.rightUserName = rightUserName;
      this.timestamp = timestamp;
    }
}
