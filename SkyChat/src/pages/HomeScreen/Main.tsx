import type { ReactNode } from "react"

type MainProps = {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    const mainClasses = `font-secondary font-normal w-full block px-7.25 xl:px-30 pt-15 
        bg-white relative flex-1`;

    return (
        <main className={mainClasses}>

            {children}

        </main>
    )
}
