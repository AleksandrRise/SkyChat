// Returns a component with an Add User Button and Messages title
export default function Header() {

    // Classes variables.
    const headerClasses = `pb-15 border-b-3 border-black/25 relative dark:border-white/25`;
    const btnClasses = `w-15 h-15 bg-transparent rounded-2xl absolute
        border-5 border-accent2 shadow-lg transition-all addBtnProps
        left-23 top-1 dark:before:bg-white dark:after:bg-white`;
    const hClasses = `font-primary text-6xl text-center tracking-wide`;

    return <header className={headerClasses}>
        <button className={btnClasses}></button> 
        <h1 className={hClasses}>Messages</h1>
    </header>
}