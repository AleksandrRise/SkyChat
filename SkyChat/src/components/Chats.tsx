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
        <li key={chat.id} className="w-11/12 mx-auto mt-16 flex cursor-pointer last:mb-80
        hover:border-l-2 hover:border-black/25 hover:pl-10 transition-[padding]">
            <figure className="w-25 h-25 bg-gray rounded-3xl flex justify-center 
            items-center shrink-0 shadow-icons">
                <img className="w-fit h-fit" src={imgUrl} alt="Profile Photo" />
            </figure>
            <div className="ml-9 pr-auto flex flex-col justify-center">
                <span className="text-3xl font-regular">{chat.name}</span>
                <p className="text-xl opacity-50 mt-2.25 truncate max-w-11/12">{chat.message}</p>
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
        return (
        <>
            <ul className="overflow-y-auto no-scrollbar h-full max-w-375 block [&>*:nth-child(5)]:mt-0">{

            // Taking out each chat and storing it inside a list
            chats.map((chat, index) => {
                // If there are more than 3 chats, we add a division
                return (
                    <>
                        {index === 3 && <div className="font-primary text-3xl tracking-widest 
                        my-14 relative oldestDivider text-center opacity-90">Oldest</div>}
                        {chatElement(chat)}
                    </>
                )

            })}</ul>

            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-15% from-white to-transparent h-30 w-full" id="chatsBlender"></div>
        </>
        )
    }
}