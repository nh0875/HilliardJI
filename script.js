// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menú móvil (básico)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#0f172a';
        navLinks.style.width = '100%';
        navLinks.style.padding = '1rem';
    }
});

// ==========================================
// Sistema de Traducción (Español / English)
// ==========================================

const translations = {
    es: {
        // Navegación
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_experience: "Experiencia",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",

        // Hero
        hero_greeting: "Hola, soy",
        hero_subtitle: "Analista de Inteligencia Artificial y Científico de Datos",
        hero_description: "Estudiante avanzado de Ciencia de Datos enfocado en Python, SQL y la implementación ética de Inteligencia Artificial.",
        hero_cta: "Contáctame",

        // Sobre Mí
        about_title: "Sobre Mí & Habilidades",
        about_p1: "Soy una persona organizada, responsable y decidida, con un fuerte enfoque en alcanzar metas. A mis 21 años, cuento con habilidades avanzadas en preprocesamiento de datos, modelos predictivos y análisis de datos.",
        about_p2: "Mi formación incluye una mentalidad ética sobre la aplicación de la IA y un fuerte pensamiento crítico desarrollado a través de las matemáticas y la estadística.",
        about_languages: "Idiomas",
        lang_es: "🇪🇸 Español (Nativo)",
        lang_en: "🇺🇸 Inglés (C1 - Avanzado)",
        lang_pt: "🇧🇷 Portugués (A2 - Intermedio)",
        lang_de: "🇩🇪 Alemán (A1 - Básico)",
        skill_stack: "Tecnologías",
        skill_excel: "Excel Avanzado",
        skill_preprocess: "Preprocesamiento de Datos",
        skill_predictive: "Modelos Predictivos",

        // Experiencia
        exp_title: "Experiencia Laboral",
        exp1_date: "05/2025 - Presente",
        exp1_role: "Desarrollador de Software",
        exp1_company: "Empresa Confidencial / Freelance",
        exp1_task1: "Implementación de IA en flujos de trabajo.",
        exp1_task2: "Soporte y mantenimiento de sitios web.",
        exp1_task3: "Creación de IAs utilizando modelos de lenguaje (LLMs).",
        exp1_task4: "Entrenamiento de Chatbots y capacitación de personal en uso de IA.",
        exp2_role: "Analista de Datos",
        exp2_company: "Gestión Capital Humano",
        exp2_task1: "Recolección y preprocesamiento de datos.",
        exp2_task2: "Automatización de procesos con Python.",
        exp2_task3: "Administración de bases de datos con SQL.",
        exp2_task4: "Reportes estructurados y presentación de insights (Excel/Power BI).",

        // Educación
        edu_title: "Educación",
        edu1_name: "Ciencias del Comportamiento",
        edu1_date: "03/2026 - 2030 (En curso)",
        edu2_name: "Ciencia de Datos",
        edu2_date: "07/2023 - 2026 (En curso)",
        edu3_name: "Ingeniería en Petróleo",
        edu3_school: "UNCUYO - Facultad de Ingeniería",

        // Portafolio
        portfolio_title: "Portafolio",
        portfolio_subtitle: "Algunos de mis trabajos en visualización de datos.",
        project1_title: "Modelos Predictivos",
        project1_desc: "Implementación de algoritmos de clasificación y regresión en Python.",
        project1_link: 'Ver Código <i class="fas fa-arrow-right"></i>',

        // Contacto
        contact_title: "Contacto"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Me",
        nav_experience: "Experience",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",

        // Hero
        hero_greeting: "Hi, I'm",
        hero_subtitle: "Artificial Intelligence Analyst & Data Scientist",
        hero_description: "Advanced Data Science student focused on Python, SQL, and the ethical implementation of Artificial Intelligence.",
        hero_cta: "Contact Me",

        // About Me
        about_title: "About Me & Skills",
        about_p1: "I am an organized, responsible, and determined person with a strong focus on achieving goals. At 21 years old, I have advanced skills in data preprocessing, predictive models, and data analysis.",
        about_p2: "My education includes an ethical mindset on the application of AI and strong critical thinking developed through mathematics and statistics.",
        about_languages: "Languages",
        lang_es: "🇪🇸 Spanish (Native)",
        lang_en: "🇺🇸 English (C1 - Advanced)",
        lang_pt: "🇧🇷 Portuguese (A2 - Intermediate)",
        lang_de: "🇩🇪 German (A1 - Basic)",
        skill_stack: "Technologies",
        skill_excel: "Advanced Excel",
        skill_preprocess: "Data Preprocessing",
        skill_predictive: "Predictive Models",

        // Experience
        exp_title: "Work Experience",
        exp1_date: "05/2025 - Present",
        exp1_role: "Software Developer",
        exp1_company: "Confidential Company / Freelance",
        exp1_task1: "AI implementation in business workflows.",
        exp1_task2: "Website support and maintenance.",
        exp1_task3: "Building AI solutions using Large Language Models (LLMs).",
        exp1_task4: "Chatbot training and staff training on AI usage.",
        exp2_role: "Data Analyst",
        exp2_company: "Gestión Capital Humano",
        exp2_task1: "Data collection and preprocessing.",
        exp2_task2: "Process automation with Python.",
        exp2_task3: "Database management with SQL.",
        exp2_task4: "Structured reports and insights presentation (Excel/Power BI).",

        // Education
        edu_title: "Education",
        edu1_name: "Behavioral Sciences",
        edu1_date: "03/2026 - 2030 (In progress)",
        edu2_name: "Data Science",
        edu2_date: "07/2023 - 2026 (In progress)",
        edu3_name: "Petroleum Engineering",
        edu3_school: "UNCUYO - Faculty of Engineering",

        // Portfolio
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Some of my work in data visualization.",
        project1_title: "Predictive Models",
        project1_desc: "Implementation of classification and regression algorithms in Python.",
        project1_link: 'View Code <i class="fas fa-arrow-right"></i>',

        // Contact
        contact_title: "Contact"
    }
};

let currentLang = localStorage.getItem('portfolioLang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar botón de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        const label = langToggle.querySelector('.lang-label');
        if (lang === 'es') {
            flag.textContent = '🇺🇸';
            label.textContent = 'EN';
            langToggle.title = 'Switch to English';
        } else {
            flag.textContent = '🇪🇸';
            label.textContent = 'ES';
            langToggle.title = 'Cambiar a Español';
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});