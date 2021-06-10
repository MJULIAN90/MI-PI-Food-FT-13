import { GET_RECIPES } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default function LoaderRecipes() {
  const dispatch = useDispatch();

  const loaderRecipes = async () => {
    let payload = await GET_RECIPES();
    return dispatch(payload);
  };

  return loaderRecipes();
}
