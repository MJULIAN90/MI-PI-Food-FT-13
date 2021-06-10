import { GET_DIETS } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default function LoaderDiets() {
  const dispatch = useDispatch();

  const loaderDiets = async () => {
    let payload = await GET_DIETS();
    return dispatch(payload);
  };

  return loaderDiets();
}
