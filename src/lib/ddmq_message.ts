/**
 * Created by flogvit on 2016-09-14.
 *
 * @copyright flogvit, 2016, www.flogvit.com, all rights reserved
 * @file
 * @license MIT
 * @author Vegard Hanssen <Vegard.Hanssen@flogvit.com>
 *
 */

import * as _ from "lodash";

export interface IMessageCore {
  command: string;
  params?: any;
  populate?: any;
  reqid?: number;
  extra?: any;
  error?: number;
  errorText?: string;
  rid?: number;
  sid?: number;
  uid?: number;
  hops?: number;
  now?: number;
}

export class DdmqMessage {
  private command: string = "";
  private params: any;
  private reqid: number;
  private extra: any;
  private error: number;
  private errorText: string;

  constructor(data?: IMessageCore) {
    this.command = _.has(data, "command") ? data.command : "";
    this.params = _.has(data, "params") ? data.params : {};
    this.reqid = _.has(data, "reqid") ? data.reqid : 0;
    this.extra = _.has(data, "extra") ? data.extra : {};
    if (_.has(data, "error")) {
      this.error = data.error;
    }
    if (_.has(data, "errorText")) {
      this.errorText = data.errorText;
    }
  }

  public getCommand(): string {
    return this.command;
  }

  public withCommand(command: string): DdmqMessage {
    this.command = command;
    return this;
  }

  public withParam(key: string, value: any): DdmqMessage {
    this.params[key] = value;
    return this;
  }

  public withParams(params: any): DdmqMessage {
    this.params = params;
    return this;
  }

  public has(key: string): boolean {
    return key in this.params;
  }

  public get(key: string, defaultValue?: any): any {
    return this.has(key) ? this.params[key] : defaultValue !== null ? defaultValue : null;
  }

  public set(key: string, value: any): DdmqMessage {
    return this.withParam(key, value);
  }

  public getString(key: string, defaultValue?: string): string {
    return String(this.get(key, defaultValue));
  }

  public getNumber(key: string, defaultValue?: number): number {
    return Number(this.get(key, defaultValue));
  }

  public getBoolean(key: string, defaultValue?: boolean): boolean {
    return Boolean(this.get(key, defaultValue));
  }
}
