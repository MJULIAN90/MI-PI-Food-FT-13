import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function AddRecipe() {
  const state = useSelector((state) => state);
  const { diets } = state;

  const history = useHistory();
  const [Diets_list, setDiets_list] = useState([]);

  const [food, setfood] = useState({
    title: "",
    summary: "",
    Puntuation: "",
    lvl_healthScore: "",
    instructions: "",
    image: "",
  });

  function handleOnchange(e) {
    setfood({
      ...food,
      [e.target.name]: e.target.value,
    });
  }

  function diets_selecion() {
    setDiets_list([]);
  }
  function handleChooseClick(e) {
    let newlist = [...Diets_list];
    newlist.push(e.target.id);
    setDiets_list(newlist);
  }

  async function handleSumit(e, volver = true) {
    e.preventDefault();

    let data = { ...food };
    data.diets = Diets_list;

    try {
      await axios({
        url: "http://localhost:3001/recipe",
        method: "Post",
        data,
      });

      alert(`PLATO ${food.title} HA SIDO CREADO`);
      if (volver) history.push("/Home");
    } catch (err) {
      alert("ERROR AL CREAR ");
    }

    setfood({
      title: "",
      summary: "",
      Puntuation: "",
      lvl_healthScore: "",
      instructions: "",
      image: "",
    });

    setDiets_list([]);
  }

  return (
    <div>
      <h2>AGREGAR PLATO</h2>
      <form onSubmit={handleSumit}>
        <div>
          <label>Nombre Del Plato: </label>
          <input
            name="title"
            type="text"
            value={food.title}
            placeholder="Ingresa Nombre "
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Resumen Del Plato: </label>
          <textarea
            name="summary"
            type="text"
            rows="10"
            cols="20"
            value={food.summary}
            placeholder="Ingresa Resumen"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Puntuacion: </label>
          <input
            name="Puntuation"
            type="number"
            max="10"
            min="1"
            value={food.Puntuation}
            placeholder="Ingresa Puntuacion Del PLato 1 a 10"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Nivel de "comida saludable : </label>
          <input
            name="lvl_healthScore"
            type="number"
            max="100"
            min="1"
            value={food.lvl_healthScore}
            placeholder="Nivel de comida saludable"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Paso a paso": </label>
          <textarea
            name="instructions"
            type="text"
            rows="10"
            cols="20"
            value={food.instructions}
            placeholder="Paso a paso"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Url de imagen: </label>

          <input
            type="url"
            name="image"
            value={food.image}
            placeholder="Url"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <label>Dietas</label>
          <div>
            <ul>
              {diets.map((e, i) => (
                <div key={i} onClick={handleChooseClick} id={e}>
                  {e}
                </div>
              ))}
            </ul>
          </div>
          <button type="button" onClick={diets_selecion}>
            Reset Selecion dietas
          </button>
        </div>
        <button type="submit">CREAR Y VOLVER</button>
        <button type="button" onClick={(e) => handleSumit(e, false)}>
          CREAR Y CREAR NUEVA
        </button>
      </form>

      <Link to="/Home">{"Volver"}</Link>
    </div>
  );
}

export default AddRecipe;
