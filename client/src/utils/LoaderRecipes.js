import { GET_RECIPES } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default async function LoaderRecipes() {
  const dispatch = useDispatch();

  return dispatch(await GET_RECIPES());
}
