import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";
import { LazyImage } from "./LazyImage";

interface Slide {
  id: number;
  title: string;
  content: string;
  icon: string;
  color: string;
}

export const PresentationMode: React.FC = () => {
  const { theme } = useTheme();
  // const { t } = useTranslation();
  const styles = getThemeStyles(theme);
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Olá! Sou Cicero Lino",
      content: "Full Stack Developer apaixonado por criar soluções inovadoras",
      icon: "fas fa-user",
      color: styles.colors.primary,
    },
    {
      id: 2,
      title: "Tecnologias Principais",
      content: "React, Node.js, TypeScript, AWS, PostgreSQL, NestJS",
      icon: "fas fa-code",
      color: styles.colors.secondary,
    },
    {
      id: 3,
      title: "Experiência",
      content: "2+ anos desenvolvendo aplicações web escaláveis",
      icon: "fas fa-briefcase",
      color: "#6f42c1",
    },
    {
      id: 4,
      title: "Open Source",
      content: "41 contribuições em projetos React, Node.js e TypeScript",
      icon: "fab fa-github",
      color: "#fd7e14",
    },
    {
      id: 5,
      title: "Disponibilidade",
      content: "CLT, PJ, Cooperado, Freelancer",
      icon: "fas fa-handshake",
      color: "#28a745",
    },
    {
      id: 6,
      title: "Vamos Conversar?",
      content: "Entre em contato para discutir seu próximo projeto!",
      icon: "fas fa-envelope",
      color: styles.colors.primary,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isActive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          zIndex: 1000,
        }}
      >
        <motion.button
          onClick={() => setIsActive(true)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: styles.colors.primary,
            border: "none",
            borderRadius: "50px",
            padding: "1rem 1.5rem",
            color: styles.colors.background,
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: styles.shadows.large,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: styles.transitions.medium,
          }}
          title="Modo Apresentação"
        >
          <i className="fas fa-presentation" style={{ fontSize: "1.2rem" }} />
          <span>Apresentação</span>
        </motion.button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: styles.colors.background,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem",
            borderBottom: `1px solid ${styles.colors.border}`,
          }}
        >
          <h1
            style={{
              color: styles.colors.text,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Apresentação - Cicero Lino
          </h1>
          <motion.button
            onClick={() => setIsActive(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "transparent",
              border: `2px solid ${styles.colors.primary}`,
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              color: styles.colors.primary,
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            <i className="fas fa-times" />
          </motion.button>
        </div>

        {/* Slide Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                maxWidth: "800px",
                width: "100%",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: `${slides[currentSlide].color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem auto",
                  border: `3px solid ${slides[currentSlide].color}`,
                  overflow: "hidden",
                }}
              >
                {currentSlide === 0 ? (
                  <LazyImage
                    src="https://avatars.githubusercontent.com/u/53065315?v=4"
                    alt="Avatar de Cicero Lino"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <i
                    className={slides[currentSlide].icon}
                    style={{
                      fontSize: "3rem",
                      color: slides[currentSlide].color,
                    }}
                  />
                )}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  fontSize: "3rem",
                  color: styles.colors.text,
                  marginBottom: "2rem",
                  fontWeight: "bold",
                }}
              >
                {slides[currentSlide].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  fontSize: "1.5rem",
                  color: styles.colors.textSecondary,
                  lineHeight: "1.6",
                }}
              >
                {slides[currentSlide].content}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem",
            borderTop: `1px solid ${styles.colors.border}`,
          }}
        >
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: styles.colors.primary,
              border: "none",
              borderRadius: "8px",
              padding: "1rem 2rem",
              color: styles.colors.background,
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            <i
              className="fas fa-chevron-left"
              style={{ marginRight: "0.5rem" }}
            />
            Anterior
          </motion.button>

          {/* Slide Indicators */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentSlide
                      ? styles.colors.primary
                      : styles.colors.border,
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: styles.colors.primary,
              border: "none",
              borderRadius: "8px",
              padding: "1rem 2rem",
              color: styles.colors.background,
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Próximo
            <i
              className="fas fa-chevron-right"
              style={{ marginLeft: "0.5rem" }}
            />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
