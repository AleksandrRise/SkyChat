import defaultPhoto from "../../assets/images/Person.png"
import sendBtn from "../../assets/images/chat/sendBtn.png"

export default function Chat() {

    const chatClasses = `bg-gradient-to-tl from-25% from-bg-accent 
        transition-all to-secondary border-l-1 border-black/10 h-full float-end
        flex-6`;

    const messages = [
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "Yeah... that was very exciting!", isMe: false},
        {avatarUrl: defaultPhoto, text: "Especially that moment when we went to the top of the mountain. Oh yeah!!!", isMe: true},
        {avatarUrl: defaultPhoto, text: "Precisely, that was insanely cool!", isMe: false},
        {avatarUrl: defaultPhoto, text: "Alright, see ya!", isMe: true},
        {avatarUrl: defaultPhoto, text: "It was a pleasure to talk to you!", isMe: true},
    ]

    return (
        <section className={chatClasses}>
            <h3>Aleksandr Ershov</h3>

            <ul>
                {messages.map((message) => (
                    <li>
                        <figure>
                            <img src={message.avatarUrl} alt="Profile Photo" />
                        </figure>
                        <p>
                            {message.text}
                        </p>
                        <span>
                            {message.isMe ? "Me" : null}
                        </span>
                    </li>
                ))}
            </ul>

            <div>
                <input type="text" placeholder="Type a message..." />
                <button>
                    <figure>
                        <img src={sendBtn} alt="!Click to Send a Message!" />
                    </figure>
                </button>
            </div>
            
        </section>
    )
}