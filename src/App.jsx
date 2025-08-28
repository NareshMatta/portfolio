import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import BackgroundAnimation from './components/BackgroundAnimation';
import './App.css'

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>

)
}

export default App
