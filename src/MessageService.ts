import {ICommands} from "./icommands.interface";
import {DdmqMessage} from "./lib/ddmq_message";
import {Subject} from "@reactivex/rxjs";
import {Observable} from "@reactivex/rxjs";

export class MessageService {

  protected messages: Subject<DdmqMessage>;

  constructor() {
    this.messages = new Subject<DdmqMessage>();
  }

  public register(commands: ICommands): Observable<DdmqMessage> {
    return this.messages.filter(function (message: DdmqMessage) {
      return message.getCommand() in commands;
    });
  }

  public push(message: DdmqMessage) {
    this.messages.next(message);
  }
}
