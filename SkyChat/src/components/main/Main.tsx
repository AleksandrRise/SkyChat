import { useState } from "react"

interface User {
    name: string,
    message: string,
    avatarUrl: string
}

export default function Main() {
    const [chats, setChats] = useState<Array<User>>([])

    return (
    <main>
        <header>
            <button id="header__addUser"></button>
            <h1 id="header__title">Messages</h1>
        </header>

        <section>
            {chats.length === 0 
            ? (<h2>You have no chats! Consider adding someone ;)</h2>)
            : <ul></ul>
        }
        </section>

        <section>

        </section>
    </main>
    )
}
