import logo from "./logo.svg";
import "./App.css";
import { HelloWorld } from "./components/HelloWorld";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <HelloWorld />
      </UserProvider>
      <div className="container">
        <h1>Hola</h1>
      </div>
    </>
  );
}

export default App;
