import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import defaultPhoto from "../../assets/images/Person.png"

export default function Aside() {

    const classProps = (type: string): string => {
        const props: string = `bg-primary shadow-icons flex justify-center items-center`

        if (type === "profile") {
            return `${props} w-22.5 h-22.5 rounded-2xl`
        } 
        return `${props} w-12.5 h-12.5 rounded-full hover:scale-110 transition-transform 
        duration-300 active:opacity-50`
    }

    return <aside className="
        w-45 h-full flex flex-col justify-end items-center bg-gradient-to-t 
        from-primary to-secondary border-r-1 border-black/10">

        <button className={`${classProps("icon")}`}>
            <img src={nameImg} className="w-11 h-11 mt-1"/>
        </button>
        <button className={`${classProps("icon")} my-6.25`}>
            <img src={bgImg} className="w-11 h-11 mt-1"/>
        </button>
        <button className={`${classProps("icon")}`}>
            <img src={moonImg} className="w-12 h-12 mt-1"/>
        </button>
        <button id="aside__profile" className={`mb-17.5 mt-8.25 
            ${classProps("profile")}`}>
            <figure>
                <img src={defaultPhoto} alt="Profile Photo" />
            </figure>
        </button>

    </aside>
}