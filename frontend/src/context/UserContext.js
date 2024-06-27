import axios from "axios";
const { createContext, useReducer } = require("react");
//redycer
const initialState = {
  users: [],
  welcome_message: "Init",
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, users: action.payload };
    case "SET_WELCOME_MESSAGE":
      return { ...state, welcome_message: action.payload };
  }
};

//creating context and provider
const UserContext = createContext();

const UserProvider = ({ children }) => {
  //getting the state from recuder
  const [state, dispatch] = useReducer(userReducer, initialState);
  const url = `http://localhost:4000/api`;

  //my functions
  const getHelloWorld = async () => {
    try {
      const response = await axios.get("https://g3hmdq-4000.csb.app/");
      const { message } = response.data;
      dispatch({ type: "SET_WELCOME_MESSAGE", payload: message });
    } catch (err) {
      console.log("error getting welcome message: ", err);
    }
  };
  return (
    <UserContext.Provider value={{ state, dispatch, getHelloWorld }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
