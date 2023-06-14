import "./App.css";
import { useState } from "react";
import Login from "./Login";
function App() {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
