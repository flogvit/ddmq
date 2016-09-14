/**
 * Created by vhanssen on 14/09/16.
 */

import { Message } from "../src/message";
import * as chai from "chai";

const expect = chai.expect;

describe("message", () => {
  it("should create empty message", () => {
    const message = new Message();
    expect(message.has('test')).to.equal(false);
  });
  it("should get empty command on empty message", () => {
    const message = new Message();
    expect(message.getCommand()).to.equal("");
  })
});
