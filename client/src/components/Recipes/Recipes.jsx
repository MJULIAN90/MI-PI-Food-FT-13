import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Recipes() {
  const state = useSelector((state) => state);

  const { recipes } = state;

  let data = [...recipes];

  //const [pagination, setpagination] = useState(0);

  const nextPage = () => {};

  const prevPage = () => {};

  return (
    <div>
      {recipes.map((data) => (
        <Link key={data.id} to={`/Home/Details/${data.id}`}>
          <div>
            <h3>{data.title}</h3>
            <img src={data.image} alt="error cargando" width="80" height="80" />
            <h4>
              Diets: <br /> {data.diets}
            </h4>
          </div>
        </Link>
      ))}
      <div>
        <button type="button"> Anterior</button>
        <button type="button"> 1</button>
        <button type="button"> 2</button>
        <button type="button"> 3</button>
        <button type="button"> 4</button>
        <button type="button"> 5</button>
        <button type="button"> 6</button>
        <button type="button"> 7</button>
        <button type="button"> 8</button>
        <button type="button"> 9</button>
        <button type="button"> 10</button>
        <button type="button"> Siguiente</button>
      </div>
    </div>
  );
}

export default Recipes;

/*      <button
          type="button"
          onClick={() => {
            let uno = data.slice(0, 1);
            console.log(uno);
          }}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => {
            let dos = recipes.slice(1, 2);
            console.log(dos);
          }}
        >
          {" "}
          2
        </button> */
