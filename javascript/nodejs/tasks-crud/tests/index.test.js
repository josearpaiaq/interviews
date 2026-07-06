import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as data from "../data/index.js";

describe("Tasks", () => {
  it("should be type array", () => {
    const tasks = data.findAllTasks();
    assert.equal(typeof tasks.length, "number");
  });

  it("should get all the tasks with status pending", () => {
    const tasks = data.findAllTasks("pending");
    assert.ok(tasks.length > 0);
    assert.ok(tasks.every((t) => t.status === "pending"));
  });
});
