import IComment from "types/IComment";
import comments from 'data/comments.json';
import fs from 'fs'

function save(){
  let data = JSON.stringify(comments);
  fs.writeFileSync('data/comments.json', data); 
}

export function getComment(id: number): IComment | undefined {
  return comments.find((it) => it.id == id);
}

export function editComment(comment: IComment): boolean {
  const indexFound: number = comments.findIndex((it) => it.id == comment.id);
  if (indexFound < 0) {
    return false;
  }

  comments[indexFound].author = comment.author;
  comments[indexFound].description = comment.description;
  save();
  return true;
}

export function deleteComment(id: number): boolean {
  const indexFound: number = comments.findIndex((it) => it.id == id);
  if (indexFound < 0) {
    return false;
  }

  comments.splice(indexFound, 1);
  save();
  return true;
}

export function getComments(): IComment[] {
  return comments;
}

export function addComment(comment: IComment): void {
  comments.push(comment as any); //todo nath fix this
  save();
}
