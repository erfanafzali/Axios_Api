import { useState } from "react";
import axios from "axios";

function PatchApi() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const patchHandler = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={patchHandler}>Patch</button>
    </div>
  );
}

export default PatchApi;
