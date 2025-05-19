import type { ReactNode } from "react"
import { useContext } from "react"
import { ActiveContext } from "../../App"

type MainProps = {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    const {isActive} = useContext(ActiveContext) // If Chat block is active

    const mainClassesConditional = isActive ? "px-3 xl:px-7 w-1/3" : "px-7.25 xl:px-30 w-full"
    const mainClasses = `${mainClassesConditional} font-secondary font-normal 
    block pt-15 bg-white relative flex-4 dark:bg-bg-dark`;

    return (
        <main className={mainClasses}>

            {children}

        </main>
    )
}
