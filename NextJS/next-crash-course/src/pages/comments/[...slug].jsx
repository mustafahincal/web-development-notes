import { useRouter } from "next/router";

const CommentTest = () => {
  const router = useRouter();
  return <div>CommentTest</div>;
};

export default CommentTest;

//* we can use [...id].jsx or [...slug].jsx for nested routing
//* if the file [slug].jsx -> localhost:3000/comment/lenovo-15inch
//* if the file [...slug].jsx -> localhost:3000/comment/lenovo-15inch/black-pc
