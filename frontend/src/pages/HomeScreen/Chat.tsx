import { useEffect, useState } from "react";
import defaultPhoto from "../../assets/images/Person.png";
import sendBtn from "../../assets/images/chat/sendBtn.png";
import users from "../../utils/users";
import { over, Client } from "stompjs";
import type { Message } from "stompjs";
import SockJS from "sockjs-client";

type ChatProps = {
    chatClickedId: number;
}
type messagesType = {
    avatarUrl?: string,
    text: string,
    isMe: boolean
}

var stompClient: Client;
export default function Chat({ chatClickedId }: ChatProps) {

    // TEMPORARY
    type payloadDataType = {
        status: "JOIN" | "MESSAGE";
        senderName: string;
        text: string;
    }

    const [publicChats, setPublicChats] = useState<payloadDataType[]>([]);
    const [privateChats, setPrivateChats] = useState(new Map());
    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: false,
        message: ""
    })

    const onConnected = () => {
        setUserData({...userData, "connected":true});
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
        stompClient.subscribe(`/user/${userData.username}/private`, onPrivateMessageReceived);
    }

    const onPublicMessageReceived = (payload: Message) => {
        let payloadData: payloadDataType = JSON.parse(payload.body);
        switch(payloadData.status) {
            case "JOIN":
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats])
                break;
        }
    }

    const onPrivateMessageReceived = (payload: Message) => {
        let payloadData: payloadDataType = JSON.parse(payload.body);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);

            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err: unknown) => {
        console.error(err);
    }

    let Sock = new SockJS("http://localhost:8080/ws")
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError); 
    


    // States.
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<Array<messagesType>>([]);

    // Every time chatClickedId changes, shows new set of messages.
    useEffect(() => {
        const messagesToInsert = [...users[chatClickedId].messages];
        setMessages(messagesToInsert);
    }, [chatClickedId])

    // Sends a message and stores into a database.
    function messageSender(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const template = {text: input, isMe: true};

        setMessages(prev => {
            const newMessages = [template, ...prev];

            users[chatClickedId].messages = newMessages;
            return newMessages;
        });

        users[chatClickedId].messages = messages;
    }

    type determinePhotoType = {
        avatarUrl?: string;
        text: string;
        isMe: boolean;
    }

    // Checks if there is a url to a user's profile photo.
    function determinePhoto(message: determinePhotoType) {
        return (
            message.avatarUrl
            ? message.avatarUrl
            : defaultPhoto
        )
    }

    // Classes variables.
    const chatClasses = `bg-gradient-to-tl from-25% from-bg-accent dark:from-primary-dark 
        transition-all to-secondary dark:to-secondary-dark border-l-1 border-black/10 
        dark:border-white/10 h-full float-end flex-5 py-12 px-16 flex flex-col`;
    const headClasses = `text-4xl font-primary text-center border-b-3 border-black/20 
        dark:border-white/20 pb-5`
    const ulClasses = `overflow-y-auto flex flex-col-reverse gap-10 pl-1 pb-2
        border-b-2 border-black/20 h-full`
    const liClasses = "flex items-center text-xl last:mt-5 first:mb-3"
    const formClasses = `bg-primary dark:bg-secondary-dark
        shadow-icons rounded-2xl mt-5 cursor-text relative focus-within:shadow-accent1 
        focus-within:transition focus-within:duration-600 transition-shadow duration-600`
    const sendClasses = `w-10 h-10 cursor-pointer absolute top-5 z-1 hover:before:content-[""]
        hover:before:h-[calc(100%+1rem)] hover:before:w-[calc(100%+1rem)] hover:before:absolute hover:before:-top-2
        hover:before:-left-3 hover:before:bg-white/25 hover:before:-z-1 hover:before:rounded-full
        before:transition-all before:duration-300 before:ease-out`
    const inputClasses = `text-2xl border-none outline-none w-9/10 py-6.5 px-9 text-black dark:text-white`
    const photoClasses = "w-17.5 h-17.5 bg-primary dark:bg-bg-dark rounded-2xl shadow-icons"
    const messageClasses = `px-6.5 py-3.75 rounded-3xl bg-primary dark:bg-bg-dark shadow-icons mx-7.75
        max-w-9/12 text-wrap`


    // Make a signup/login page using routing.
    // Initialize Spring Boot web project with a database and spring security.

    return (
        <section className={chatClasses}>
            <header className={headClasses}>{users[chatClickedId].name}</header>

            <ul id="chatList" className={ulClasses}>
                {messages.map((message) => {

                    // Chooses either a default or custom profile photo.
                    const avatar: string = determinePhoto(message)

                    return (
                        <li className={liClasses}>
                            <figure className={photoClasses}>
                                <img src={avatar} alt="Profile Photo" />
                            </figure>
                            <p className={messageClasses}>
                                {message.text}
                            </p>
                            {message.isMe ? <span className="opacity-25">Me</span> : null}
                        </li>
                    )
                })}
            </ul>

            <form className={formClasses} onSubmit={(e) => messageSender(e)}>
                <input type="text" className={inputClasses} placeholder="Type a message..."
                    onChange={e => setInput(e.currentTarget.value)}/>
                <button type="submit" className={sendClasses}>
                    <figure>
                        <img src={sendBtn} alt="!Send a Message!" />
                    </figure>
                </button>
            </form>
            
        </section>
    )
}