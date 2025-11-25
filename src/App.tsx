import Content from "./components/organisms/Content"
import ControlCenter from "./components/organisms/ControlCenter"
import Navbar from "./components/organisms/Navbar"
import Variables from "./components/organisms/Variables"

function App() {

  return (
    <>
      <Navbar />

      <div className="flex w-full h-[calc(100vh-85px)]">
        <ControlCenter />

        <Content />

        <Variables />
      </div>
    </>
  )
}

export default App
