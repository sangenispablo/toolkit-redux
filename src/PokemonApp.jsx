import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
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
