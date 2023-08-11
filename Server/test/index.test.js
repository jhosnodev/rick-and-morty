const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      response = JSON.parse(response.text);
      // console.log(response._body);
      expect(response).toHaveProperties([
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ]);
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/1000000").expect(200);
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = (
        await agent.get("/rickandmorty/character/1000000")
      ).status
        .expect(response)
        .toBeGreaterThanOrEqual(400);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Credenciales correctas", async () => {
      const response = (
        await agent.get(
          "http://localhost:3001/rickandmorty/login?email=jhosno.dev%40gmail.com&password=qwerty12"
        )
      ).body;
      expect(response.access).toBeTruthy();
    });
    it("Las credenciales son incorrectas", async () => {
      const response = (
        await agent.get(
          "http://localhost:3001/rickandmorty/login?email=jhosno.dev%40gmail.com&password=qwerty1sdadadada2"
        )
      ).body;
      expect(response.access).toBeFalsy();
    });
  });

  describe("POST /rickandmorty/fav/", () => {
    const char1 = { id: "1", name: "Rick" },
      char2 = { id: "2", name: "Morty" };
    it("Devuelve el personaje enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(char1)).body;
      expect(response).toContainEqual(cha1);
    });
    it("Devuelve el personaje previo y el actual", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(char2)).body;
      expect(response).toContainEqual(cha1);
      expect(response).toContainEqual(cha2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Devuleve el arreglo completo cuando no se elimina el personaje ", async () => {
      const response = (await agent.delete("/rickandmorty/fav/50").send(char2)).body;
      expect(response).toContainEqual(cha1);
      expect(response).toContainEqual(cha2);
    });
    it("Elimina correctamente el personaje ", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1").send(char2)).body;
      expect(response).not.toContainEqual(cha1);
      expect(response).toContainEqual(cha2);
    });
  });
});
