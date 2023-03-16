import Meta from "@/components/Meta";
import { useRouter } from "next/router";

const Comments = ({ comments }) => {
  const router = useRouter();
  return (
    <div>
      <Meta
        title="Comments"
        description="comment description"
        keywords="comment keywords"
      />
      {comments.map((comment) => (
        <div key={comment.id} className="comment-wrap">
          <button
            onClick={() => router.push(`/comments/${comment.id}`)}
            className="btn"
          >
            Detail
          </button>
          <h2>{comment.email}</h2>
        </div>
      ))}

      <style jsx>
        {`
          .btn {
            padding: 10px 20px;
            cursor: pointer;
          }
          .comment-wrap {
            display: flex;
            gap: 1rem;
            margin-top: 20px;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

//* getStaticProps works on the server side, but doesn't reprocess every request, just runs at build time.
//* use on data that won't change much
//* when we build the application, we will see the data in html page because data fetched in build time it makes the application very fast.
export async function getStaticProps(context) {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await result.json();
  return {
    props: {
      comments,
    },
  };
}

//* we can use getServerSideProps here also
//! but we cant use getStaticProps in [id].jsx pages
/* export async function getServerSideProps(context) {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await result.json();
  return {
    props: {
      comments,
    },
  };
} */

export default Comments;
