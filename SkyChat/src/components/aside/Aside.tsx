import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import defaultPhoto from "../../assets/images/Person.png"

export default function Aside() {
    return <aside className="
    w-45 h-full flex flex-col justify-end items-center bg-gradient-to-t 
    from-primary to-secondary
    ">

        <button><img src={nameImg} /></button>
        <button><img src={bgImg} /></button>
        <button><img src={moonImg} /></button>
        <button id="aside__profile" className="pb-17.5 pt-8.25">
            <figure>
                <img src={defaultPhoto} alt="Profile Photo" />
            </figure>
        </button>

    </aside>
}