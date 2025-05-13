import type { ReactNode } from "react"
import Chats from "../../components/Chats"
import users from "../../utils/users"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {

    return (
        <main className="font-secondary font-normal w-full px-30.25 pt-15 bg-white relative">

            {children}

            <Chats users={users} />

        </main>
    )
}
