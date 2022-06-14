export class Pair {

  id: number;
  leftUserId: number;
  rightUserId: number;
  timestamp: string

  constructor(id: number, leftuserId: number,
    rightUserId: number, timestamp: string){
      this.id = id;
      this.leftUserId = leftuserId;
      this.rightUserId = rightUserId;
      this.timestamp = timestamp;
    }
}
