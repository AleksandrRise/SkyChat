import type { MouseEvent, Dispatch, SetStateAction } from "react"
import { useContext } from "react"
import { ActiveContext }  from "../App"
import defaultPhoto from "../assets/images/Person.png";

type Message = {
    text: string;
    isMe: boolean;
}

type ChatElementProps = {
    name: string;
    messages: Array<Message>;
    avatarUrl?: string;
    whenTexted: number;
    id?: number;
    setChatClickedId: Dispatch<SetStateAction<number>>;
}

// Returns one chat with a certain user
export default function ChatElement({ name, messages, avatarUrl, 
                                    whenTexted, id, setChatClickedId }: ChatElementProps) {

    // Chooses either a default or custom profile photo.
    const imgUrl: string = avatarUrl
    ? avatarUrl
    : defaultPhoto

    // Contexts.
    const {isActive, setIsActive} = useContext(ActiveContext);

    // Classes variables.
    const liClasses = `w-11/12 mx-auto mt-5 first:mt-12 flex cursor-pointer last:mb-80
        hover:shadow-icons py-7 px-4.25 transition dark:hover:shadow-icons-dark`;
    const figClasses = `w-25 h-25 bg-gray rounded-3xl flex justify-center 
        items-center shrink-0 shadow-icons`;
    const imgClasses = `w-fit h-fit`;
    const divClasses = `ml-9 flex flex-col justify-center max-w-7/12`;
    const spanClasses = `text-3xl font-regular truncate max-w-9/10`;
    const pClassesConditional = isActive ? "max-w-8/10" : "max-w-11/12"
    const pClasses = `text-xl opacity-50 mt-2.25 truncate ${pClassesConditional}`;
    const timeClasses = `ml-auto text-2xl opacity-25 my-auto`;

    // Handles a click on a chat from the home page.
    function handleOneClick(e: MouseEvent<Element>) {
        if (!isActive) {
            setIsActive(prev => !prev);
        }
        setChatClickedId(Number(e.currentTarget.id));
    }

    return (
        <li key={id} id={`${id}`} className={liClasses} onClick={(e) => handleOneClick(e)}>
            <figure className={figClasses}>
                <img className={imgClasses} src={imgUrl} alt="Profile Photo" />
            </figure>
            <div className={divClasses}>
                <span className={spanClasses}>{name}</span>
                <p className={pClasses}>{messages[0].text}</p>
            </div>
            <time className={timeClasses}>{whenTexted} min</time>
        </li>
    )
}