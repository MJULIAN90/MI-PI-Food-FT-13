import { GET_BY_ID } from "../Redux/Actios/Actios";
import { useDispatch } from "react-redux";

export default async function LoaderById(id) {
  const dispatch = useDispatch();

  let payload = await GET_BY_ID(id);

  return dispatch(payload);
}
