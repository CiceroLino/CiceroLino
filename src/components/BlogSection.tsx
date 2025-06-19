import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles, commonStyles } from "../utils/styles";

export const BlogSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  return (
    <motion.section
      id="blog"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      style={{
        ...commonStyles.section,
        backgroundColor: styles.colors.overlay,
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: styles.colors.secondary,
          marginBottom: "1rem",
        }}
      >
        Blog (Em Breve)
      </h2>

      <div
        style={{
          backgroundColor: `${styles.colors.secondary}10`,
          border: `1px solid ${styles.colors.secondary}`,
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: 600,
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: styles.colors.secondary,
          }}
        >
          🚧 Em Construção 🚧
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: styles.colors.textSecondary,
          }}
        >
          Em breve você encontrará artigos sobre desenvolvimento web,
          arquitetura de software, e insights sobre as últimas tecnologias.
        </p>
      </div>
    </motion.section>
  );
};
