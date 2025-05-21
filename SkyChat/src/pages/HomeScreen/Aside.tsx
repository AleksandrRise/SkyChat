import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import defaultPhoto from "../../assets/images/Person.png"
import { useState } from "react"

type IconButtonProps = {
    src: string;
    alt: string;
    offset?: string;
}

function IconButton({ src, alt, offset = "" }: IconButtonProps) {
    const baseClasses = `bg-primary dark:bg-bg-dark shadow-icons flex justify-center items-center cursor-pointer
        hover:scale-110 transition-transform duration-300 w-12.5 h-12.5 rounded-full 
        active:opacity-50 mb-3 absolute`;
    const imgClasses = "w-11 h-11 mt-1";
    return (
        <button className={`${baseClasses} ${offset}`}>
            <img src={src} alt={alt} className={imgClasses} />
        </button>
    );
}

type ProfileButtonProps = {
    onClick: () => void;
}

function ProfileButton({ onClick }: ProfileButtonProps) {
    const buttonClasses = `bg-primary dark:bg-bg-dark shadow-icons flex justify-center items-center cursor-pointer
        hover:scale-110 transition-transform duration-300 w-22.5 h-22.5 rounded-2xl 
        active:scale-105 active:duration-100 z-1`;
    const figClasses = `z-2`;
    return (
        <button id="aside__profile" className={buttonClasses} onClick={onClick}>
            <figure className={figClasses}>
                <img src={defaultPhoto} alt="Profile Photo" />
            </figure>
        </button>
    )
}

export default function Aside() {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded(prev => !prev);

    const iconButtons = [
        {src: nameImg, alt: "Name Icon", offset: "-translate-y-62.5"},
        {src: bgImg, alt: "Background Icon", offset: "-translate-y-45"},
        {src: moonImg, alt: "Moon Icon", offset: "-translate-y-27.5"},
    ];
    const asideClasses = `w-45 bg-gradient-to-t from-primary to-secondary border-r-1 border-black/10
        dark:from-primary-dark dark:to-secondary-dark dark:border-accent-dark/10`;
    const divClasses = `mx-auto h-full flex flex-col justify-end items-center pb-17.5 relative`;

    return (
        <aside className={asideClasses}>
            <div className={divClasses}>
                
                {iconButtons.map(({src, alt, offset}, index) => (
                    <IconButton
                        key={index}
                        src={src}
                        alt={alt}
                        offset={isExpanded ? offset : ""}
                    />
                ))}
                <ProfileButton onClick={handleToggle} />

            </div>
        </aside>
    );
}