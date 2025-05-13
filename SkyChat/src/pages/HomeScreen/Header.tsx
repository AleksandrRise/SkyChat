// Returns a component with an Add User Button and Messages title
export default function Header() {
    return <header className="pb-15 border-b-3 border-black/25 relative">
        <button className="w-15 h-15 bg-transparent rounded-2xl absolute
        border-5 border-accent2 shadow-lg transition-all addBtnProps
        left-18 top-0"></button> 
        <h1 className="font-primary text-6xl text-center tracking-wide">Messages</h1>
    </header>
}