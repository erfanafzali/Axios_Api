import { useState } from "react";
import axios from "axios";

function PostApi() {
  const [title, setTitle] = useState("");

  const titleHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={titleHandler}>post</button>
    </div>
  );
}

export default PostApi;
