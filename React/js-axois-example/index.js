import axios from "axios";

async function getData(id) {
   const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + id
   );

   const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
   );

   const userAndPost = { user, posts };
   return userAndPost;
}

export default getData;
