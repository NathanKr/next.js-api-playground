import Link from "next/link";
import { useEffect, useState } from "react";
import IComment from "types/IComment";
import axios from "axios";
import {
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiFillEdit,
  AiFillFileAdd,
} from "react-icons/ai";
import styles from "../../styles/comments.module.css";

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
    <div key={it.id} className={styles.grid_container}>
      <span>{it.description}</span>
      <AiOutlineDelete
        onClick={() => deleteCommentFromServerAndClient(it.id!)}
      />
      <Link
        href={{
          pathname: "/comments/edit",
          query: {...comments[it.id!]},
        }}
      >
        <a>
          <AiFillEdit />
        </a>
      </Link>
      <Link href={`/comments/${it.id}`}>
        <a>
          <AiOutlineInfoCircle />
        </a>
      </Link>
    </div>
  ));

  function deleteCommentFromServerAndClient(id: number): void {
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

  
  return (
    <div>
      <Link href='/comments/create'>
      <AiFillFileAdd/>
      </Link>
      <p>{message}</p>
      <h3>Comments</h3>
      {elems}
    </div>
  );
};

export default Comments;
