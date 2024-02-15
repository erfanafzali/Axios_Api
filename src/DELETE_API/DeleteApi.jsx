import { useState } from "react";
import axios from "axios";

function DeleteApi() {
  const [id, setId] = useState("");
  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}

export default DeleteApi;
