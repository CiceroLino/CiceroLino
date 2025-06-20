import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { OpenSourceSection } from "./components/OpenSourceSection";
import { TimelineSection } from "./components/TimelineSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { DownloadCV } from "./components/DownloadCV";
import { PresentationMode } from "./components/PresentationMode";
import { getThemeStyles } from "./utils/styles";
import { useTheme } from "./contexts/ThemeContext";
import "./i18n";

const BackgroundVideo: React.FC = () => {
  const { theme } = useTheme();
  const overlayColor =
    theme === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.6)";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          console.error("Erro ao carregar vídeo:", e);
        }}
        onLoadStart={() => {
          console.log("Vídeo começou a carregar");
        }}
        onCanPlay={() => {
          console.log("Vídeo pode ser reproduzido");
        }}
      >
        <source
          src="/coverr-coding-sequences-9906-1080p.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeos.
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: overlayColor,
          zIndex: 1,
        }}
      />
    </div>
  );
};

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BackgroundVideo />
      <div
        style={{
          backgroundColor: "transparent",
          color: styles.colors.text,
          minHeight: "100vh",
          transition: styles.transitions.medium,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Navbar onSectionClick={handleSectionClick} />
        <main
          style={{
            position: "relative",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            paddingTop: "4.5rem",
            scrollBehavior: "smooth",
          }}
        >
          <HeroSection onSectionClick={handleSectionClick} />
          <AboutSection />
          <SkillsSection />
          <OpenSourceSection />
          <TimelineSection />
          <PortfolioSection />
          <BlogSection />
          <ContactSection />
        </main>
        <DownloadCV />
        <PresentationMode />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
