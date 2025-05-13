import { useState } from "react"
import defaultPhoto from "../assets/images/Person.png"

interface User {
    name: string,
    message: string,
    avatarUrl?: string,
    whenTexted: number,
    id: number
}

interface ChatsProps {
    users: Array<User>
}

// Returns one chat with a certain user
function listElement(chat: User, imgUrl: string) {
    return (
        <li key={chat.id}>
            <span>{chat.name}</span>
            <p>{chat.message}</p>
            <figure>
                <img src={imgUrl} alt="Profile Photo" />
            </figure>
            <span>{chat.whenTexted} min</span>
        </li>
    )
}

export default function chats({ users }: ChatsProps) {
    const [chats, setChats] =  useState<Array<User>>(users);

    if (chats.length <= 0) {
        return <h2>You have no chats! Consider adding someone ;)</h2>
    } else {
        return <ul>{

            chats.map((chat, index) => {
                // Chooses either a default or custom profile photo
                const imgUrl: string = chat.avatarUrl 
                    ? chat.avatarUrl
                    : defaultPhoto

                // If there are more than 3 chats, we add a division
                return (
                    <>
                        {index > 2 && <div className="font-primary">Oldest</div>}
                        {listElement(chat, imgUrl)}
                    </>
                )

            })}</ul>
    }
}