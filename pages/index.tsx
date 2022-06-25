import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/comments">
        <a>Comments</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
    </div>
  );
};

export default Home;
