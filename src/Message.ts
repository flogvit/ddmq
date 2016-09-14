/**
 * Created by vhanssen on 10/07/16.
 */

export interface MessageCore {
  command:string;
  params?:any;
  populate?:any;
  reqid?:number;
  extra?:any;
  error?:string;
  rid?:number;
  sid?:number;
  uid?:number;
  hops?:number;
  now?:number;
}

export class Message {
  command: string;
  params: any;

  constructor(data?:MessageCore) {
    if (typeof data !== 'undefined') {
      this.command = data.command;
      this.params = typeof data.params !== 'undefined' ? data.params : {};
    } else {
      this.params = {};
    }
  }

  withCommand(command:string):Message {
    this.command = command;
    return this;
  }

  withParam(key:string, value:any):Message {
    this.params[key] = value;
    return this;
  }

  withParams(params:any):Message {
    this.params = params;
    return this;
  }

  has(key:string) {
    return key in this.params;
  }

  get(key:string, defaultValue:string) {
    return this.has(key) ? this.params[key] : defaultValue !== null ? defaultValue : null;
  }

  set(key:string, value:any) {
    return this.withParam(key, value);
  }


}
