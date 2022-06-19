// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

// --- access this via /api/blogs
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { id: 1, name: "blog1" },
    { id: 2, name: "blog2" },
    { id: 3, name: "blog3" },
  ]);
}
