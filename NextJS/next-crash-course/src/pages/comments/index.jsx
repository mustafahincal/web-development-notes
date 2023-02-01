import React from "react";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} style={{ margin: "10px" }}>
          {comment.email}
        </div>
      ))}
    </div>
  );
};

//* getStaticProps works on the server side, but doesn't reprocess every request, just runs at build time.
//* use on data that won't change much
export async function getStaticProps(context) {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await result.json();
  return {
    props: {
      comments,
    },
  };
}

export default Comments;
