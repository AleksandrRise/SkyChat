import { useState } from "react";
import type { User } from "../../utils/User";
import ChatElement from "../../components/Home/ChatElement";
import type { UsersProps } from "../../utils/UsersProps"

function ChatsList({ users, setChatClickedId}: UsersProps) {

    // Classes Variables.
    const ulClasses = `overflow-y-auto overflow-x-hidden no-scrollbar h-full 
    max-w-375 block [&>*:nth-child(5)]:mt-0`;
    const chatsDivClasses = `font-primary text-3xl tracking-widest 
    my-14 relative oldestDivider text-center opacity-90`;

    return (
        <ul className={ulClasses}>{
            // Taking out each chat and storing it inside a list
            users.map((user, index) => {
                // If there are more than 3 chats, add a division
                return (
                    <>
                        {index === 3 && <div className={chatsDivClasses}>Oldest</div>}
                        <ChatElement 
                            name={user.name}
                            messages={user.messages}
                            avatarUrl={user.avatarUrl}
                            whenTexted={user.whenTexted}
                            id={index}
                            setChatClickedId={setChatClickedId}
                        />
                    </>
                )
            }
        )}</ul>
    )
}

export default function Chats({ users, setChatClickedId}: UsersProps) {

    // States.
    const [usersState, setUsersState] =  useState<Array<User>>(users);

    // Classes variables.
    const hClasses = `text-center mt-70 text-xl`;
    const blendClasses = `absolute bottom-0 left-0 bg-gradient-to-t 
        from-15% from-white to-transparent h-30 w-full dark:from-bg-dark
        dark:to-transparent`;

    // Logic for no chats in a user's account.
    if (usersState.length <= 0) {
        return (
            <h2 className={hClasses}>You have no chats! Consider adding someone ;)</h2>
        )
    }

    return (
        <>
            <ChatsList users={usersState} setChatClickedId={setChatClickedId} />
            <div className={blendClasses} id="chatsBlender"></div>
        </>
    )
}