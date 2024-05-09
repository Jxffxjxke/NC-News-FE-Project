import Comment from "./Comment";

const CommentsSection = ({ comments, setCurrentComments }) => {
  return comments.map((comment) => {
    return (
      <Comment
        key={comment.comment_id}
        comment={comment}
        comments={comments}
        setComments={setCurrentComments}
      />
    );
  });
};

export default CommentsSection;
