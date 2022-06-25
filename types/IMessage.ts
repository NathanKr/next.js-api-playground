export enum MessageType{
    Success,
    Failure
}

export default interface IMessage{
    type : MessageType;
    message : string;
}