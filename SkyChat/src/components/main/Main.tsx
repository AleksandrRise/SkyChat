import { useState } from "react"
import Header from "./Header"

interface User {
    name: string,
    message: string,
    avatarUrl?: string
}

export default function Main() {
    const [chats, setChats] = useState<Array<User>>([])

    return (
    <main>
        <Header />

        <section>
            {chats.length === 0 
            ? (<h2>You have no chats! Consider adding someone ;)</h2>)
            : <ul>
                {chats.map(chat => {
                    return (<li>
                        <span>{chat.name}</span>
                        <p>{chat.message}</p>
                    </li>)
                })}
            </ul>
        }
        </section>

        <section>

        </section>
    </main>
    )
}
