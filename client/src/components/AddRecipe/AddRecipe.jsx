import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ADDED_BY_USER_DB } from "../../Redux/Actios/Actios";
import "./AddRecipe.css";

function AddRecipe() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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
        url: "/recipe",
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

    dispatch(ADDED_BY_USER_DB());

    setDiets_list([]);
  }

  function volver() {
    history.push("/Home");
  }

  return (
    <div className="addRecipe">
      <form onSubmit={handleSumit} className="formulario">
        <h2>AGREGAR PLATO</h2>
        <div className="form_inputs">
          <label>Nombre Del Plato: </label>
          <input
            className="inputs"
            name="title"
            type="text"
            value={food.title}
            placeholder="Ingresa Nombre "
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="form_inputs">
          <label>Resumen Del Plato: </label>
          <textarea
            className="textarea"
            name="summary"
            type="text"
            rows="10"
            cols="50"
            value={food.summary}
            placeholder="Ingresa Resumen"
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="form_inputs">
          <label>Puntuacion: </label>
          <input
            className="inputs"
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
        <div className="form_inputs">
          <label>Nivel de comida saludable : </label>
          <input
            className="inputs"
            name="lvl_healthScore"
            type="number"
            max="100"
            min="1"
            value={food.lvl_healthScore}
            placeholder="Nivel de comida saludable de 1 a 100"
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="form_inputs">
          <label>Paso a paso: </label>
          <textarea
            className="textarea"
            name="instructions"
            type="text"
            rows="10"
            cols="15"
            value={food.instructions}
            placeholder="Paso a paso"
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="form_inputs">
          <label>Url de imagen: </label>

          <input
            className="inputs"
            type="url"
            name="image"
            value={food.image}
            placeholder="Url"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <h2>Dietas</h2>
          <div className="dietasSeleccion">
            <ul>
              {diets.map((e, i) => (
                <div key={i}>
                  <label
                    onClick={handleChooseClick}
                    id={e}
                    className={Diets_list.includes(e) ? "dieta1" : "dieta2"}
                  >
                    {e}
                  </label>
                </div>
              ))}
            </ul>
          </div>
          <div className="addbutton">
            <button
              type="button"
              onClick={diets_selecion}
              className="add_button"
            >
              Borrar Selecionados
            </button>
          </div>
        </div>
        <div>
          <div className="addbutton">
            <button type="submit" className="add_button">
              CREAR Y VOLVER
            </button>
            <button
              type="button"
              onClick={(e) => handleSumit(e, false)}
              className="add_button"
            >
              CREAR Y CREAR NUEVA
            </button>
          </div>
          <div className="addbutton">
            <button type="button" onClick={volver} className="add_button">
              Volver
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
