// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IComment from "../../../types/IComment";
import { deleteComment, getComment } from "../../../utils/comments-storage";

// --- access this via e.g. the comment id /api/comments/2

// todo nath , how to use the interface ??
interface IId {
  id: string;
}

// --- access this using id e.g. 1 :  /api/comments/1
export default function handleCommentWithId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}`);
  const id = Number(req.query.id);

  switch (req.method) {
    case "GET":
      const comment: IComment | undefined = getComment(id);
      // --- todo nath can i do without send
      comment ? res.status(200).send(comment) : res.status(404).send("");
      break;

    case "DELETE":
      const deleted = deleteComment(id);
      // --- todo nath can i do without send
      deleted ? res.status(200).send('') : res.status(404).send('');
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}
