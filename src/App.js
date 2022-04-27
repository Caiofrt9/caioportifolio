import MainArea from './Components/MainArea'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portifolio from './Components/Portifolio/Portifolio'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <MainArea />
      <Nav />
      <About />
      <Experience />
      <Portifolio />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
