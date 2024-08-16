import "./App.css";
import AddUser from "./context_API_crud/AddUser";
import UserList from "./context_API_crud/UserList";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Index } from "./context_API_crud/Index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index>
<AddUser/>
<UserList/>
      </Index>
    </>
  )
}

export default App
