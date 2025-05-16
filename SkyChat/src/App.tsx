import Main from "./pages/HomeScreen/Main"
import Aside from "./pages/HomeScreen/Aside"
import Header from "./pages/HomeScreen/Header"
import Chat from "./pages/HomeScreen/Chat"

function App() {
  return (
    <section className="flex w-full h-screen overflow-hidden text-textColor">
      
      <Aside />

      <Main>
        <Header />
      </Main>

      <Chat />

    </section>
  )
}

export default App
