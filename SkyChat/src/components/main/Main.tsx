import { useState } from "react"
import type { JSX } from "react"
import Header from "./Header"
import users from "./users.ts"
import defaultPhoto from "../../assets/images/Person.png"

interface User {
    name: string,
    message: string,
    avatarUrl?: string,
    whenTexted: number,
    id: number
}

export default function Main() {

    const [newChats, setNewChats] = useState<Array<User>>([])
    const [oldChats, setOldChats] = useState<Array<User>>([])

    // Adding users into arrays
    if (users.length > 0 && newChats.length <= 0) {
        const newChatsTemp: Array<User> = []
        const oldChatsTemp: Array<User> = []

        for (let i: number = 0; i < users.length; i++) {
            if (i > 2) {
                oldChatsTemp.push(users[i])
            } else {
                newChatsTemp.push(users[i])
            }

        }

        setNewChats(newChatsTemp)
        setOldChats(oldChatsTemp)
    }

    // Provides text if there are or are not chats
    function newChatsBlock(): JSX.Element {
        if (newChats.length <= 0) {
            return <h2>You have no chats! Consider adding someone ;)</h2>
        } else {
            return <ul>{

                newChats.map(chat => {
                    // Chooses either a default or custom profile photo
                    const imgUrl: string = chat.avatarUrl 
                        ? chat.avatarUrl
                        : defaultPhoto

                    return (<li key={chat.id}>

                        <span>{chat.name}</span>
                        <p>{chat.message}</p>
                        <figure>
                            <img src={imgUrl} alt="Profile Photo" />
                        </figure>
                        <span>{chat.whenTexted} min</span>

                    </li>)
                })}

            </ul>
        }
    }

    // Provides oldest chats from the oldChats array
    function oldChatsBlock(): JSX.Element | null {
        if (oldChats.length > 0) {
            return (
                <>
                <div className="font-primary">Oldest</div>

                <section>
                    <ul>
                        {oldChats.map(chat => {

                            // Chooses either a default or custom profile photo
                            const imgUrl: string = chat.avatarUrl 
                            ? chat.avatarUrl
                            : defaultPhoto

                            return (<li key={chat.id}>
                                <span>{chat.name}</span>
                                <p>{chat.message}</p>
                                <figure>
                                    <img src={imgUrl} alt="Profile Photo" />
                                </figure>
                                <span>{chat.whenTexted} min</span>
                            </li>)

                        })}
                    </ul>
                </section>
                </>
            )
        } else return null
    }

    return (
        <main className="font-secondary font-normal">

            <Header />

            <section>
                {newChatsBlock()}
            </section>

            {oldChatsBlock()}

        </main>
    )
}
