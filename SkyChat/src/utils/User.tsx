type Message = {
    text: string;
    isMe: boolean;
}

export type User = {
    name: string;
    messages: Array<Message>;
    avatarUrl?: string;
    whenTexted: number;
    id?: number;
}