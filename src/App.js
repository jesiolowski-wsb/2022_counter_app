import "./App.css";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <List items={["tag1"]} type={"primary"} />
    </div>
  );
}

export default App;
