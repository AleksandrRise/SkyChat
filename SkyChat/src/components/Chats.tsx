import { useState } from "react"
import defaultPhoto from "../assets/images/Person.png"

type User = {
    name: string;
    message: string;
    avatarUrl?: string;
    whenTexted: number;
    id?: number;
}

type ChatsProps = {
    users: Array<User>;
}

// Returns one chat with a certain user
function ChatElement({ name, message, avatarUrl = "", whenTexted, id }: User) {
    // Chooses either a default or custom profile photo
    const imgUrl: string = avatarUrl
    ? avatarUrl
    : defaultPhoto

    const liClasses = `w-11/12 mx-auto mt-16 flex cursor-pointer last:mb-80
        hover:border-l-2 hover:border-black/25 hover:pl-10 transition-[padding]`;

    const figClasses = `w-25 h-25 bg-gray rounded-3xl flex justify-center 
        items-center shrink-0 shadow-icons`;

    const imgClasses = `w-fit h-fit`;
    const divClasses = `ml-9 pr-auto flex flex-col justify-center`;
    const spanClasses = `text-3xl font-regular`;
    const pClasses = `text-xl opacity-50 mt-2.25 truncate max-w-11/12`;
    const timeClasses = `ml-auto text-2xl opacity-25 my-auto`;

    return (
        <li key={id} className={liClasses}>
            <figure className={figClasses}>
                <img className={imgClasses} src={imgUrl} alt="Profile Photo" />
            </figure>
            <div className={divClasses}>
                <span className={spanClasses}>{name}</span>
                <p className={pClasses}>{message}</p>
            </div>
            <time className={timeClasses}>{whenTexted} min</time>
        </li>
    )
}


export default function chats({ users }: ChatsProps) {
    const [chats, setChats] =  useState<Array<User>>(users);

    const hClasses = `text-center`;

    const ulClasses = `overflow-y-auto no-scrollbar h-full 
        max-w-375 block [&>*:nth-child(5)]:mt-0`;

    const chatsDivClasses = `font-primary text-3xl tracking-widest 
        my-14 relative oldestDivider text-center opacity-90`;

    const blendClasses = `absolute bottom-0 left-0 bg-gradient-to-t 
        from-15% from-white to-transparent h-30 w-full`;

    if (chats.length <= 0) {
        return <h2 className={hClasses}>You have no chats! Consider adding someone ;)</h2>
    } else {
        return (
        <>
            <ul className={ulClasses}>{

                // Taking out each chat and storing it inside a list
                chats.map((chat, index) => {
                    // If there are more than 3 chats, we add a division
                    return (
                        <>
                            {index === 3 && <div className={chatsDivClasses}>Oldest</div>}
                            <ChatElement 
                                name={chat.name}
                                message={chat.message}
                                avatarUrl={chat.avatarUrl}
                                whenTexted={chat.whenTexted}
                                id={index}
                            />
                        </>
                    )
                }
            )}</ul>

            <div className={blendClasses} id="chatsBlender"></div>
        </>
        )
    }
}