import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/headers/Header";
import { Navbar } from "./components/Navbar";
import { Partners } from "./components/Partners";
import { OurTaste } from "./components/OurTaste";
import { Cards } from "./components/cards/Cards.js";
import { ContactForm } from "./components/contactForm/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Partners />
      <About />
      <OurTaste />

      <Cards />
      <ContactForm />
    </>
  );
}

export default App;
