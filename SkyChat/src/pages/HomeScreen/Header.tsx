// Returns a component with an Add User Button and Messages title
export default function Header() {
    const headerClasses = `pb-15 border-b-3 border-black/25 relative`;
    const btnClasses = `w-15 h-15 bg-transparent rounded-2xl absolute
        border-5 border-accent2 shadow-lg transition-all addBtnProps
        left-18 top-2`;

    const hClasses = `font-primary text-6xl text-center tracking-wide`;

    return <header className={headerClasses}>
        <button className={btnClasses}></button> 
        <h1 className={hClasses}>Messages</h1>
    </header>
}