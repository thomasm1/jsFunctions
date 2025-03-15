 
const CommentList = ({ comments }) => {
  const styles = {
    small: {
      color: "#48a0ff",
      fontSize: "0.8em",
    },
    li: {
      color: "blue",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
  };

  const renderedComments = comments.map((comment) => {
    return (
      <li style={styles.li} key={comment.id}>
        {comment.body}
        <br />
        <small style={styles.small}>{comment.name}</small>
        <small style={styles.small}>by {comment.email}</small>
        <hr />
      </li>
    );
  });

  return <ul style={styles.ul}>{renderedComments}</ul>;
};

export default CommentList;
