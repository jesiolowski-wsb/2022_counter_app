import "./App.css";
import Avatar from "./components/Avatar";
import { GENDER } from "./components/constants";

function App() {
  return (
    <div className="App">
      <Avatar name={"John Smith"} gender={GENDER.MALE} />
    </div>
  );
}

export default App;
