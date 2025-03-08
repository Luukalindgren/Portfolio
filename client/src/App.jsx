import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

// TODO:
// - Add prevention for empty fields in contact form (ex. email field gives error when in wrong format, but not when empty)
// - Make SEO better, so that it shows up on google search (ex. "Luuka Lindgren" search should show this page)
// - Refine GitHub repo, finish README.md etc.
// - Make sure that domain works properly, (luuka.software and www.luuka.software)
// - Add dark mode
// - Add comments to code
// - Add some animations or other fancy stuff, but keep it simple
//
// - Write short text to "About Me"
// - Add drawer, or similar component for projects that opens up and displays all details about the project, include things what you did and learned etc.
// - Add second link to the "ProjectItem" component that opens the actual website
// - Add Capstone Spåtalytics project to "Other Projects"

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
