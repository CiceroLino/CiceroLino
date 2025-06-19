import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { useTheme } from "./contexts/ThemeContext";
import { getThemeStyles } from "./utils/styles";

const BackgroundVideo: React.FC = () => (
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      zIndex: -1,
      filter: "brightness(0.3)",
    }}
  >
    <source src="coverr-coding-sequences-9906-1080p.mp4" type="video/mp4" />
  </video>
);

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BackgroundVideo />
      <Navbar onSectionClick={scrollToId} />

      <main
        style={{
          position: "relative",
          color: styles.colors.text,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          paddingTop: "4.5rem",
          scrollBehavior: "smooth",
        }}
      >
        <HeroSection onSectionClick={scrollToId} />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
