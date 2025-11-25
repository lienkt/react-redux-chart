import Content from "./components/organisms/Content"
import ControlCenter from "./components/organisms/ControlCenter"
import Navbar from "./components/organisms/Navbar"
import Variables from "./components/organisms/Variables"

function App() {

  return (
    <>
      <Navbar />

      <div className="flex w-full h-[100vh]">
        <ControlCenter />

        <Content />

        <Variables />
      </div>
    </>
  )
}

export default App
