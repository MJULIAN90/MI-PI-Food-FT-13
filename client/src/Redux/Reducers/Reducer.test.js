import reducer from "./Reducers";
import {} from "../Actios/Actios";

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, [])).toEqual({
      cache_data: [],
      createByUserDb: [],
      diets: [],
      favorites: [],
      recipe_id: undefined,
      recipes: [],
      searched: [],
    });
  });
});
