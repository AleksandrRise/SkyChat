import SignUp from "./pages/AuthScreen/SignUp";
import SignIn from "./pages/AuthScreen/SignIn";
import Logo from "./pages/AuthScreen/Logo.tsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AppAuth() {

    // States.
    const [isSignUp, setIsSignUp] = useState(false);

    const navigate = useNavigate();

    // Doesn't allow user enter the auth page if he is logged in.
    useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
        navigate("/");
    }
    })

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