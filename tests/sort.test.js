const request = require("supertest");
const { bubbleSort, quickSort } = require("../sort");
const app = require("../server");

test("bubble sort orders numbers", () => {
  expect(bubbleSort([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
});

test("quick sort orders numbers", () => {
  expect(quickSort([9, 2, 7, 4])).toEqual([2, 4, 7, 9]);
});

test("GET /api/sort returns sorted array", async () => {
  const res = await request(app).get("/api/sort?algo=quick&arr=5,3,8,1");
  expect(res.status).toBe(200);
  expect(res.body.sorted).toEqual([1, 3, 5, 8]);
});

test("GET /api/health returns ok", async () => {
  const res = await request(app).get("/api/health");
  expect(res.body.status).toBe("ok");
});
