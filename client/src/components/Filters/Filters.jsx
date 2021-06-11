import React from "react";

function Filters() {
  function alerta() {
    alert("hola");
  }
  return (
    <div>
      <h1>aca filtros</h1>

      <div>
        Tipos de dietas en menu desplegable o links
        <span> dieta1</span>
        <span>dieta2 </span>
        <span> dieta2</span>
        <span> dieta2</span>
        <span> dieta2</span>
        <span> dieta2</span>
      </div>

      <button onClick={alerta}> Ordenar asc alfabetico</button>
      <button> Ordenar desc alfabetico</button>
      <button> Ordenar x SCORE</button>
    </div>
  );
}

export default Filters;
