import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function GetApi() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default GetApi;
