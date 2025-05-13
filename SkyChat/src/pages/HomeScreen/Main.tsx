import type { ReactNode } from "react"
import Chats from "../../components/Chats"
import users from "../../utils/users"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {

    return (
        <main className="font-secondary font-normal w-full mx-30.25 my-25.5">

            {children}

            <Chats users={users} />

        </main>
    )
}
