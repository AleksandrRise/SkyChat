import Main from "./pages/HomeScreen/Main"
import Aside from "./pages/HomeScreen/Aside"
import Header from "./pages/HomeScreen/Header"
import Chat from "./pages/HomeScreen/Chat"
import Chats from "./components/Chats"
import users from "./utils/users"
import React, { useEffect } from "react"

type ActiveContext = {
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>> 
}
export const ActiveContext = React.createContext<ActiveContext>({
  isActive: false,
  setIsActive: () => {console.error("The default ActiveContext was invoked!")}
});

export default function App() {

  const [isActive, setIsActive] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  // Checks what theme is stored in a local storage.
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const wrapperClasses = `flex w-full h-screen overflow-hidden text-textColor
    dark:text-white`

  return (
    <section className={wrapperClasses} data-theme={isDark ? "dark" : "light"}>
      
      <Aside isDark={isDark} setIsDark={setIsDark}/>

      <ActiveContext.Provider value={{isActive, setIsActive}}>
        <Main>
          <Header />
          <Chats users={users} /> 
        </Main>

        {isActive ? <Chat /> : null}
      </ActiveContext.Provider>

    </section>
  )
}
