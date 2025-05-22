type IconButtonProps = {
    src: string;
    alt: string;
    offset?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function IconButton({ src, alt, offset = "", onClick}: IconButtonProps) {
    const baseClasses = `bg-primary dark:bg-bg-dark shadow-icons flex justify-center items-center cursor-pointer
        hover:scale-110 transition-transform duration-300 w-12.5 h-12.5 rounded-full 
        active:opacity-50 mb-3 absolute`;
    const imgClasses = "w-11 h-11 mt-1";
    return (
        <button className={`${baseClasses} ${offset}`} onClick={onClick}>
            <img src={src} alt={alt} className={imgClasses} />
        </button>
    );
}
