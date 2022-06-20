import IComment from "../types/IComment"
import comments from '../data/comments.json'
const path = require('path');

export function getComment(id : number) : IComment | undefined{
    return comments.find(it=> it.id == id);
}

export function deleteComment(id : number) : boolean{
    const indexFound : number = comments.findIndex(it=> it.id == id);
    if(indexFound < 0){
        return false
    }

    comments.splice(indexFound,1);
    return true;
}

export function getComments() : IComment[]{
    return comments;
}



export function addComment(comment : IComment) : void{
    comments.push(comment as any);//todo nath fix this
}


// todo nath
// next.js does not recognize this
//  export function saveComments() : void{
//     const fullPath = path.resolve(__dirname, '../data/comments.json')
//     writeFileSync(fullPath,JSON.stringify(comments))
// }