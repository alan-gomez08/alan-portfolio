import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

const translations = {
  en: {
    nav: {
      products: "Impactful Products",
      methodology: "Methodology",
      experience: "Experience",
      about: "About",
      cv: "Download CV"
    },
    hero: {
      badge: "Senior Product Designer & UX Engineer",
      title1: "Product design",
      title2: "driven by engineering",
      scramble: "rigor.",
      link1: "Work",
      link2: "Methodology"
    },
    products: {
      badge: "01 — Impactful Products",
      title: "Selected Work",
      subtitle: "Projects where design architecture and code quality intersect to solve real business problems.",
      nuxio_cat: "Industrial B2B",
      nuxio_desc: "A critical dashboard for industrial emergency response. Simplified complex data streams into actionable, high-contrast UI for stressful environments.",
      electro_cat: "E-Commerce",
      electro_desc: "A high-conversion frontend built with React and Firebase. Focused on micro-interactions and a frictionless checkout process.",
      figma_cat: "AI Tooling",
      figma_desc: "Component library and strict layout prompts tailored for AI-driven design generation within the Material Design 3 ecosystem."
    },
    laboratory: {
      badge: "02 — Craft & Experiments",
      title: "The Laboratory",
      subtitle: "Live React experiments. Click. Interact. Explore the craft.",
      exp0_title: "Spring Toggle",
      exp0_desc: "Physics-based pill switch with spring dynamics",
      exp0_active: "Active",
      exp0_inactive: "Inactive",
      exp1_title: "Shared Layout",
      exp1_desc: "Morphing elements to maintain context during state changes",
      exp1_expand: "Expand View",
      exp1_detail: "Detailed View",
      exp1_body: "Morphing maintains spatial context. Perfect for mobile overlays.",
      exp2_title: "⌘ AI Prompt",
      exp2_desc: 'Type "improve button" or "fix spacing" + Enter',
      exp2_placeholder: "improve button...",
      exp2_btn: "RUN",
      exp2_success: "Design token updated successfully.",
      exp3_title: "Elastic Counter",
      exp3_desc: "Increment or decrement — watch the spring bounce",
      footer: "All experiments built with React + Motion. Source available on request."
    },
    methodology: {
      badge: "03 — Methodology",
      title: "The Logic‑First Method",
      m1_title: "Information Architecture",
      m1_desc: "Designing structures that support software growth, not just isolated screens. Every hierarchy is intentional, every flow is validated before a pixel moves.",
      m2_title: "Technical Viability",
      m2_desc: "An engineering background eliminates rework. I design within real constraints — implementable interfaces that developers build with confidence.",
      m3_title: "Smart Prototyping",
      m3_desc: "Modern tools (React, AI) validate experiences in production-like environments before a single line of production code is written."
    },
    experience: {
      badge: "04 — Career",
      title: "Work Experience",
      exp1_period: "2024 — Present",
      exp1_company: "Independent",
      exp1_role: "Freelance Product Designer",
      exp1_desc: "Focus on AI-driven products and Conversion Rate Optimization. Collaborating with startups and established brands to ship impactful design solutions.",
      exp2_period: "2025 — 2026",
      exp2_company: "Nuxio Software",
      exp2_role: "UX Lead",
      exp2_desc: "Team leadership & critical industrial platforms. Led design strategy for complex B2B products, mentoring junior designers and establishing design systems.",
      exp3_period: "In Progress",
      exp3_company: "University National of Hurlingham",
      exp3_role: "Computer Engineering",
      exp3_desc: "Building an algorithmic foundation. Bridging the gap between design intuition and engineering precision through formal computer science education."
    },
    about: {
      badge: "05 — About",
      title: "The Designer Behind the Work",
      p1: "I link design consistency with logic. As a Senior Product Designer and former UX Lead, I approach every project with the belief that truly great design isn't just beautiful — it's functional, scalable, and technically sound.",
      p2: "My engineering background gives me a unique perspective. I don't just hand off mockups — I understand the constraints and possibilities of the code.",
      p3_start: "Beyond client work, I lead a growing design community of ",
      p3_highlight: "12,000+ professionals",
      p3_end: "."
    },
    contact: {
      badge: "Get in touch",
      title: "Let's talk about your next product.",
      desc: "Available for select freelance projects and full-time opportunities. Reach out to discuss how design and engineering rigor can accelerate your product.",
      btn: "Send Email",
      subtext: "hello@alan.design · Usually responds within 24h",
      motto: "Functional beauty, always.",
      resume: "Resume"
    }
  },
  es: {
    nav: {
      products: "Proyectos Clave",
      methodology: "Metodología",
      experience: "Experiencia",
      about: "Sobre Mí",
      cv: "Descargar CV"
    },
    hero: {
      badge: "Diseñador de Producto Senior & UX Engineer",
      title1: "Diseño de producto",
      title2: "impulsado por la ingeniería",
      scramble: "rigor.",
      link1: "Proyectos",
      link2: "Metodología"
    },
    products: {
      badge: "01 — Productos de Impacto",
      title: "Trabajo Destacado",
      subtitle: "Proyectos donde la arquitectura de diseño y la calidad del código se interceptan para resolver problemas reales de negocio.",
      nuxio_cat: "B2B Industrial",
      nuxio_desc: "Un panel crítico para la respuesta a emergencias industriales. Flujos de datos complejos simplificados en una interfaz procesable y de alto contraste para entornos de alta tensión.",
      electro_cat: "E-Commerce",
      electro_desc: "Un frontend de alta conversión construido con React y Firebase. Enfocado en micro-interacciones y un proceso de pago sin fricciones.",
      figma_cat: "Herramientas de IA",
      figma_desc: "Librería de componentes y prompts de layout estrictos diseñados para la generación de interfaces con IA dentro del ecosistema de Material Design 3."
    },
    laboratory: {
      badge: "02 — Craft y Experimentos",
      title: "El Laboratorio",
      subtitle: "Experimentos en vivo con React. Haz clic. Interactúa. Explora el código.",
      exp0_title: "Toggle con Resorte",
      exp0_desc: "Interruptor basado en físicas con dinámicas de resorte",
      exp0_active: "Activo",
      exp0_inactive: "Inactivo",
      exp1_title: "Layout Compartido",
      exp1_desc: "Elementos que se transforman manteniendo el contexto durante los cambios de estado",
      exp1_expand: "Expandir Vista",
      exp1_detail: "Vista Detallada",
      exp1_body: "La transformación mantiene el contexto espacial. Perfecto para overlays en móviles.",
      exp2_title: "⌘ Prompt de IA",
      exp2_desc: 'Escribe "mejorar botón" o "arreglar espaciado" + Enter',
      exp2_placeholder: "mejorar botón...",
      exp2_btn: "EJECUTAR",
      exp2_success: "Design token actualizado correctamente.",
      exp3_title: "Contador Elástico",
      exp3_desc: "Incrementa o decrementa — observa el rebote del resorte",
      footer: "Todos los experimentos construidos con React + Motion. Código fuente disponible a pedido."
    },
    methodology: {
      badge: "03 — Metodología",
      title: "El Método Basado en Lógica",
      m1_title: "Arquitectura de la Información",
      m1_desc: "Diseño de estructuras que soportan el crecimiento del software, no solo pantallas aisladas. Cada jerarquía es intencional, cada flujo es validado antes de mover un píxel.",
      m2_title: "Viabilidad Técnica",
      m2_desc: "Tener formación en ingeniería elimina el retrabajo. Diseño dentro de restricciones reales: interfaces implementables que los desarrolladores pueden construir con confianza.",
      m3_title: "Prototipado Inteligente",
      m3_desc: "Las herramientas modernas (React, IA) validan las experiencias en entornos similares a producción antes de escribir una sola línea de código."
    },
    experience: {
      badge: "04 — Carrera",
      title: "Experiencia Laboral",
      exp1_period: "2024 — Presente",
      exp1_company: "Independiente",
      exp1_role: "Diseñador de Producto Freelance",
      exp1_desc: "Enfoque en productos impulsados por IA y Optimización de la Tasa de Conversión. Colaborando con startups y marcas establecidas para lanzar soluciones de diseño impactantes.",
      exp2_period: "2025 — 2026",
      exp2_company: "Nuxio Software",
      exp2_role: "UX Lead",
      exp2_desc: "Liderazgo de equipos y plataformas industriales críticas. Lideré la estrategia de diseño para productos B2B complejos, guiando a diseñadores junior y estableciendo sistemas de diseño.",
      exp3_period: "En Progreso",
      exp3_company: "Universidad Nacional de Hurlingham",
      exp3_role: "Ingeniería Informática",
      exp3_desc: "Construyendo una base algorítmica. Cerrando la brecha entre la intuición del diseño y la precisión de la ingeniería a través de la educación formal en ciencias de la computación."
    },
    about: {
      badge: "05 — Sobre Mí",
      title: "El Diseñador Detrás del Trabajo",
      p1: "Vinculo la consistencia del diseño con la lógica. Como Diseñador de Producto Senior y ex UX Lead, abordo cada proyecto con la creencia de que un diseño verdaderamente excelente no solo es hermoso: es funcional, escalable y técnicamente sólido.",
      p2: "Mi formación en ingeniería me da una perspectiva única. No me limito a entregar mockups: entiendo las limitaciones y posibilidades del código.",
      p3_start: "Más allá del trabajo con clientes, lidero una creciente comunidad de diseño de ",
      p3_highlight: "más de 12.000 profesionales",
      p3_end: "."
    },
    contact: {
      badge: "Ponte en contacto",
      title: "Hablemos de tu próximo producto.",
      desc: "Disponible para proyectos freelance seleccionados y oportunidades a tiempo completo. Contáctame para discutir cómo el rigor en diseño e ingeniería puede acelerar tu producto.",
      btn: "Enviar Email",
      subtext: "hello@alan.design · Usualmente responde en 24h",
      motto: "Belleza funcional, siempre.",
      resume: "Currículum"
    }
  }
};

type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (section: keyof Translations, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = (section: keyof Translations, key: string): string => {
    return (translations[language][section] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}