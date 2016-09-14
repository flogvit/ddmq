import {ICommands} from "./icommands.interface";
import {Message} from "./message";
import {Subject} from "@reactivex/rxjs";
import {Observable} from "@reactivex/rxjs";

export class MessageService {

  protected messages: Subject<Message>;

  constructor() {
    this.messages = new Subject<Message>();
  }

  public register(commands: ICommands): Observable<Message> {
    return this.messages.filter(function (message: Message) {
      return message.getCommand() in commands;
    });
  }

  public push(message: Message) {
    this.messages.next(message);
  }
}
