import MainArea from './Components/MainArea'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className="App">
      <MainArea />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
    </div>
  )
}

export default App
