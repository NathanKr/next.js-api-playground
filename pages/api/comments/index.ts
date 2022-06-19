// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IComment from "../../../types/IComment";
import comments from '../../../public/data/comments.json'

// --- access this via /api/comments
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IComment[]>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}`);
  
  res.status(200).send(comments);
}
