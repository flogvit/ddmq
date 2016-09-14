/**
 * Created by flogvit on 2016-09-14.
 *
 * @copyright flogvit, 2016, www.flogvit.com, all rights reserved
 * @file
 * @license MIT
 * @author Vegard Hanssen <Vegard.Hanssen@flogvit.com>
 *
 */

import { DdmqMessage } from "../src/index";
import * as chai from "chai";

const expect = chai.expect;

describe("message", () => {
  it("should create empty message", () => {
    expect(new DdmqMessage().has('test')).to.equal(false);
  });
  it("should get empty command on empty message", () => {
    expect(new DdmqMessage().getCommand()).to.equal("");
  })
  it("should set command", () => {
    expect(new DdmqMessage().withCommand("test").getCommand()).to.equal("test");
  })
  it("should set command on constructor", () => {
    expect(new DdmqMessage({command: "test"}).getCommand()).to.equal("test");
  })
  it("should set command and params on constructor", () => {
    const message = new DdmqMessage({command: "test", params :{testing: 1}});
    expect(message.getCommand()).to.equal("test");
    expect(message.has("testing")).to.equal(true);
    expect(message.get("testing")).to.equal(1);
  })
  it("should get a string", () => {
    expect(new DdmqMessage().set("test", 1).getString("test")).to.equal("1");
  })
  it("should get a number", () => {
    expect(new DdmqMessage().set("test", "1").getNumber("test")).to.equal(1);
  })
  it("should get a boolean", () => {
    expect(new DdmqMessage().set("test", 1).getBoolean("test")).to.equal(true);
    expect(new DdmqMessage().set("test", 0).getBoolean("test")).to.equal(false);
  })
  it("should add several params withParams", () => {
    const message = new DdmqMessage().withParams({"test": 1, "testing": "2"});
    expect(message.getNumber("test")).to.equal(1);
    expect(message.getString("testing")).to.equal("2");
  })
});
