import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddRecipe from "../src/components/AddRecipe/AddRecipe";

describe("<AddRecipe />", () => {
  describe("Estructura", () => {
    let wrapper = shallow(<AddRecipe />);
    beforeEach(() => {
      wrapper = shallow(<AddRecipe />);
    });

    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(0);
    });
  });
});
