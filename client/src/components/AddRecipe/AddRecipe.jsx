import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

//! pendiente hacer la validacion del formulario

function AddRecipe() {
  const state = useSelector((state) => state);
  const { diets } = state;

  const history = useHistory();
  const [Diets_list, setDiets_list] = useState([]);

  const [food, setfood] = useState({
    Name: "",
    Resumen_del_plato: "",
    Puntuacion: "",
    Nivel_de_comida_saludable: "",
    Paso_a_paso: "",
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

      alert(`PLATO ${food.Name} HA SIDO CREADO`);
      if (volver) history.push("/Home");
    } catch (err) {
      alert("ERROR AL CREAR ");
    }

    setfood({
      Name: "",
      Resumen_del_plato: "",
      Puntuacion: "",
      Nivel_de_comida_saludable: "",
      Paso_a_paso: "",
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
            name="Name"
            type="text"
            value={food.Name}
            placeholder="Ingresa Nombre "
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Resumen Del Plato: </label>
          <textarea
            name="Resumen_del_plato"
            type="text"
            rows="10"
            cols="20"
            value={food.Resumen_del_plato}
            placeholder="Ingresa Resumen"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Puntuacion: </label>
          <input
            name="Puntuacion"
            type="number"
            max="10"
            min="1"
            value={food.Puntuacion}
            placeholder="Ingresa Puntuacion Del PLato 1 a 10"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Nivel de "comida saludable : </label>
          <input
            name="Nivel_de_comida_saludable"
            type="number"
            max="100"
            min="1"
            value={food.Nivel_de_comida_saludable}
            placeholder="Nivel de comida saludable"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Paso a paso": </label>
          <textarea
            name="Paso_a_paso"
            type="text"
            rows="10"
            cols="20"
            value={food.Paso_a_paso}
            placeholder="Paso a paso"
            onChange={handleOnchange}
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

      <Link to="/Home">Volver </Link>
    </div>
  );
}

export default AddRecipe;
