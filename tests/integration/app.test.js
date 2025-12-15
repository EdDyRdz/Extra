const request = require("supertest");
const app = require("../../src/app");

describe("API", () => {
  test("GET /health devuelve 200 y {status:'ok'}", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /greet sin nombre devuelve Hola, World", async () => {
    const res = await request(app).get("/greet");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hola, World" });
  });

  test("POST /echo devuelve el cuerpo con status 201", async () => {
    const payload = { a: 1, b: "x" };
    const res = await request(app).post("/echo").send(payload);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ data: payload });
  });
});
