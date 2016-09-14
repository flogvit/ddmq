/**
 * Created by vhanssen on 10/07/16.
 */

export interface IMessageCore {
  command: string;
  params?: any;
  populate?: any;
  reqid?: number;
  extra?: any;
  error?: string;
  rid?: number;
  sid?: number;
  uid?: number;
  hops?: number;
  now?: number;
}

export class Message {
  private command: string = "";
  private params: any;

  constructor(data?: IMessageCore) {
    if (typeof data !== "undefined") {
      this.command = data.command;
      this.params = typeof data.params !== "undefined" ? data.params : {};
    } else {
      this.params = {};
    }
  }

  public getCommand() {
    return this.command;
  }

  public withCommand(command: string): Message {
    this.command = command;
    return this;
  }

  public withParam(key: string, value: any): Message {
    this.params[key] = value;
    return this;
  }

  public withParams(params: any): Message {
    this.params = params;
    return this;
  }

  public has(key: string) {
    return key in this.params;
  }

  public get(key: string, defaultValue: string) {
    return this.has(key) ? this.params[key] : defaultValue !== null ? defaultValue : null;
  }

  public set(key: string, value: any) {
    return this.withParam(key, value);
  }

}
