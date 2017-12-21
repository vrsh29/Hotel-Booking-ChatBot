import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';


@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.HotelReservation;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  talk() {
    this.client.textRequest('who are you?')
        .then(res => console.log(res));
  }
}
