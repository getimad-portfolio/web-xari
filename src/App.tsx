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
    </>
  );
}

export default App;
