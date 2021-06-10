import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoaderById from "../../utils/LoaderById";
import { useSelector } from "react-redux";

function RecipesDetails(props) {
  //
  const { match } = props;

  let id = parseInt(match.params.id);
  LoaderById(id);

  //const state = useSelector((state) => state);
  //let data = state.recipes.filter((e) => e.id === id);
  return (
    <div>
      aca detalles
      <Link to="/Home">Volver</Link>
    </div>
  );
}

export default RecipesDetails;
/* useEffect(() => {
    
  }, []); */
