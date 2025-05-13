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
function chatElement(chat: User) {
    // Chooses either a default or custom profile photo
    const imgUrl: string = chat.avatarUrl 
    ? chat.avatarUrl
    : defaultPhoto

    return (
        <li key={chat.id} className="w-11/12 mx-auto mt-19 flex">
            <figure className="w-25 h-25 bg-gray rounded-3xl flex justify-center items-center shadow-icons">
                <img src={imgUrl} alt="Profile Photo" />
            </figure>
            <div className="ml-9 flex flex-col justify-center">
                <span className="text-3xl font-regular">{chat.name}</span>
                <p className="text-xl opacity-50 mt-2.25">{chat.message}</p>
            </div>
            <time className="ml-auto text-2xl opacity-25 my-auto">{chat.whenTexted} min</time>
        </li>
    )
}


export default function chats({ users }: ChatsProps) {
    const [chats, setChats] =  useState<Array<User>>(users);

    if (chats.length <= 0) {
        return <h2 className="text-center">You have no chats! Consider adding someone ;)</h2>
    } else {
        return <ul className="overflow-y-auto no-scrollbar max-h-167 max-w-375 flex flex-col last:pb-80">{

            // Taking out each chat and storing it inside a list
            chats.map((chat, index) => {
                // If there are more than 3 chats, we add a division
                return (
                    <>
                        {index > 2 && <div className="font-primary">Oldest</div>}
                        {chatElement(chat)}
                    </>
                )

            })}</ul>
    }
}