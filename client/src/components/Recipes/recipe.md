import React, { useState } from "react";

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
} from "../../Redux/Actios/Actios";

function Recipes() {
const state = useSelector((state) => state);

const { recipes, cache_data } = state;
const dispatch = useDispatch();

const [pagination, setpagination] = useState(0);
const [entry_to_filter, setentry_to_filter] = useState("");

let data = [...recipes];
let data_cache = [...cache_data];

const paginationRecipes = () => {
if (entry_to_filter !== "") {
if (data_cache.length > 0)
return data_cache.slice(pagination, pagination + 1);

      if (data_cache.length === 0) {
        setentry_to_filter("");
        alert("NO SE ENCONTRARON RECETAS CON ESTA DIETA");
      }
    }
    return data.slice(pagination, pagination + 1);

};

const filters = (e) => {
switch (e.target.id) {
case "ordAsc": {
setpagination(0);
return dispatch(ORDENAR_BY_NAME_ASC(data));
}

      case "ordDes": {
        setpagination(0);
        return dispatch(ORDENAR_BY_NAME_DESC(data));
      }

      case "ordScore": {
        setpagination(0);
        return dispatch(ORDENAR_BY_SCORE(data));
      }
      case "d1": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_GLUTENFREE(data));
      }

      case "d2": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_KETOGENIC(data));
      }

      case "d3": {
        setpagination(0);
        setentry_to_filter("ok");
        return dispatch(ORDER_BY_DIET_VEGETARIAN(data));
      }

      case "d4": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_LACTO_VEGETARIAN(data));
      }

      case "d5": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_OVO_VEGETARIAN(data));
      }

      case "d6": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_VEGAN(data));
      }

      case "d7": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PESCETARIAN(data));
      }

      case "d8": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PALEO(data));
      }

      case "d9": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PRIMAL(data));
      }

      case "d10": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_WHOLE30(data));
      }

      case "d11": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_DAIRYFREE(data));
      }

      case "d12": {
        setentry_to_filter("ok");
        setpagination(0);
        return dispatch(ORDER_BY_DIET_PALEOLITHIC(data));
      }

      default:
        break;
    }

};

const nextPage = () => {
if (pagination < 9) setpagination(pagination + 1);
console.log(pagination);
};

const prevPage = () => {
if (pagination > 0) setpagination(pagination - 1);
console.log(pagination);
};

const resetFilter = () => {
setentry_to_filter("");
return dispatch(DELETE_FILTERS());
};

const botones = (e) => {
switch (e.target.id) {
case "1":
return setpagination(0);
case "2":
return setpagination(1);
case "3":
return setpagination(2);
case "4":
return setpagination(3);
case "5":
return setpagination(4);
case "6":
return setpagination(5);
case "7":
return setpagination(6);
case "8":
return setpagination(7);
case "9":
return setpagination(8);
case "10":
return setpagination(9);
default:
break;
}
};

/\*
let pagecount = Math.ceil(data_cache.length / 2);

console.log(pagecount);

let array = [];

function prueba() {
for (let i = 1; i < pagecount; i++) {
array.push(i);
console.log(array);
}
}

prueba(); \*/

return (
<div>
<h1>aca filtros</h1>
<div>
<h3>Tipos de dietas </h3>
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
<div>
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
{paginationRecipes().map((data) => (
<Link key={data.id} to={`/Home/Details/${data.id}`}>
<div>
<h3>{data.title}</h3>
<img src={data.image} alt="error cargando" width="80" height="80" />
<h4>
<br />
{"Diets:"}
{data.diets.map((e, i) => (
<div key={i}>{e}</div>
))}
</h4>
</div>
</Link>
))}

      <div>
        <button type="button" onClick={prevPage}>
          {"Anterior"}
        </button>
        {cache_data.length > 0 ? (
          <>
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
            <button type="button" onClick={botones} id="6">
              {"6"}
            </button>
            <button type="button" onClick={botones} id="7">
              {"7"}
            </button>
            <button type="button" onClick={botones} id="8">
              {"8"}
            </button>
            <button type="button" onClick={botones} id="9">
              {"9"}
            </button>
            <button type="button" onClick={botones} id="10">
              {"10"}
            </button>
          </>
        ) : (
          <h1>chao</h1>
        )}

        <button type="button" onClick={nextPage}>
          {"Siguiente"}
        </button>
      </div>
    </div>

);
}

export default Recipes;

/\*
\*/

/_ <div>
{array.length > 1 ? (
array.map((i) => (
<button type="button" onClick={botones} id={`d${i}`} key={i}>
{i}
</button>
))
) : (
<h1>n ohay nada</h1>
)}
</div> _/
