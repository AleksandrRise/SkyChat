import Main from "./pages/HomeScreen/Main"
import Aside from "./pages/HomeScreen/Aside"
import Header from "./pages/HomeScreen/Header"

function App() {
  return (
    <section className="flex w-full h-screen overflow-hidden text-textColor">
      
      <Aside />

      <Main>
        <Header />
      </Main>
      
    </section>
  )
}

export default App
