const { Recipe, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Recipe model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if title is null", (done) => {
        Recipe.create({})
          .then(() => done(new Error("It requires a valid title")))
          .catch(() => done());
      });
      it("should work when its a valid title", () => {
        Recipe.create({ title: "Milanesa a la napolitana" });
      });
      it("should work when its a valid summary", () => {
        Recipe.create({ summary: "Resumen milanesa a la napolitana" });
      });
      it("should work when its a valid Puntuation", () => {
        Recipe.create({ Puntuation: 10 });
      });
      it("should work when its a valid lvl_healthScore", () => {
        Recipe.create({ lvl_healthScore: 10 });
      });
      it("should work when its a valid instructions", () => {
        Recipe.create({ instructions: "Pasos a seguir para la creacion" });
      });
    });
  });
});
