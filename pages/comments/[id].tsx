import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import IComment from "../../types/IComment";

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

  const elem = `id : ${comment.id} , author : ${comment.author} ,desc : ${comment.description}`;

  return <div>{elem}</div>;
};

export default Comment;