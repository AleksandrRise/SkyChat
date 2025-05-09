import { useState } from "react"
import Header from "./Header"
import type { JSX } from "react"

interface User {
    name: string,
    message: string,
    avatarUrl?: string,
    whenTexted: string
}

export default function Main() {

    const [chats, setChats] = useState<Array<User>>([])

    // Provides text if there are or are not chats
    function chatsBlock(): JSX.Element {
        if (chats.length <= 0) {
            return <h2>You have no chats! Consider adding someone ;)</h2>
        } else {
            return <ul>{

                chats.map(chat => {
                    return (<li>
                        <span>{chat.name}</span>
                        <p>{chat.message}</p>
                    </li>)
                })}

            </ul>
        }
    }

    return (
        <main>

            <Header />

            <section>
                {chatsBlock()}
            </section>

            <section>

            </section>
        </main>
    )
}
