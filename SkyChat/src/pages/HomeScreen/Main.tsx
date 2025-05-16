import type { ReactNode } from "react"
import Chats from "../../components/Chats"
import users from "../../utils/users"

type MainProps = {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    const mainClasses = `font-secondary font-normal w-full px-7.25 xl:px-30 pt-15 
        bgwhite relative`;

    return (
        <main className={mainClasses}>

            {children}

            <Chats users={users} />

        </main>
    )
}
