import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export const HelloWorld = () => {
  const { state, getHelloWorld } = useContext(UserContext);

  useEffect(() => {
    getHelloWorld();
  }, [getHelloWorld]);
  return (
    <>
      <h2>Message: {state.welcome_message}</h2>
    </>
  );
};
