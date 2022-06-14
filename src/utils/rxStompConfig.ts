import { RxStompConfig } from '@stomp/rx-stomp'
import { tokenGetter } from 'src/app/app.module';
import { HttpRouting } from './httpRouting'

export const myRxStompConfig: RxStompConfig = {

  brokerURL: HttpRouting.backEndSocketBase,

  connectHeaders: {
    Authorization: 'Bearer ' + tokenGetter(),
  },


  heartbeatIncoming: 0,

  heartbeatOutgoing: 20000,

  reconnectDelay: 3000,

  debug: (msg: string): void => {
    console.log(msg);
  }


}
