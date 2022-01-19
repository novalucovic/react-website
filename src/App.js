import Todo from "./components/Todo";

function App() {
  /* En komponent. Vilket är en vanlig JavaScript-funktion som definieras och exporteras
                    men som returnerar JSX-kod. Alltså HTML i JavaScript-kod. */

  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React Course" />
    </div>
  );
}

export default App;
