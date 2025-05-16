import type { ReactNode } from "react"
import Chats from "../../components/Chats"
import users from "../../utils/users"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {

    return (
        <main className="font-secondary font-normal w-full px-7.25 xl:px-30 pt-15 bgwhite relative">

            {children}

            <Chats users={users} />

        </main>
    )
}
