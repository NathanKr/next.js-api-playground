// import { Link } from "@mui/material";
import Link from "next/link";


const NavBar = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/comments">
        <a>Comments</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
};

export default NavBar;
