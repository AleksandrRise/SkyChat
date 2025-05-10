import personImg from "../../assets/Person.png"
import bgImg from "../../assets/aside/Landscape.png"
import moonImg from "../../assets/aside/Moon Symbol.png"
import nameImg from "../../assets/aside/Name Tag.png"
import defaultPhoto from "../../assets/Person.png"

const buttonImgs: Array<string> = [moonImg, bgImg, nameImg]

export default function Aside() {
    return <aside>
        <button id="aside__profile">
            <figure>
                <img src={defaultPhoto} alt="Profile Photo" />
            </figure>
        </button>
        {buttonImgs.map(image => 
            <button><img src={image} /></button>
        )}
    </aside>
}