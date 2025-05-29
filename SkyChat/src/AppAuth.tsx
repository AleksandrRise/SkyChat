import SignUp from "./pages/AuthScreen/SignUp";
import SignIn from "./pages/AuthScreen/SignIn";
import Logo from "./pages/AuthScreen/Logo.tsx";
import { useState } from "react";

export default function AppAuth() {

    // States.
    const [isSignUp, setIsSignUp] = useState(true);

    // Classes variables.
    const mainClasses = `relative h-screen w-full flex justify-center items-center
    bg-linear-45 from-primary to-secondary to-75%`;

    return (
        <main className={mainClasses}>
            <Logo />
            {isSignUp 
                ? <SignUp setIsSignUp={setIsSignUp} /> 
                : <SignIn setIsSignUp={setIsSignUp} />}
        </main>
    )
}