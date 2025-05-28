import Main from "./pages/AuthScreen/Main";
import Logo from "./pages/AuthScreen/Logo.tsx";

export default function AppAuth() {

    // Classes variables.
    const mainClasses = `relative h-screen w-full flex justify-center items-center
    bg-linear-45 from-primary to-secondary to-75%`;

    return (
        <main className={mainClasses}>
            <Logo />
            <Main />
        </main>
    )
}