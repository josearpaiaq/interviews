import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { postTaskHandler } from "../tasks/handlers.js";

const createFakeRes = () => {
  const res = {};
  res.statusCode = null;
  res.body = null;
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.body = payload;
    return res;
  };
  res.end = () => res;
  return res;
};

describe("Task handlers", () => {
  it("should not create a new task with empty title", () => {
    const req = { body: {} };
    const res = createFakeRes();
    assert.throws(
      () => postTaskHandler(req, res),
      (err) => err.statusCode === 400,
    );
  });
  it("should create a new task", () => {
    const req = { body: { title: "algo" } };
    const res = createFakeRes();

    postTaskHandler(req, res);

    assert.ok(res.statusCode === 200);
    assert.ok(res.body.title === "algo");
  });
});
