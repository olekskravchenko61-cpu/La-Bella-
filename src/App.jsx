import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Delivery from "./components/Delivery";
import About from "./components/About";
import OpeningHours from "./components/OpeningHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function DocumentMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = t.meta.description;
  }, [t]);

  return null;
}

function AppContent() {
  return (
    <>
      <DocumentMeta />
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Delivery />
        <About />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
