import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type SignUpProps = {
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setIsSignUp }: SignUpProps) {

    const navigate = useNavigate();

    // States
    const [ errorVisible, setErrorVisible ] = useState<boolean>();

    // Functions
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData); // Taking all the entries from the form.

        axios.get(`http://localhost:8080/api/v1/users/email/${data.email}`)
            .then((res) => {
                if (res.data.password === data.password) {
                    navigate("/")
                    localStorage.setItem("isLogged", "true");
                } else {
                    setErrorVisible(true);
                }
            })
    }

    // Classes Variables.
    const formClasses = `py-18.75 px-22 bg-white color-black font-secondary
        shadow-[-4px_4px_4px_rgba(0,0,0,0.25)] rounded-sm`;
    const hClasses = "text-6xl font-primary pb-5.5";
    const pClasses = "text-xl opacity-50 pb-7";
    const innerSpanClasses = `bg-gradient-to-r from-[#59A9FF] via-[#AAD3FF] via-70% 
        to-[#59A9FF] bg-clip-text text-transparent`;
    const titleSectionClasses = `text-center pb-16.5`;
    const borderClasses = `bg-linear-to-r from-transparent via-black to-transparent
        h-0.75 w-full opacity-75`;
    const inputsSectionClasses = `pb-21 flex flex-col gap-12`;
    const inputClasses = `relative outline-none w-full text-xl placeholder-black/25
        borderForInput p-3.5`;
    const submissionClasses = `relative flex justify-center`
    const signinBtnClasses = `text-lg cursor-pointer underline text-[#4FA4FF]
        pb-3`;
    const doneClasses = `text-xl px-8.5 py-3 bg-accent1 rounded-xl cursor-pointer
        font-semibold tracking-wider absolute bottom-0 right-0 shadow-donebtn
        hover:scale-105 duration-500 hover:duration-200 active:opacity-80
        active:duration-0`;
    const errorClasses = `text-error`;

    const inputs = [
        {type: "email", placeholder:"Your Email", name: "email"},
        {type: "password", placeholder:"Your Password", name: "password"}
    ]

    return (
        <form className={formClasses} onSubmit={handleSubmit}>
            <section className={titleSectionClasses}>
                <h1 className={hClasses}>Log Into <span className={innerSpanClasses}>Account</span></h1>
                <p className={pClasses}>Type the required data to enter the chat</p>
                <div className={borderClasses}></div>
            </section>

            {errorVisible && <span className={errorClasses}>Wrong email/password.</span>}

            <section className={inputsSectionClasses}>
                {inputs.map(({ type, placeholder, name }) => {
                    return (
                        <input type={type} placeholder={placeholder} name={name} className={inputClasses}></input>
                    )
                })}
            </section>

            <section className={submissionClasses}>
                <button className={signinBtnClasses} onClick={() => setIsSignUp(true)}>Sign Up</button>
                <input type="submit" value="Done!" className={doneClasses} />
            </section>
        </form>
    )

}