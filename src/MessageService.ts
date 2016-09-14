import {Message} from './Message';
import {Commands} from './Commands';
import {Subject} from "@reactivex/rxjs/src/Subject";
import {Observable} from '@reactivex/rxjs/src/Observable';

export class MessageService {

  protected messages:Subject<Message>;

  constructor() {
    this.messages = new Subject<Message>();
  }

  register(commands:Commands):Observable<Message> {
    return this.messages.filter(function (message:Message) {
      return message.command in commands;
    });
  }

  push(message:Message) {
    this.messages.next(message);
  }
}
