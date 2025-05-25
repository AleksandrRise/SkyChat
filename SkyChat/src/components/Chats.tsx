import { useState } from "react";
import defaultPhoto from "../assets/images/Person.png";
import type { User } from "../utils/User";
import type { MouseEvent } from "react"
import { useContext } from "react"
import { ActiveContext }  from "../App"

// Returns one chat with a certain user
function ChatElement({ name, messages, avatarUrl = "", whenTexted, id }: User) {

    // Chooses either a default or custom profile photo
    const imgUrl: string = avatarUrl
    ? avatarUrl
    : defaultPhoto

    const {isActive, setIsActive} = useContext(ActiveContext);

    const liClasses = `w-11/12 mx-auto mt-5 first:mt-12 flex cursor-pointer last:mb-80
        hover:shadow-icons py-7 px-4.25 transition dark:hover:shadow-icons-dark`;

    const figClasses = `w-25 h-25 bg-gray rounded-3xl flex justify-center 
        items-center shrink-0 shadow-icons`;

    const imgClasses = `w-fit h-fit`;
    const divClasses = `ml-9 flex flex-col justify-center max-w-7/12`;
    const spanClasses = `text-3xl font-regular truncate max-w-9/10`;

    const pClassesConditional = isActive ? "max-w-8/10" : "max-w-11/12"
    const pClasses = `text-xl opacity-50 mt-2.25 truncate ${pClassesConditional}`;

    const timeClasses = `ml-auto text-2xl opacity-25 my-auto`;

    function handleClick(e: MouseEvent<Element>) {
        setIsActive(prev => !prev);
    }

    return (
        <li key={id} id={`${id}`} className={liClasses} onClick={(e) => handleClick(e)}>
            <figure className={figClasses}>
                <img className={imgClasses} src={imgUrl} alt="Profile Photo" />
            </figure>
            <div className={divClasses}>
                <span className={spanClasses}>{name}</span>
                <p className={pClasses}>{messages[messages.length-1].text}</p>
            </div>
            <time className={timeClasses}>{whenTexted} min</time>
        </li>
    )
}

type ChatsProps = {
    chats: Array<User>;
}

function ChatsList({ chats }: ChatsProps) {
    const ulClasses = `overflow-y-auto overflow-x-hidden no-scrollbar h-full 
    max-w-375 block [&>*:nth-child(5)]:mt-0`;
    const chatsDivClasses = `font-primary text-3xl tracking-widest 
    my-14 relative oldestDivider text-center opacity-90`;

    return (
        <ul className={ulClasses}>{
            // Taking out each chat and storing it inside a list
            chats.map((chat, index) => {
                // If there are more than 3 chats, we add a division
                return (
                    <>
                        {index === 3 && <div className={chatsDivClasses}>Oldest</div>}
                        <ChatElement 
                            name={chat.name}
                            messages={chat.messages}
                            avatarUrl={chat.avatarUrl}
                            whenTexted={chat.whenTexted}
                            id={index}
                        />
                    </>
                )
            }
        )}</ul>
    )
}

type UsersProps = {
    users: Array<User>;
}

export default function Chats({ users }: UsersProps) {
    const [chats, setChats] =  useState<Array<User>>(users);

    const hClasses = `text-center mt-70 text-xl`;
    const blendClasses = `absolute bottom-0 left-0 bg-gradient-to-t 
        from-15% from-white to-transparent h-30 w-full dark:from-bg-dark
        dark:to-transparent`;

    if (chats.length <= 0) {
        return (
            <h2 className={hClasses}>You have no chats! Consider adding someone ;)</h2>
        )
    }

    return (
        <>
            <ChatsList chats={chats} />
            <div className={blendClasses} id="chatsBlender"></div>
        </>
    )
}