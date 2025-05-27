import defaultPhoto from "../../assets/images/Person.png"

type ProfileButtonProps = {
    onClick: () => void;
}

export default function ProfileButton({ onClick }: ProfileButtonProps) {

    // Classes variables
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