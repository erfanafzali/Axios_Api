import { useEffect } from "react";
import axios from "axios";

function AllApi() {
  useEffect(() => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then(
        axios.spread((todos, posts, users) => {
          console.log(todos.data);
          console.log(posts.data);
          console.log(users.data);
        })
      );
  }, []);

  return <div></div>;
}

export default AllApi;
