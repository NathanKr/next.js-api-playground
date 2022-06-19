import { useState } from "react";
import IComment from "../../types/IComment";

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  async function getComments() {
    const res = await fetch("/api/comments");
    const comments: IComment[] = await res.json();
    setComments(comments);
  }

  const elems = comments.map((it) => <p>{it.description}</p>);
  return (
    <div>
      <button onClick={getComments}>Get comments</button>
      {elems}
    </div>
  );
};

export default Comments;
