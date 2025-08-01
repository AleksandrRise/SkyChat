import Main from "./pages/HomeScreen/Main"
import Aside from "./pages/HomeScreen/Aside"
import Chat from "./pages/HomeScreen/Chat"
import users from "./utils/users"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// Context for isActive state.
type ActiveContext = {
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>> 
}
export const ActiveContext = React.createContext<ActiveContext>({
  isActive: false,
  setIsActive: () => {console.error("The default ActiveContext was invoked!")}
});

export default function App() {

  // States.
  const [isActive, setIsActive] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const [chatClickedId, setChatClickedId] = React.useState(-1);

  // Checks what theme is stored in a local storage.
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const navigate = useNavigate();

  // Doesn't allow user enter the main page unless he is logged in.
  useEffect(() => {
    if (localStorage.getItem("isLogged") !== "true") {
      navigate("/auth");
    }
  })

  // Classes variables.
  const wrapperClasses = `flex w-full h-screen overflow-hidden text-textColor
    dark:text-white`

  return (
    <section className={wrapperClasses} data-theme={isDark ? "dark" : "light"}>
      
      <Aside isDark={isDark} setIsDark={setIsDark}/>

      <ActiveContext.Provider value={{isActive, setIsActive}}>
        <Main>
          <Main.Header />
          <Main.Chats users={users} setChatClickedId={setChatClickedId} /> 
        </Main>

        {isActive ? <Chat chatClickedId={chatClickedId}/> : null}
      </ActiveContext.Provider>

    </section>
  )
}
