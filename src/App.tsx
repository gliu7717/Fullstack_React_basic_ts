import "./App.css";
import Greetings from "./components/Greetings";
import Parent from "./components/prop-drilling-components/parent";
import { UserContext } from "./context/UserContext";

function App() {
  const userName = "John";
  return (
    <>
      <>
        <Greetings name='Peter' age={20} />

        <UserContext.Provider value={userName}>
          <Parent />
        </UserContext.Provider>
      </>
    </>
  );
}

export default App;
