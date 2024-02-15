import { useEffect, useState } from "react";

import { api } from "./services/config";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    api.get("/todos").then((res) => setTodos(res));
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
