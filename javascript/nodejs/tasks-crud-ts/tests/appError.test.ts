import { test } from "node:test";
import assert from "node:assert/strict";
import { AppError } from "@/src/errors/AppError.ts";

test("AppError carries statusCode and message", () => {
  const err = new AppError(404, "not found");

  assert.equal(err.statusCode, 404);
  assert.equal(err.message, "not found");
  assert.ok(err instanceof Error);
});
