import "./App.css";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "./Context/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("ulugbek's-id");
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
