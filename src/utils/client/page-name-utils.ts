import PageName from "src/types/PageName";

export function getComponentUrl(name: PageName): string {
  let url;

  switch (name) {
    case PageName.Home:
      url = "/";
      break;

    case PageName.About:
      url = "/about";
      break;

    case PageName.Blogs:
      url = "/blogs";
      break;

    case PageName.Comments:
      url = "/comments";
      break;

      case PageName.Portfolio:
      url = "/portfolio";
      break;


    default:
      throw new Error(`Unexpected PageName : ${name}`);
  }

  return url;
}
