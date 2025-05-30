import bgImg from "../../assets/images/aside/Landscape.png"
import moonImg from "../../assets/images/aside/Moon Symbol.png"
import sunIcon from "../../assets/images/aside/sunicon.png"
import nameImg from "../../assets/images/aside/Name Tag.png"
import IconButton from "../../components/Home/IconButton"
import ProfileButton from "../../components/Home/ProfileButton"
import { useState } from "react"

type ThemeProps = {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

// Switches website's theme (dark or light).
function switchTheme(themeState: ThemeProps) {
    if (themeState.isDark) {
        themeState.setIsDark(false);
        localStorage.setItem("theme", "light");
    } else {
        themeState.setIsDark(true);
        localStorage.setItem("theme", "dark");
    }
}

export default function Aside(themeState: ThemeProps) {

    // States.
    const [isExpanded, setIsExpanded] = useState(false);

    // Shows more functional icons.
    const handleToggle = () => setIsExpanded(prev => !prev);

    // Array of attributes and properties for each Icon Button.
    const iconButtons = [
        {src: nameImg, alt: "Name Icon", offset: "-translate-y-62.5", onClick: () => {}},
        {src: bgImg, alt: "Background Icon", offset: "-translate-y-45", onClick: () => {}},
        {src: (themeState.isDark ? sunIcon : moonImg), alt: "Moon Icon", offset: "-translate-y-27.5", 
            onClick: () => switchTheme(themeState)}
    ];

    // Classes variables.
    const asideClasses = `w-45 bg-gradient-to-t from-primary to-secondary border-r-1 border-black/10
        dark:from-primary-dark dark:to-secondary-dark dark:border-accent-dark/10`;
    const divClasses = `mx-auto h-full flex flex-col justify-end items-center pb-17.5 relative`;

    return (
        <aside className={asideClasses}>
            <div className={divClasses}>
                
                {iconButtons.map(({src, alt, offset, onClick}, index) => (
                    <IconButton
                        key={index}
                        src={src}
                        alt={alt}
                        offset={isExpanded ? offset : ""}
                        onClick={onClick}
                    />
                ))}
                <ProfileButton onClick={handleToggle} />

            </div>
        </aside>
    );
}