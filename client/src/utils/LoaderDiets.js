import { GET_DIETS } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default async function LoaderDiets() {
  const dispatch = useDispatch();

  let payload = await GET_DIETS();

  return dispatch(payload);
}
