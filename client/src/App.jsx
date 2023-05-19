import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

// TODO:
// - Add self portrait and some animated circle around it
// - Add section for skills, education, and other stuff about me
// - Change domain to luuka.software (take it from kisakalenteri project)
// - Make repetetive Tailwind classes into components
// - Make contact form work, maybe change it to email link
// - Add dark mode
// - Publish page on Azure or GitHub pages


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
