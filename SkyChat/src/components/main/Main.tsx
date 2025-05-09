import { useState } from "react"
import Header from "./Header"
import type { JSX } from "react"

interface User {
    name: string,
    message: string,
    avatarUrl?: string,
    whenTexted: number
}

export default function Main() {

    const [newChats, setNewChats] = useState<Array<User>>([])
    const [oldChats, setOldChats] = useState<Array<User>>([])

    // Provides text if there are or are not chats
    function newChatsBlock(): JSX.Element {
        if (newChats.length <= 0) {
            return <h2>You have no chats! Consider adding someone ;)</h2>
        } else {
            return <ul>{

                newChats.map(chat => {
                    return (<li>
                        <span>{chat.name}</span>
                        <p>{chat.message}</p>
                    </li>)
                })}

            </ul>
        }
    }

    // Provides oldest chats from the oldChats array
    function oldChatsBlock(): JSX.Element | null {
        if (oldChatsBlock.length > 0) {
            return (
                <>
                    <div>Oldest</div>

                    <section>
                        <ul>
                            {oldChats.map(chat => {
                                return (<li>
                                    <span>chat.name</span>
                                    <p>{chat.message}</p>
                                </li>)
                            })}
                        </ul>
                    </section>
                </>
            )
        } else return null
    }

    return (
        <main>

            <Header />

            <section>
                {newChatsBlock()}
            </section>

            {oldChatsBlock()}

        </main>
    )
}
