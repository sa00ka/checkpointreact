import "./App.css";
import CollapsibleExample from "./components/navb"
import Cards from "./components/Cards";
import Forms from "./components/Forms";
function App() {
  return (
    <div className="App">
      <CollapsibleExample></CollapsibleExample>
      <div className="cards">
      <Cards></Cards>
      </div>
      <Forms></Forms>
    </div>
  );
}

export default App;
