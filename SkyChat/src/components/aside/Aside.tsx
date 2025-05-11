import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import defaultPhoto from "../../assets/images/Person.png"

const buttonImgs: Array<string> = [moonImg, bgImg, nameImg]

export default function Aside() {
    return <aside className="
    w-45 h-full flex flex-col justify-end items-center bg-gradient-to-t 
    from-primary to-secondary
    ">

        {buttonImgs.map(image => 
            <button><img src={image} /></button>
        )}
        <button id="aside__profile">
            <figure>
                <img src={defaultPhoto} alt="Profile Photo" />
            </figure>
        </button>

    </aside>
}