import Comment from "./Comment";

const CommentsSection = ({ comments }) => {
  return comments.map((comment) => {
    return <Comment key={ comment.comment_id} comment={comment} />;
  });
};

export default CommentsSection;
