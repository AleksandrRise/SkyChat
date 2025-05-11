import Main from "./main/Main"
import Aside from "./aside/Aside"

function App() {
  return (
    <section className="flex w-full h-screen overflow-hidden">
      <Aside />
      <Main />
    </section>
  )
}

export default App
