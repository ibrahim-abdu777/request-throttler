const test = require("node:test");
const assert = require("node:assert");
const { bucket } = require("../src/throttle");
test("burst then throttle", () => {
  const allow = bucket(1, 2);
  assert.strictEqual(allow(), true);
  assert.strictEqual(allow(), true);
  assert.strictEqual(allow(), false);
});
