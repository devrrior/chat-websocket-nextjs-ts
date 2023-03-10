import {MessageType} from "@/types/models/message.type";

export type InsertOnePayloadType = {
    message: MessageType;
}

export type SetUsernameType = {
    username: string;
}

export type SetRoomIdType = {
    roomId: string;
}
