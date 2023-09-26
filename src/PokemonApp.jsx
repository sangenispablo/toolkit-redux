import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>Hola 1</li>
        <li>Hola 2</li>
        <li>Hola 3</li>
      </ul>
    </>
  );
};
