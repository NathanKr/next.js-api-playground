import Link from "next/link";
import { SyntheticEvent, useEffect, useState } from "react";
import IComment from "../../types/IComment";
import axios from "axios";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [message, setMessage] = useState("");
  useEffect(getComments, []);

  function getComments() {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data as IComment[]))
      .catch((err) => console.log(err));
  }

  const elems = comments.map((it) => (
    <div key={it.id}>
      <span>{it.description}</span>
      <AiOutlineDelete onClick={() => deleteCommentFromServer(it.id!)} />
      <Link href={`/comments/${it.id}`}>
        <AiOutlineInfoCircle />
      </Link>
    </div>
  ));

  function deleteCommentFromServer(id: number): void {
    setMessage("");
    axios
      .delete(`/api/comments/${id}`)
      .then(function (response) {
        setMessage("Message deletion success");
        const tempComments = comments.filter((it) => it.id != id);
        setComments(tempComments);
      })
      .catch(function (error) {
        setMessage("Message deletion failure");
      });
  }

  function sendNewCommentToServer(comment: IComment): void {
    setMessage("");
    axios
      .post("/api/comments", comment)
      .then(function (response) {
        setMessage("Message creation success");
        const newComment = response.data as IComment;
        const tempComments = [...comments];
        tempComments.push(newComment);
        setComments(tempComments);
      })
      .catch(function (error) {
        setMessage("Message creation failure");
      });
  }

  function addComment(evt: SyntheticEvent): void {
    evt.preventDefault();
    const form = evt.target as any;
    const comment: IComment = {
      description: form.description.value,
      author: form.author.value,
    };
    sendNewCommentToServer(comment);
    (form as HTMLFormElement).reset();
  }

  return (
    <div>
      <h4>Add Comment (Notice : changes are done only on memory not disk)</h4>
      <form onSubmit={addComment}>
        <input
          required
          type="text"
          name="description"
          placeholder="Description"
        />
        <br />
        <input required type="text" name="author" placeholder="Author" />
        <br />
        <input type="submit" value="Add comment" />
      </form>
      <p>{message}</p>
      <p>{comments.length ? "click description for details" : ""}</p>
      {elems}
    </div>
  );
};

export default Comments;
