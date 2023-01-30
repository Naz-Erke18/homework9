import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./store/TodoContext";


function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
