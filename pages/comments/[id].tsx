import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import IComment from "src/types/IComment";

const Comment = () => {
  const router = useRouter();
  const [comment, setComment] = useState<IComment>();
  const { id } = router.query;

  // here we set state on info from the network
  // we could also take it from context (need to create it)
  // or pass the info via the Link as props
  useEffect(getComment, [id]);

  function getComment() {
    if (id) {
      const url = `/api/comments/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((curComment) => setComment(curComment));
    }
  }

  if (!comment) {
    return <div>Comment is undedfine .......</div>;
  }

  const elem = (
    <div>
      <p>id : ${comment.id}</p>
      <p>author : {comment.author}</p>
      <p>desc : {comment.description}</p>
    </div>
  );

  return <div>{elem}</div>;
};

export default Comment;
