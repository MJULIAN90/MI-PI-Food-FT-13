import { GET_RECIPES } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default async function LoaderRecipes() {
  const dispatch = useDispatch();

  let payload = await GET_RECIPES();

  return dispatch(payload);
}
