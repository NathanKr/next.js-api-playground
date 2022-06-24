// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { assert } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import IComment from "../../../types/IComment";
import {
  deleteComment,
  editComment,
  getComment,
} from "../../../utils/comments-storage";

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
      {
        const comment: IComment | undefined = getComment(id);
        // --- todo nath can i do without send
        comment ? res.status(200).send(comment) : res.status(404).send("");
      }
      break;

    case "DELETE":
      {
        const result = deleteComment(id);
        // --- todo nath can i do without send
        result ? res.status(200).send("") : res.status(404).send(""); //todo can i remove empty send
      }
      break;

    case "PATCH":
      {
        const comment: IComment = req.body as unknown as IComment;
        console.log(req.body);
        
        assert(comment.id == id)
        console.log(comment.id , id);
        
        const result = editComment(comment);
        result ? res.status(200).send("") : res.status(404).send(""); //todo can i remove empty send
      }
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}
