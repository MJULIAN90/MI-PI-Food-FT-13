import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ORDENAR_BY_NAME_ASC,
  ORDENAR_BY_NAME_DESC,
  ORDENAR_BY_SCORE,
  DELETE_FILTERS,
  ORDER_BY_DIET_GLUTENFREE,
  ORDER_BY_DIET_KETOGENIC,
  ORDER_BY_DIET_VEGETARIAN,
  ORDER_BY_DIET_LACTO_VEGETARIAN,
  ORDER_BY_DIET_OVO_VEGETARIAN,
  ORDER_BY_DIET_VEGAN,
  ORDER_BY_DIET_PESCETARIAN,
  ORDER_BY_DIET_PALEO,
  ORDER_BY_DIET_PRIMAL,
  ORDER_BY_DIET_WHOLE30,
  ORDER_BY_DIET_DAIRYFREE,
  ORDER_BY_DIET_PALEOLITHIC,
  ADDED_BY_USER_DB,
} from "../../Redux/Actios/Actios";

import "./Recipes.css";
function Recipes() {
  const state = useSelector((state) => state);

  const { recipes, cache_data } = state;
  const dispatch = useDispatch();

  const [pagination, setpagination] = useState(0);
  const [entry_to_filter, setentry_to_filter] = useState("");

  let data = [...recipes];
  let data_cache = [...cache_data];

  useEffect(() => {
    dispatch(ADDED_BY_USER_DB());
  }, [dispatch]);

  const paginationRecipes = () => {
    if (entry_to_filter !== "") {
      if (data_cache.length > 0)
        return data_cache.slice(pagination, pagination + 10);

      if (data_cache.length === 0) {
        setentry_to_filter("");
        alert("NO SE ENCONTRARON RECETAS CON ESTA DIETA");
      }
    }
    return data.slice(pagination, pagination + 10);
  };

  const filters = (e) => {
    switch (e.target.id) {
      case "ordAsc": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDENAR_BY_NAME_ASC());
      }

      case "ordDes": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDENAR_BY_NAME_DESC());
      }

      case "ordScore": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDENAR_BY_SCORE());
      }
      case "d1": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_GLUTENFREE());
      }

      case "d2": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_KETOGENIC());
      }

      case "d3": {
        setpagination(0);
        setentry_to_filter("ok");
        return dispatch(ORDER_BY_DIET_VEGETARIAN());
      }

      case "d4": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_LACTO_VEGETARIAN());
      }

      case "d5": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_OVO_VEGETARIAN());
      }

      case "d6": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_VEGAN());
      }

      case "d7": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PESCETARIAN());
      }

      case "d8": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PALEO());
      }

      case "d9": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PRIMAL());
      }

      case "d10": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_WHOLE30());
      }

      case "d11": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_DAIRYFREE());
      }

      case "d12": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PALEOLITHIC());
      }

      default:
        break;
    }
  };

  const nextPage = () => {
    if (pagination < 40) setpagination(pagination + 10);
  };

  const prevPage = () => {
    if (pagination > 0) setpagination(pagination - 10);
  };

  const resetFilter = () => {
    setentry_to_filter("");
    setpagination(0);
    return dispatch(DELETE_FILTERS());
  };

  const botones = (e) => {
    switch (e.target.id) {
      case "1":
        return setpagination(0);
      case "2":
        return setpagination(10);
      case "3":
        return setpagination(20);
      case "4":
        return setpagination(30);
      case "5":
        return setpagination(40);
      default:
        break;
    }
  };

  let pagecount = Math.ceil(data_cache.length / 10);

  let array = [];

  function prueba() {
    for (let i = 1; i <= pagecount; i++) {
      array.push(i);
    }
  }

  prueba();

  return (
    <div className="recipes">
      <div className="principal">
        <div className="filters">
          <button type="button" id="ordAsc" onClick={filters}>
            {"Ordenar asc alfabetico "}
          </button>
          <button type="button" id="ordDes" onClick={filters}>
            {"Ordenar desc alfabetico"}
          </button>
          <button type="button" id="ordScore" onClick={filters}>
            {"Ordenar x SCORE"}
          </button>
          <button type="button" onClick={resetFilter}>
            {"Reset Filtros"}
          </button>
        </div>
        <div className="recipeCreate">
          {paginationRecipes().map((data) => (
            <div key={data.id} className="recipeCard">
              <div className="titulo">
                <Link to={`/Home/Details/${data.id}`} className="links">
                  <h3>{data.title}</h3>
                </Link>
              </div>
              <div className="contenido">
                <div className="img_diets">
                  <img
                    src={data.image}
                    alt="error cargando"
                    width="120"
                    height="120"
                  />{" "}
                </div>

                <div className="text_diets">
                  {"Diets:"}
                  {data.diets.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="botones ">
          {cache_data.length <= 0 ? (
            <>
              <button type="button" onClick={prevPage}>
                {"<<"}
              </button>
              <button type="button" onClick={botones} id="1">
                {"1"}
              </button>
              <button type="button" onClick={botones} id="2">
                {"2"}
              </button>
              <button type="button" onClick={botones} id="3">
                {"3"}
              </button>
              <button type="button" onClick={botones} id="4">
                {"4"}
              </button>
              <button type="button" onClick={botones} id="5">
                {"5"}
              </button>
              <button type="button" onClick={nextPage}>
                {">>"}
              </button>
            </>
          ) : (
            <div>
              {array.map((i) => (
                <button type="button" onClick={botones} id={i} key={i}>
                  {i}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="TypesDiets">
        <button type="button" onClick={filters} id="d1">
          {"GLUTEN FREE "}
        </button>
        <button type="button" onClick={filters} id="d2">
          {"KETOGENIC "}
        </button>
        <button type="button" onClick={filters} id="d3">
          {"VEGETARIAN "}
        </button>
        <button type="button" onClick={filters} id="d4">
          {"LACTO VEGETARIAN "}
        </button>
        <button type="button" onClick={filters} id="d5">
          {"OVO VEGETARIAN "}
        </button>
        <button type="button" onClick={filters} id="d6">
          {"VEGAN"}
        </button>
        <button type="button" onClick={filters} id="d7">
          {"PESCETARIAN "}
        </button>
        <button type="button" onClick={filters} id="d8">
          {"PALEO "}
        </button>
        <button type="button" onClick={filters} id="d9">
          {"PRIMAL"}
        </button>
        <button type="button" onClick={filters} id="d10">
          {"WHOLE30 "}
        </button>
        <button type="button" onClick={filters} id="d11">
          {"DAIRY FREE "}
        </button>
        <button type="button" onClick={filters} id="d12">
          {"PALEOLITHIC"}
        </button>
      </div>
    </div>
  );
}

export default Recipes;
