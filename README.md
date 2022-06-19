<h2>Motivation</h2>
Play with api routes in next.js


<h2>Tree structure</h2>
<p>pages and api directories are mandatoris. the file names inside api are arbitraries e.g. here hello.ts</p>
<p>The directory structure determine the api route (same idea as for pages) e.g. to access index.ts inside blogs you need to access /api/blogs</p>


![tree-structure](./figs/api-tree-structure.png)

<h2>handler</h2>

This is hello.ts. this code handle requests to /api/hello. Handler name is arbitrary but must be export as default

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

```
