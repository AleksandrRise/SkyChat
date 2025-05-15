import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import defaultPhoto from "../../assets/images/Person.png"
import { useState } from "react"

export default function Aside() {

    const [isShown, setIsShown] = useState(false) 

    const classProps = (type: string): string => {
        const props: string = `bg-primary shadow-icons flex justify-center items-center cursor-pointer
        hover:scale-110 transition-transform duration-300`

        if (type === "profile") {
            return `${props} w-22.5 h-22.5 rounded-2xl active:scale-105 active:duration-100 z-1`
        } 
        return `${props} w-12.5 h-12.5 rounded-full active:opacity-50 mb-3 absolute`
    }

    function showIcons(): void {
        setIsShown(prevShown => !prevShown)
    }

    return <aside className="
        w-45 bg-gradient-to-t 
        from-primary to-secondary border-r-1 border-black/10">

        <div className="mx-auto h-full flex flex-col justify-end items-center pb-17.5 relative">
            <button className={`${classProps("icon")} ${isShown && "-translate-y-62.5"}`}>
                <img src={nameImg} className="w-11 h-11 mt-1"/>
            </button>
            <button className={`${classProps("icon")} ${isShown && "-translate-y-45"}`}>
                <img src={bgImg} className="w-11 h-11 mt-1"/>
            </button>
            <button className={`${classProps("icon")} ${isShown && "-translate-y-27.5"}`}>
                <img src={moonImg} className="w-12 h-12 mt-1"/>
            </button>

            <button id="aside__profile" className={`${classProps("profile")}`} onClick={showIcons}>
                <figure className="z-2">
                    <img src={defaultPhoto} alt="Profile Photo" />
                </figure>
            </button>
        </div>

    </aside>
}