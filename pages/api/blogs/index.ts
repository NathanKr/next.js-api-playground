// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IBlog from "types/IBlog";

// --- access this via /api/blogs
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog[]>
) {
  res.status(200).json([
    { id: 1, name: "blog1" },
    { id: 2, name: "blog2" },
    { id: 3, name: "blog3" },
  ]);
}
