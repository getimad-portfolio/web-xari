import {
  HomeSection,
  AboutSection,
  TestimonialsSection,
  PromoVideoSection,
  TeamSection,
  NewsMediaSection,
  ContactSection,
  FooterSection,
} from "./sections";
import { NavBar, ScrollUpBtn } from "./components";
import "./index.css";
import { LightEffect } from "./effects";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <HomeSection />
      </header>
      <main>
        <AboutSection />
        <TestimonialsSection />
        <PromoVideoSection />
        <TeamSection />
        <NewsMediaSection />
        <ContactSection />
        <FooterSection />
      </main>
      <ScrollUpBtn />
      <LightEffect />
    </>
  );
}

export default App;
