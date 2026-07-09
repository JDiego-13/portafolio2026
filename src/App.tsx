import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer" 
import CursorGlow from "./components/CursorGlow"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <CursorGlow/>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  )
}

export default App
