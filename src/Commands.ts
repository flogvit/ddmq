/**
 * Created by vhanssen on 10/07/16.
 */

import {Command} from './Command';

export interface Commands {
  [propName: string]: Command;
}
