import "./App.css";
import Avatar from "./components/Avatar";
import { GENDER } from "./components/constants";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Avatar name={"John Smith"} gender={GENDER.MALE} />
      <Button />
    </div>
  );
}

export default App;
