import defaultPhoto from "../../assets/images/Person.png"
import sendBtn from "../../assets/images/chat/sendBtn.png"

export default function Chat() {

    const messages = [
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "“Something discussing”", isMe: true},
        {avatarUrl: defaultPhoto, text: "Yeah... that was very exciting!", isMe: false},
        {avatarUrl: defaultPhoto, text: "Especially that moment when we went to the top of the mountain. Oh yeah!!!", isMe: true},
        {avatarUrl: defaultPhoto, text: "Precisely, that was insanely cool!", isMe: false},
        {avatarUrl: defaultPhoto, text: "Alright, see ya!", isMe: true},
        {avatarUrl: defaultPhoto, text: "It was a pleasure to talk to you!", isMe: true},
    ]

    const chatClasses = `bg-gradient-to-tl from-25% from-bg-accent dark:from-primary-dark 
        transition-all to-secondary dark:to-secondary-dark border-l-1 border-black/10 
        dark:border-white/10 h-full float-end flex-5 py-12 px-16 flex flex-col`;

    const headClasses = `text-4xl font-primary text-center border-b-3 border-black/20 
        dark:border-white/20 pb-5`

    // Add snap so scroll could start at the end.
    // Add a border on the bottom when scrolling. When not, it doesn't show up.
    // Add animation for input when focused.
    // Add max-width for text
    // Add dark theme
    
    const ulClasses = "overflow-y-auto flex flex-col gap-10 pl-1 pb-2"
    const liClasses = "flex items-center text-xl first:mt-5"
    const divClasses = `mt-auto bg-primary dark:bg-secondary-dark py-6.5 px-9 
    shadow-icons rounded-2xl flex w-full mt-13.75 cursor-text`

    const sendClasses = `w-10 h-10 ml-auto cursor-pointer relative z-1 hover:before:content-[""]
        hover:before:h-[calc(100%+1rem)] hover:before:w-[calc(100%+1rem)] hover:before:absolute hover:before:-top-2
        hover:before:-left-3 hover:before:bg-white/25 hover:before:-z-1 hover:before:rounded-full
        before:transition-all before:duration-300 before:ease-out`

    const inputClasses = `text-2xl my-auto border-none outline-none w-9/10`
    const photoClasses = "w-17.5 h-17.5 bg-primary dark:bg-bg-dark rounded-2xl shadow-icons"
    const messageClasses = `px-6.5 py-3.75 rounded-3xl bg-primary dark:bg-bg-dark shadow-icons mx-7.75
        max-w-3/4`

    return (
        <section className={chatClasses}>
            <header className={headClasses}>Aleksandr Ershov</header>

            <ul className={ulClasses}>
                {messages.map((message) => (
                    <li className={liClasses}>
                        <figure className={photoClasses}>
                            <img src={message.avatarUrl} alt="Profile Photo" />
                        </figure>
                        <p className={messageClasses}>
                            {message.text}
                        </p>
                        <span className="opacity-25">
                            {message.isMe ? "Me" : null}
                        </span>
                    </li>
                ))}
            </ul>

            <label htmlFor="mesType" className={divClasses}>
                <input id="mesType" className={inputClasses} placeholder="Type a message..."/>
                <button className={sendClasses}>
                    <figure>
                        <img src={sendBtn} alt="!Click to Send a Message!" />
                    </figure>
                </button>
            </label>
            
        </section>
    )
}