import "./App.css";
import Greetings from "./components/Greetings";
import Parent from "./components/prop-drilling-components/parent";

function App() {
  const userName = "John";
  return (
    <>
      <>
        <Greetings name='Peter' age={20} />
        <Parent user={userName} />
      </>
    </>
  );
}

export default App;
