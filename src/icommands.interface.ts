/**
 * Created by vhanssen on 10/07/16.
 */

import {ICommand} from "./icommand.interface";

export interface ICommands {
  [propName: string]: ICommand;
}
