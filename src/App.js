import React, {useState} from 'react';

import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Project from './components/Project'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'

import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState("about")
  function RenderComponent() {
    switch(currentPage) {
      case "about":
        return <AboutMe />
      case "project":
        return <Project />
      case "contact":
        return <ContactForm />
      case "resume":
        return <Resume />
      default:
        return ""
    }
  }
  return (
    <div>
  <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
  <RenderComponent />
  <Footer />
    </div>
  )
}

export default App;
