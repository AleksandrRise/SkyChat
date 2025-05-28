import Main from "./pages/AuthScreen/Main";
import Logo from "./pages/AuthScreen/Logo.tsx";

export default function AppAuth() {

    // Classes variables.
    const mainClasses = "relative h-screen w-full flex justify-center items-center";

    return (
        <main className={mainClasses}>
            <Logo />
            <Main />
        </main>
    )
}