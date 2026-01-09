import "./App.css";
import Greetings from "./components/Greetings";
import GrandChild from "./components/prop-drilling-components/grand-child";
import Parent from "./components/prop-drilling-components/parent";

function App() {
  const userName = "John";
  return (
    <>
      <>
        <Greetings name='Peter' age={20} />
        <Parent>
          <GrandChild user={userName} />
        </Parent>
      </>
    </>
  );
}

export default App;
