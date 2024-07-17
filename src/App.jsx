import colors from "./colors";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      {colors.map((el) => {
        return <Cards key={el.id} el={el} />;
      })}
    </div>
  );
}

export default App;
