import type { NextPage } from "next";
import Link from "next/link";


const Home: NextPage = () => {
  return <div>
    <Link href='/comments'>
    <a>Click here to navigate to Comments page</a>
    </Link>
  </div>;
};

export default Home;
