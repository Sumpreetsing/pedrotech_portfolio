import { useState } from "react"
import "./App.css"
import { Loadingscreen } from "./components/Loadingscreen"
import "./index.css"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  const [isLoaded,setIsloaded]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={()=>setIsloaded(true)}/>}{""}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}
        bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About/>
          <Projects/>
          <Contact/>
        </div>
    </>
  )
}

export default App
