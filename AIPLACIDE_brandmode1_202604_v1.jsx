// AIPLACIDE_brandmode1_202604_v1
// Ayiti pa ka tann — Community Platform
// Brand: AIPLACIDE · Owner: Pierre Placide · AI Strategist
// Mode: /brandmode 1 — Internal Personal Brand
// Preset: /brandset 1 — AIPLACIDE Core [FIXED]

import { useState, useEffect } from "react";

// ════════════════════════════════════════════════════════════
// 01. BRAND CONSTANTS
// ════════════════════════════════════════════════════════════

const BRAND = {
  primary: "#0D2137",
  secondary: "#0E8A8A",
  accent: "#C9A84C",
  highlight: "#3B4DB8",
  neutral: "#F8F7F4",
  white: "#FFFFFF",
  gray: "#6B7280",

  fonts: {
    display: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
    mono: "'DM Mono', monospace",
  },

  spacing: {
    section: "100px",
    component: "32px",
    element: "16px",
    base: "8px",
  },
};

// ════════════════════════════════════════════════════════════
// 02. COPY OBJECT — all text keyed by EN / FR / Kreyol
// ════════════════════════════════════════════════════════════

const COPY = {
  nav: {
    brand: "AIPLACIDE",
    links: {
      EN: ["About", "Philosophy", "Community", "Resources", "Join"],
      FR: ["À propos", "Philosophie", "Communauté", "Ressources", "Rejoindre"],
      Kreyol: ["Konsènan", "Filozofi", "Kominote", "Resous", "Antre"],
    },
  },
  hero: {
    line1: {
      EN: "Ayiti pa ka tann.",
      FR: "Ayiti pa ka tann.",
      Kreyol: "Ayiti pa ka tann.",
    },
    line2: {
      EN: "Haiti cannot wait — and neither can its builders.",
      FR: "Haïti ne peut pas attendre — ni ceux qui la construisent.",
      Kreyol: "Ayiti pa ka tann — ni moun k ap bati l yo.",
    },
    line3: {
      EN: "I am building the bridge between AI and Haitian entrepreneurship.",
      FR: "Je construis le pont entre l'IA et l'entrepreneuriat haïtien.",
      Kreyol: "M ap bati pon ant IA ak antreprenarya ayisyen.",
    },
    sub: {
      EN: "A community for Haitian entrepreneurs building with AI — in English, French, and Kreyol.",
      FR: "Une communauté pour les entrepreneurs haïtiens qui construisent avec l'IA — en anglais, français et créole.",
      Kreyol: "Yon kominote pou antreprenè ayisyen k ap bati ak IA — an anglè, fransè, ak kreyòl.",
    },
    cta: {
      EN: "Join the community",
      FR: "Rejoignez la communauté",
      Kreyol: "Antre nan kominote a",
    },
  },
  mirror: {
    heading: {
      EN: "I built this for you if…",
      FR: "J'ai construit ceci pour vous si…",
      Kreyol: "Mwen bati sa pou ou si…",
    },
    statements: [
      {
        EN: "You build in two languages and think in three.",
        FR: "Vous construisez dans deux langues et pensez dans trois.",
        Kreyol: "Ou konstwi nan de lang epi ou reflechi nan twa.",
      },
      {
        EN: "You see AI as an equalizer, not a threat.",
        FR: "Vous voyez l'IA comme un égaliseur, pas une menace.",
        Kreyol: "Ou wè IA kòm yon zouti egalite, pa yon menas.",
      },
      {
        EN: "You carry a vision for Haiti that others have not imagined yet.",
        FR: "Vous portez une vision pour Haïti que d'autres n'ont pas encore imaginée.",
        Kreyol: "Ou pote yon vizyon pou Ayiti lòt moun poko imajine.",
      },
      {
        EN: "You are tired of waiting for permission to build.",
        FR: "Vous êtes fatigué d'attendre la permission de construire.",
        Kreyol: "Ou bouke tann pèmisyon pou ou bati.",
      },
    ],
  },
  philosophy: {
    badge: {
      EN: "Domain 1 — AI & Technology",
      FR: "Domaine 1 — IA & Technologie",
      Kreyol: "Domèn 1 — IA & Teknoloji",
    },
    heading: {
      EN: "Radical Access",
      FR: "Accès Radical",
      Kreyol: "Aksè Radikal",
    },
    body: {
      EN: "I believe the most powerful tools in history are now available to any entrepreneur with a vision — regardless of geography, language, or legacy infrastructure. I discovered that AI does not care where you went to school or what passport you carry. It responds to clarity of thought and boldness of action. For Haitian entrepreneurs, this is not a trend — it is the first level playing field that has ever existed. I am here to make sure our community knows how to stand on it.",
      FR: "Je crois que les outils les plus puissants de l'histoire sont désormais accessibles à tout entrepreneur porteur d'une vision — peu importe la géographie, la langue ou l'infrastructure existante. J'ai découvert que l'IA ne se soucie ni de votre école ni de votre passeport. Elle répond à la clarté de pensée et à l'audace d'action. Pour les entrepreneurs haïtiens, ce n'est pas une tendance — c'est le premier terrain équitable qui ait jamais existé. Je suis là pour m'assurer que notre communauté sache comment s'y tenir.",
      Kreyol: "Mwen kwè zouti ki pi pwisan nan listwa disponib kounye a pou nenpòt antreprenè ki gen yon vizyon — kèlkeswa jewografi, lang, oswa enfrastrikti. Mwen dekouvri ke IA pa enterese konnen ki lekòl ou te ale oswa ki paspò ou genyen. Li reponn a klète panse ak odas aksyon. Pou antreprenè ayisyen, sa se pa yon tandans — se premye teren egal ki janm egziste. Mwen la pou m asire kominote nou an konnen kijan pou kanpe sou li.",
    },
  },
  offer: {
    heading: {
      EN: "I believe in building together",
      FR: "Je crois en la construction collective",
      Kreyol: "Mwen kwè nan bati ansanm",
    },
  },
  stats: {
    members: { EN: "Founding Members", FR: "Membres Fondateurs", Kreyol: "Manm Fondatè" },
    resources: { EN: "Resources Shared", FR: "Ressources Partagées", Kreyol: "Resous Pataje" },
    languages: { EN: "Languages Served", FR: "Langues Servies", Kreyol: "Lang yo Sèvi" },
  },
  pillars: [
    {
      name: { EN: "Intelligence", FR: "Intelligence", Kreyol: "Entèlijans" },
      desc: {
        EN: "I share weekly AI briefings — strategies, tools, and prompts — in all three languages.",
        FR: "Je partage des briefings IA hebdomadaires — stratégies, outils et prompts — dans les trois langues.",
        Kreyol: "Mwen pataje brifing IA chak semèn — estrateji, zouti, ak prompt — nan twa lang yo.",
      },
      icon: "◆",
    },
    {
      name: { EN: "Connection", FR: "Connexion", Kreyol: "Koneksyon" },
      desc: {
        EN: "I connect Haitian entrepreneurs across the diaspora and in-country — builders finding builders.",
        FR: "Je connecte les entrepreneurs haïtiens à travers la diaspora et en Haïti — des bâtisseurs qui trouvent des bâtisseurs.",
        Kreyol: "Mwen konekte antreprenè ayisyen nan tout dyaspora a ak nan peyi a — moun k ap bati jwenn moun k ap bati.",
      },
      icon: "◈",
    },
    {
      name: { EN: "Acceleration", FR: "Accélération", Kreyol: "Akselera" },
      desc: {
        EN: "I provide templates, prompt libraries, and AI stack guides so you can move from idea to execution faster.",
        FR: "Je fournis des modèles, des bibliothèques de prompts et des guides de stack IA pour passer de l'idée à l'exécution plus rapidement.",
        Kreyol: "Mwen bay modèl, bibliyotèk prompt, ak gid stak IA pou ou ka ale pi vit de lide a ekzekisyon.",
      },
      icon: "▲",
    },
  ],
  story: {
    heading: {
      EN: "Here is what I discovered",
      FR: "Voici ce que j'ai découvert",
      Kreyol: "Men sa mwen dekouvri",
    },
    body: {
      EN: "I believe that the most important technology shift in a generation is happening right now — and the Haitian entrepreneurial community deserves to be at the center of it, not on the sidelines.\n\nHere is what I discovered when I started building with AI: the barriers that once separated well-funded startups from resourceful entrepreneurs have collapsed. A founder in Port-au-Prince with a clear prompt and a bold vision can now access the same intelligence as a team in Silicon Valley.\n\nI grew up between cultures, between languages, between worlds. That in-between space is not a disadvantage — it is a superpower. I have spent my career at the intersection of technology and human connection, and I have watched Haitian entrepreneurs build extraordinary things with fewer resources than anyone thought possible.\n\nNow, with AI, the equation has changed. The tools are here. The moment is here. What was missing was a gathering place — a community where Haitian builders can learn, share, and accelerate together in the languages they think in.\n\nThat is why I built this. Not because Haiti needs saving — but because Haitian entrepreneurs are already building the future, and they deserve a community that matches their ambition.",
      FR: "Je crois que le changement technologique le plus important d'une génération se produit en ce moment — et la communauté entrepreneuriale haïtienne mérite d'être au centre, pas en marge.\n\nVoici ce que j'ai découvert quand j'ai commencé à construire avec l'IA : les barrières qui séparaient autrefois les startups bien financées des entrepreneurs débrouillards se sont effondrées. Un fondateur à Port-au-Prince avec un prompt clair et une vision audacieuse peut désormais accéder à la même intelligence qu'une équipe de la Silicon Valley.\n\nJ'ai grandi entre les cultures, entre les langues, entre les mondes. Cet espace intermédiaire n'est pas un désavantage — c'est un superpouvoir. J'ai passé ma carrière à l'intersection de la technologie et de la connexion humaine, et j'ai vu des entrepreneurs haïtiens construire des choses extraordinaires avec moins de ressources que quiconque ne pensait possible.\n\nMaintenant, avec l'IA, l'équation a changé. Les outils sont là. Le moment est là. Ce qui manquait, c'était un lieu de rassemblement — une communauté où les bâtisseurs haïtiens peuvent apprendre, partager et accélérer ensemble dans les langues dans lesquelles ils pensent.\n\nC'est pourquoi j'ai construit ceci. Non pas parce qu'Haïti a besoin d'être sauvé — mais parce que les entrepreneurs haïtiens construisent déjà l'avenir, et ils méritent une communauté à la hauteur de leur ambition.",
      Kreyol: "Mwen kwè ke chanjman teknolojik ki pi enpòtan nan yon jenerasyon ap pase kounye a — epi kominote antreprenarya ayisyen an merite pou li nan mitan l, pa sou kote.\n\nMen sa mwen dekouvri lè m te kòmanse bati ak IA: baryè ki te separe startup ki gen anpil finansman ak antreprenè ki gen resous yo tonbe. Yon fondatè nan Pòtoprens ak yon prompt klè ak yon vizyon odasyez ka jwenn menm entèlijans ak yon ekip nan Silicon Valley.\n\nMwen grandi ant kilti, ant lang, ant mond. Espas sa a pa yon dezavantaj — se yon sipèpouvwa. Mwen pase karyè m nan entèseksyon teknoloji ak koneksyon imen, epi mwen wè antreprenè ayisyen bati bagay ekstraòdinè ak mwens resous pase sa nenpòt moun te panse posib.\n\nKounye a, ak IA, ekwasyon an chanje. Zouti yo la. Moman an la. Sa ki te manke se te yon kote pou rasanble — yon kominote kote moun k ap bati ayisyen ka aprann, pataje, ak aksele ansanm nan lang yo panse ladan yo.\n\nSe poutèt sa mwen bati sa. Pa paske Ayiti bezwen sove — men paske antreprenè ayisyen ap bati lavni deja, epi yo merite yon kominote ki matche ak anbisyon yo.",
    },
  },
  resources: {
    heading: {
      EN: "I share what I build",
      FR: "Je partage ce que je construis",
      Kreyol: "Mwen pataje sa m bati",
    },
    filterAll: { EN: "All", FR: "Tout", Kreyol: "Tout" },
  },
  members: {
    heading: {
      EN: "I celebrate the founding builders",
      FR: "Je célèbre les bâtisseurs fondateurs",
      Kreyol: "Mwen selebre moun ki bati fondasyon an",
    },
  },
  join: {
    heading: {
      EN: "Join the community",
      FR: "Rejoignez la communauté",
      Kreyol: "Antre nan kominote a",
    },
    desc: {
      EN: "I built this space for Haitian entrepreneurs who are ready to build with AI — in the language they think in. Join and receive weekly intelligence, tools, and connection.",
      FR: "J'ai construit cet espace pour les entrepreneurs haïtiens prêts à construire avec l'IA — dans la langue dans laquelle ils pensent. Rejoignez et recevez chaque semaine intelligence, outils et connexion.",
      Kreyol: "Mwen bati espas sa a pou antreprenè ayisyen ki prè pou bati ak IA — nan lang yo panse ladan. Antre epi resevwa entèlijans, zouti, ak koneksyon chak semèn.",
    },
    namePlaceholder: { EN: "Your name", FR: "Votre nom", Kreyol: "Non ou" },
    emailPlaceholder: { EN: "Your email", FR: "Votre courriel", Kreyol: "Imèl ou" },
    langLabel: { EN: "Preferred language", FR: "Langue préférée", Kreyol: "Lang ou prefere" },
    submit: {
      EN: "Join the community",
      FR: "Rejoignez la communauté",
      Kreyol: "Antre nan kominote a",
    },
    success: {
      EN: "Welcome to the community! Check your inbox.",
      FR: "Bienvenue dans la communauté ! Vérifiez votre boîte de réception.",
      Kreyol: "Byenveni nan kominote a! Tcheke bwat imèl ou.",
    },
  },
  newsletter: {
    heading: {
      EN: "The AIPLACIDE Intelligence Brief",
      FR: "Le Brief Intelligence AIPLACIDE",
      Kreyol: "Brifing Entèlijans AIPLACIDE",
    },
    desc: {
      EN: "I send weekly AI strategies, tools, and prompts — in your language.",
      FR: "J'envoie chaque semaine des stratégies IA, des outils et des prompts — dans votre langue.",
      Kreyol: "Mwen voye estrateji IA, zouti, ak prompt chak semèn — nan lang ou.",
    },
    placeholder: { EN: "Your email", FR: "Votre courriel", Kreyol: "Imèl ou" },
    subscribe: { EN: "Subscribe", FR: "S'abonner", Kreyol: "Abòne" },
    success: {
      EN: "You are in! Watch your inbox.",
      FR: "Vous êtes inscrit ! Surveillez votre boîte.",
      Kreyol: "Ou ladan! Gade bwat imèl ou.",
    },
  },
  footer: {
    tagline: {
      EN: "Ayiti pa ka tann — and neither can the entrepreneurs who are building its future.",
      FR: "Ayiti pa ka tann — et les entrepreneurs qui construisent son avenir non plus.",
      Kreyol: "Ayiti pa ka tann — ni antreprenè k ap bati lavni l yo.",
    },
    credit: "Pierre Placide · AIPLACIDE · Naples, Florida",
    cultural: {
      EN: "Built with pride from the Haitian diaspora.",
      FR: "Construit avec fierté depuis la diaspora haïtienne.",
      Kreyol: "Bati ak fyète soti nan dyaspora ayisyen an.",
    },
  },
  contact: {
    heading: {
      EN: "I want to hear from you",
      FR: "Je veux avoir de vos nouvelles",
      Kreyol: "Mwen vle tande ou",
    },
    namePlaceholder: { EN: "Your name", FR: "Votre nom", Kreyol: "Non ou" },
    emailPlaceholder: { EN: "Your email", FR: "Votre courriel", Kreyol: "Imèl ou" },
    messagePlaceholder: { EN: "Your message", FR: "Votre message", Kreyol: "Mesaj ou" },
    send: { EN: "Send message", FR: "Envoyer", Kreyol: "Voye mesaj" },
    success: {
      EN: "Message sent. I will be in touch.",
      FR: "Message envoyé. Je vous répondrai.",
      Kreyol: "Mesaj voye. M ap reponn ou.",
    },
  },
};

// ════════════════════════════════════════════════════════════
// 03. RESOURCES_DATA
// ════════════════════════════════════════════════════════════

const RESOURCES_DATA = [
  {
    title: "Perfect Prompt Builder",
    type: "Tool",
    langs: ["EN"],
    desc: "I created a structured prompt framework that turns vague ideas into precise AI instructions.",
    url: "#",
  },
  {
    title: "Philosophy Prompt Samples",
    type: "Prompt",
    langs: ["EN", "FR"],
    desc: "I share sample prompts rooted in the radical access philosophy — ready to use today.",
    url: "#",
  },
  {
    title: "AI Stack Audit Guide",
    type: "Guide",
    langs: ["EN"],
    desc: "I built a self-assessment guide to evaluate and optimize your current AI tool stack.",
    url: "#",
  },
  {
    title: "Done Ayiti 360°",
    type: "Guide",
    langs: ["EN", "FR", "Kreyol"],
    desc: "I designed a comprehensive view of AI opportunities across the Haitian entrepreneurial landscape.",
    url: "#",
  },
  {
    title: "Genspark Agent Guide",
    type: "Guide",
    langs: ["EN", "FR"],
    desc: "I wrote a step-by-step guide to building custom AI agents with Genspark.",
    url: "#",
  },
  {
    title: "Premye Pa ak IA",
    type: "Guide",
    langs: ["Kreyol"],
    desc: "Mwen ekri yon gid pou antreprenè ayisyen ki vle kòmanse ak IA — nan lang pa yo.",
    url: "#",
  },
];

// ════════════════════════════════════════════════════════════
// 04. MEMBERS_DATA
// ════════════════════════════════════════════════════════════

const MEMBERS_DATA = [
  {
    name: "Pierre Placide",
    location: "Naples, FL · USA",
    quote: "I believe the bridge between AI and Haitian entrepreneurship starts with one conversation.",
    lang: "EN",
    initial: "PP",
  },
  {
    name: "Founding Member",
    location: "Port-au-Prince · Haiti",
    quote: "Ayiti pa ka tann — m ap bati kounye a.",
    lang: "Kreyol",
    initial: "FM",
  },
  {
    name: "Founding Member",
    location: "Montréal · Canada",
    quote: "L'IA est l'outil que la diaspora attendait.",
    lang: "FR",
    initial: "FM",
  },
  {
    name: "Founding Member",
    location: "Miami, FL · USA",
    quote: "Building in three languages is our competitive advantage.",
    lang: "EN",
    initial: "FM",
  },
  {
    name: "Founding Member",
    location: "Paris · France",
    quote: "Cette communauté est ce qui manquait à notre écosystème.",
    lang: "FR",
    initial: "FM",
  },
  {
    name: "Founding Member",
    location: "Cap-Haïtien · Haiti",
    quote: "Zouti IA yo la — kominote sa a montre nou kijan pou sèvi ak yo.",
    lang: "Kreyol",
    initial: "FM",
  },
];

// ════════════════════════════════════════════════════════════
// 05. STATS_DATA
// ════════════════════════════════════════════════════════════

const STATS_DATA = [
  { value: 50, suffix: "+", labelKey: "members" },
  { value: 25, suffix: "+", labelKey: "resources" },
  { value: 3, suffix: "", labelKey: "languages" },
];

// ════════════════════════════════════════════════════════════
// 06. PILLARS_DATA (references COPY.pillars)
// ════════════════════════════════════════════════════════════

const PILLARS_DATA = COPY.pillars;

// ════════════════════════════════════════════════════════════
// 07. GLOBAL CSS INJECTION STRING
// ════════════════════════════════════════════════════════════

const GLOBAL_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${BRAND.neutral};
    font-family: ${BRAND.fonts.body};
    color: ${BRAND.primary};
  }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: ${BRAND.primary}; }
  ::-webkit-scrollbar-thumb { background: ${BRAND.accent}; border-radius: 4px; }
  :focus-visible { outline: 2px solid ${BRAND.accent}; outline-offset: 2px; }
  ::selection { background: ${BRAND.accent}; color: ${BRAND.primary}; }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes drawUnderline {
    from { width: 0; }
    to { width: 100%; }
  }
  .skip-to-content {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 999;
    padding: 8px 16px;
    background: ${BRAND.accent};
    color: ${BRAND.primary};
    font-family: ${BRAND.fonts.body};
    font-weight: 500;
    text-decoration: none;
  }
  .skip-to-content:focus {
    left: 0;
  }
`;

// ════════════════════════════════════════════════════════════
// 08. FONT INJECTION URL
// ════════════════════════════════════════════════════════════

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500&family=DM+Mono&display=swap";

// ════════════════════════════════════════════════════════════
// 09. UTILITY COMPONENTS
// ════════════════════════════════════════════════════════════

function useInView(ref, options = {}) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once !== false) observer.unobserve(entry.target);
        }
      },
      { threshold: options.amount || 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isInView;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function ScrollProgress() {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setPercent(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${percent}%`,
        background: BRAND.accent,
        zIndex: 100,
        transition: "width 0.1s linear",
      }}
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

function LanguageToggle({ lang, setLang }) {
  const langs = ["EN", "FR", "Kreyol"];
  return (
    <div style={{ display: "flex", gap: BRAND.spacing.base }}>
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={`Switch language to ${l}`}
          aria-pressed={lang === l}
          style={{
            background: "transparent",
            border: "none",
            color: lang === l ? BRAND.accent : BRAND.white,
            fontFamily: BRAND.fonts.mono,
            fontSize: "14px",
            fontWeight: lang === l ? 500 : 400,
            cursor: "pointer",
            padding: "6px 12px",
            borderBottom: lang === l ? `2px solid ${BRAND.accent}` : "2px solid transparent",
            transition: "color 0.2s, border-color 0.2s",
            minWidth: "44px",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function AnimatedStat({ value, suffix, label, triggerRef }) {
  const isInView = useInView(triggerRef, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      setCurrent(value);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, reduced]);

  return (
    <div style={{ textAlign: "center", padding: BRAND.spacing.component, minWidth: "140px", flex: "1 1 140px" }}>
      <div
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "48px",
          fontWeight: 700,
          color: BRAND.accent,
          lineHeight: 1.1,
        }}
      >
        {current}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: "16px",
          color: BRAND.gray,
          marginTop: BRAND.spacing.base,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function PhilosophyAnchor({ lang }) {
  const ref = { current: null };
  const setRef = (el) => { ref.current = el; };
  const [isInView, setIsInView] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) { setIsInView(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={setRef}
      style={{
        maxWidth: "740px",
        margin: "0 auto",
        textAlign: "center",
        animation: isInView && !reduced ? "scaleIn 0.5s ease forwards" : "none",
        opacity: isInView || reduced ? 1 : 0,
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontFamily: BRAND.fonts.mono,
          fontSize: "13px",
          color: BRAND.accent,
          border: `1px solid ${BRAND.accent}`,
          borderRadius: "4px",
          padding: "4px 12px",
          marginBottom: BRAND.spacing.element,
          letterSpacing: "0.5px",
        }}
      >
        {COPY.philosophy.badge[lang]}
      </div>
      <h2
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "36px",
          fontWeight: 700,
          color: BRAND.white,
          marginBottom: BRAND.spacing.element,
          position: "relative",
          display: "inline-block",
        }}
      >
        {COPY.philosophy.heading[lang]}
        <span
          style={{
            display: "block",
            height: "3px",
            background: BRAND.accent,
            borderRadius: "2px",
            marginTop: "8px",
            animation: isInView && !reduced ? "drawUnderline 0.8s ease forwards" : "none",
            width: isInView || reduced ? "100%" : "0",
          }}
        />
      </h2>
      <p
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: "18px",
          lineHeight: 1.7,
          color: BRAND.white,
          marginTop: BRAND.spacing.component,
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.5s ease 0.3s",
        }}
      >
        {COPY.philosophy.body[lang]}
      </p>
    </div>
  );
}

function ResourceCard({ resource, index, reduced }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: BRAND.white,
        borderRadius: "8px",
        padding: "24px",
        textDecoration: "none",
        color: BRAND.primary,
        border: hovered ? `2px solid ${BRAND.secondary}` : `2px solid transparent`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.2s, transform 0.2s",
        animation: reduced ? "none" : `fadeInUp 0.6s ease ${index * 0.12}s both`,
      }}
    >
      <div style={{ display: "flex", gap: BRAND.spacing.base, marginBottom: "12px", flexWrap: "wrap" }}>
        <span
          style={{
            fontFamily: BRAND.fonts.mono,
            fontSize: "11px",
            background: BRAND.accent,
            color: BRAND.primary,
            padding: "2px 8px",
            borderRadius: "3px",
            fontWeight: 500,
          }}
        >
          {resource.type}
        </span>
        {resource.langs.map((l) => (
          <span
            key={l}
            style={{
              fontFamily: BRAND.fonts.mono,
              fontSize: "11px",
              background: BRAND.highlight,
              color: BRAND.white,
              padding: "2px 8px",
              borderRadius: "3px",
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <h3
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "8px",
          color: BRAND.primary,
        }}
      >
        {resource.title}
      </h3>
      <p style={{ fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.gray, lineHeight: 1.5 }}>
        {resource.desc}
      </p>
      <div
        style={{
          marginTop: "12px",
          fontFamily: BRAND.fonts.mono,
          fontSize: "13px",
          color: BRAND.secondary,
        }}
      >
        →
      </div>
    </a>
  );
}

function MemberCard({ member, index, reduced }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: BRAND.white,
        borderRadius: "8px",
        padding: "24px",
        textAlign: "center",
        border: hovered ? `2px solid ${BRAND.accent}` : `2px solid transparent`,
        transition: "border-color 0.2s",
        animation: reduced ? "none" : `scaleIn 0.5s ease ${index * 0.12}s both`,
      }}
    >
      <div
        aria-label={member.name}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: BRAND.accent,
          color: BRAND.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: BRAND.fonts.display,
          fontSize: "22px",
          fontWeight: 700,
          margin: "0 auto 12px",
        }}
      >
        {member.initial}
      </div>
      <h4
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "18px",
          fontWeight: 700,
          color: BRAND.primary,
          marginBottom: "4px",
        }}
      >
        {member.name}
      </h4>
      <div
        style={{
          fontFamily: BRAND.fonts.mono,
          fontSize: "12px",
          color: BRAND.gray,
          marginBottom: "12px",
        }}
      >
        {member.location}
      </div>
      <p
        style={{
          fontFamily: BRAND.fonts.body,
          fontSize: "14px",
          color: BRAND.primary,
          fontStyle: "italic",
          lineHeight: 1.5,
        }}
      >
        "{member.quote}"
      </p>
    </div>
  );
}

function PillarCard({ pillar, lang, index, reduced }) {
  return (
    <div
      style={{
        background: BRAND.neutral,
        borderRadius: "8px",
        padding: "32px 24px",
        textAlign: "center",
        animation: reduced ? "none" : `fadeInUp 0.6s ease ${index * 0.12}s both`,
      }}
    >
      <div
        style={{
          fontSize: "32px",
          marginBottom: BRAND.spacing.element,
          color: BRAND.accent,
        }}
      >
        {pillar.icon}
      </div>
      <h3
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "22px",
          fontWeight: 700,
          color: BRAND.primary,
          marginBottom: "8px",
        }}
      >
        {pillar.name[lang]}
      </h3>
      <p style={{ fontFamily: BRAND.fonts.body, fontSize: "15px", color: BRAND.gray, lineHeight: 1.6 }}>
        {pillar.desc[lang]}
      </p>
    </div>
  );
}

function JoinForm({ lang }) {
  const [formData, setFormData] = useState({ name: "", email: "", lang: "EN" });
  const [status, setStatus] = useState("idle");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!formData.name.trim() || !validateEmail(formData.email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: BRAND.spacing.component,
          animation: "fadeInUp 0.6s ease forwards",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: BRAND.spacing.element }}>✓</div>
        <p style={{ fontFamily: BRAND.fonts.body, fontSize: "18px", color: BRAND.white }}>
          {COPY.join.success[lang]}
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontFamily: BRAND.fonts.body,
    fontSize: "16px",
    border: `1px solid ${BRAND.white}40`,
    borderRadius: "6px",
    background: `${BRAND.white}15`,
    color: BRAND.white,
    marginBottom: BRAND.spacing.element,
    minHeight: "44px",
  };

  return (
    <div style={{ maxWidth: "560px", margin: "0 auto" }}>
      <div>
        <label htmlFor="join-name" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.white, marginBottom: "4px" }}>
          {COPY.join.namePlaceholder[lang]}
        </label>
        <input
          id="join-name"
          type="text"
          placeholder={COPY.join.namePlaceholder[lang]}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="join-email" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.white, marginBottom: "4px" }}>
          {COPY.join.emailPlaceholder[lang]}
        </label>
        <input
          id="join-email"
          type="email"
          placeholder={COPY.join.emailPlaceholder[lang]}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="join-lang" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.white, marginBottom: "4px" }}>
          {COPY.join.langLabel[lang]}
        </label>
        <select
          id="join-lang"
          value={formData.lang}
          onChange={(e) => setFormData({ ...formData, lang: e.target.value })}
          style={{
            ...inputStyle,
            appearance: "auto",
            cursor: "pointer",
          }}
        >
          <option value="EN">English</option>
          <option value="FR">Français</option>
          <option value="Kreyol">Kreyòl</option>
        </select>
      </div>
      {status === "error" && (
        <p style={{ fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.accent, marginBottom: BRAND.spacing.element }}>
          {lang === "EN" ? "Please fill in all fields with a valid email." : lang === "FR" ? "Veuillez remplir tous les champs avec un courriel valide." : "Tanpri ranpli tout chan yo ak yon imèl valab."}
        </p>
      )}
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: "16px",
          fontFamily: BRAND.fonts.body,
          fontSize: "18px",
          fontWeight: 500,
          background: BRAND.accent,
          color: BRAND.primary,
          border: "none",
          borderRadius: "6px",
          cursor: status === "loading" ? "wait" : "pointer",
          minHeight: "44px",
          opacity: status === "loading" ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {status === "loading" ? "..." : COPY.join.submit[lang]}
      </button>
    </div>
  );
}

function NewsletterStrip({ lang }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return (
      <p style={{ fontFamily: BRAND.fonts.body, fontSize: "16px", color: BRAND.accent, textAlign: "center" }}>
        {COPY.newsletter.success[lang]}
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: BRAND.spacing.element,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
        <h3
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "24px",
            fontWeight: 700,
            color: BRAND.white,
            marginBottom: "8px",
          }}
        >
          {COPY.newsletter.heading[lang]}
        </h3>
        <p style={{ fontFamily: BRAND.fonts.body, fontSize: "15px", color: `${BRAND.white}CC` }}>
          {COPY.newsletter.desc[lang]}
        </p>
      </div>
      <div style={{ display: "flex", flex: "1 1 300px", minWidth: "280px", gap: BRAND.spacing.base, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label htmlFor="newsletter-email" style={{ position: "absolute", left: "-9999px" }}>
            {COPY.newsletter.placeholder[lang]}
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={COPY.newsletter.placeholder[lang]}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
            style={{
              width: "100%",
              padding: "12px 16px",
              fontFamily: BRAND.fonts.body,
              fontSize: "16px",
              border: status === "error" ? `2px solid ${BRAND.accent}` : `1px solid ${BRAND.white}40`,
              borderRadius: "6px",
              background: `${BRAND.white}10`,
              color: BRAND.white,
              minHeight: "44px",
            }}
          />
        </div>
        <button
          onClick={handleSubscribe}
          disabled={status === "loading"}
          style={{
            padding: "12px 24px",
            fontFamily: BRAND.fonts.body,
            fontSize: "16px",
            fontWeight: 500,
            background: "transparent",
            color: BRAND.secondary,
            border: `2px solid ${BRAND.secondary}`,
            borderRadius: "6px",
            cursor: status === "loading" ? "wait" : "pointer",
            minHeight: "44px",
            minWidth: "44px",
            whiteSpace: "nowrap",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.secondary; e.currentTarget.style.color = BRAND.white; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BRAND.secondary; }}
        >
          {status === "loading" ? "..." : COPY.newsletter.subscribe[lang]}
        </button>
      </div>
    </div>
  );
}

function ContactForm({ lang }) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSend = () => {
    if (!contact.name.trim() || !validateEmail(contact.email) || !contact.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return (
      <p style={{ fontFamily: BRAND.fonts.body, fontSize: "16px", color: BRAND.accent, textAlign: "center", padding: BRAND.spacing.component }}>
        {COPY.contact.success[lang]}
      </p>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontFamily: BRAND.fonts.body,
    fontSize: "16px",
    border: `1px solid ${BRAND.white}40`,
    borderRadius: "6px",
    background: `${BRAND.white}10`,
    color: BRAND.white,
    marginBottom: BRAND.spacing.element,
    minHeight: "44px",
  };

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <h3
        style={{
          fontFamily: BRAND.fonts.display,
          fontSize: "24px",
          fontWeight: 700,
          color: BRAND.white,
          marginBottom: BRAND.spacing.element,
          textAlign: "center",
        }}
      >
        {COPY.contact.heading[lang]}
      </h3>
      <div>
        <label htmlFor="contact-name" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: `${BRAND.white}CC`, marginBottom: "4px" }}>
          {COPY.contact.namePlaceholder[lang]}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={COPY.contact.namePlaceholder[lang]}
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="contact-email" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: `${BRAND.white}CC`, marginBottom: "4px" }}>
          {COPY.contact.emailPlaceholder[lang]}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={COPY.contact.emailPlaceholder[lang]}
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="contact-message" style={{ display: "block", fontFamily: BRAND.fonts.body, fontSize: "14px", color: `${BRAND.white}CC`, marginBottom: "4px" }}>
          {COPY.contact.messagePlaceholder[lang]}
        </label>
        <textarea
          id="contact-message"
          placeholder={COPY.contact.messagePlaceholder[lang]}
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
          rows={4}
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
        />
      </div>
      {status === "error" && (
        <p style={{ fontFamily: BRAND.fonts.body, fontSize: "14px", color: BRAND.accent, marginBottom: BRAND.spacing.element }}>
          {lang === "EN" ? "Please fill in all fields with a valid email." : lang === "FR" ? "Veuillez remplir tous les champs avec un courriel valide." : "Tanpri ranpli tout chan yo ak yon imèl valab."}
        </p>
      )}
      <button
        onClick={handleSend}
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: "14px",
          fontFamily: BRAND.fonts.body,
          fontSize: "16px",
          fontWeight: 500,
          background: "transparent",
          color: BRAND.secondary,
          border: `2px solid ${BRAND.secondary}`,
          borderRadius: "6px",
          cursor: status === "loading" ? "wait" : "pointer",
          minHeight: "44px",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.secondary; e.currentTarget.style.color = BRAND.white; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BRAND.secondary; }}
      >
        {status === "loading" ? "..." : COPY.contact.send[lang]}
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// 10. SECTION COMPONENTS
// ════════════════════════════════════════════════════════════

function HeroSection({ lang }) {
  const reduced = useReducedMotion();
  const scrollToJoin = () => {
    const el = document.getElementById("join");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="hero"
      style={{
        background: BRAND.primary,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div style={{ maxWidth: "820px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: 700,
            color: BRAND.accent,
            lineHeight: 1.2,
            marginBottom: BRAND.spacing.element,
            animation: reduced ? "none" : "fadeInUp 0.6s ease both",
          }}
        >
          {COPY.hero.line1[lang]}
        </h1>
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.white,
            lineHeight: 1.3,
            marginBottom: BRAND.spacing.element,
            animation: reduced ? "none" : "fadeInUp 0.8s ease 0.2s both",
          }}
        >
          {COPY.hero.line2[lang]}
        </h2>
        <p
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: "clamp(17px, 2.5vw, 20px)",
            color: `${BRAND.white}CC`,
            lineHeight: 1.5,
            marginBottom: BRAND.spacing.component,
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            animation: reduced ? "none" : "fadeInUp 0.8s ease 0.2s both",
          }}
        >
          {COPY.hero.line3[lang]}
        </p>
        <p
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: "clamp(15px, 2vw, 17px)",
            color: `${BRAND.white}99`,
            lineHeight: 1.5,
            marginBottom: "40px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            animation: reduced ? "none" : "fadeInUp 0.8s ease 0.3s both",
          }}
        >
          {COPY.hero.sub[lang]}
        </p>
        <button
          onClick={scrollToJoin}
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: "18px",
            fontWeight: 500,
            color: BRAND.accent,
            background: "transparent",
            border: `2px solid ${BRAND.accent}`,
            borderRadius: "6px",
            padding: "14px 40px",
            cursor: "pointer",
            minHeight: "44px",
            transition: "background 0.2s, color 0.2s",
            animation: reduced ? "none" : "fadeInUp 1s ease 0.4s both",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.accent; e.currentTarget.style.color = BRAND.primary; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BRAND.accent; }}
        >
          {COPY.hero.cta[lang]}
        </button>
      </div>
    </section>
  );
}

function MirrorSection({ lang }) {
  const reduced = useReducedMotion();
  return (
    <section
      id="mirror"
      style={{
        background: BRAND.neutral,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.primary,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          {COPY.mirror.heading[lang]}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: BRAND.spacing.component,
          }}
        >
          {COPY.mirror.statements.map((stmt, i) => (
            <div
              key={i}
              style={{
                background: BRAND.white,
                borderLeft: `4px solid ${BRAND.accent}`,
                borderRadius: "0 8px 8px 0",
                padding: "24px",
                fontFamily: BRAND.fonts.body,
                fontSize: "17px",
                lineHeight: 1.6,
                color: BRAND.primary,
                animation: reduced ? "none" : `fadeInUp 0.6s ease ${i * 0.12}s both`,
              }}
            >
              {stmt[lang]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection({ lang }) {
  return (
    <section
      id="philosophy"
      style={{
        background: BRAND.highlight,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <PhilosophyAnchor lang={lang} />
    </section>
  );
}

function OfferSection({ lang }) {
  const reduced = useReducedMotion();
  const statsRef = { current: null };
  const setStatsRef = (el) => { statsRef.current = el; };

  return (
    <section
      id="offer"
      style={{
        background: BRAND.white,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.primary,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          {COPY.offer.heading[lang]}
        </h2>
        <div
          ref={setStatsRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: BRAND.spacing.component,
            marginBottom: "64px",
          }}
        >
          {STATS_DATA.map((stat, i) => (
            <AnimatedStat
              key={stat.labelKey}
              value={stat.value}
              suffix={stat.suffix}
              label={COPY.stats[stat.labelKey][lang]}
              triggerRef={statsRef}
            />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: BRAND.spacing.component,
          }}
        >
          {PILLARS_DATA.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} lang={lang} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection({ lang }) {
  const reduced = useReducedMotion();
  return (
    <section
      id="story"
      style={{
        background: BRAND.neutral,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
            width: "200px",
            minWidth: "200px",
            animation: reduced ? "none" : "fadeInLeft 0.5s ease both",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: BRAND.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: BRAND.fonts.display,
              fontSize: "64px",
              fontWeight: 700,
              color: BRAND.accent,
            }}
            aria-label="Pierre Placide"
          >
            PP
          </div>
        </div>
        <div
          style={{
            flex: "1 1 400px",
            minWidth: "280px",
            animation: reduced ? "none" : "fadeInRight 0.5s ease both",
          }}
        >
          <h2
            style={{
              fontFamily: BRAND.fonts.display,
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: BRAND.primary,
              marginBottom: BRAND.spacing.component,
            }}
          >
            {COPY.story.heading[lang]}
          </h2>
          {COPY.story.body[lang].split("\n\n").map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: BRAND.fonts.body,
                fontSize: "16px",
                lineHeight: 1.7,
                color: BRAND.primary,
                marginBottom: BRAND.spacing.element,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection({ lang }) {
  const reduced = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "EN", "FR", "Kreyol"];
  const filtered =
    activeFilter === "All"
      ? RESOURCES_DATA
      : RESOURCES_DATA.filter((r) => r.langs.includes(activeFilter));

  return (
    <section
      id="resources"
      style={{
        background: BRAND.primary,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.white,
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          {COPY.resources.heading[lang]}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: BRAND.spacing.base,
            marginBottom: "40px",
            flexWrap: "wrap",
            overflowX: "auto",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-label={`Filter resources by ${f}`}
              style={{
                fontFamily: BRAND.fonts.mono,
                fontSize: "14px",
                padding: "8px 20px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                minHeight: "44px",
                minWidth: "44px",
                background: activeFilter === f ? BRAND.accent : "transparent",
                color: activeFilter === f ? BRAND.primary : BRAND.white,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {f === "All" ? COPY.resources.filterAll[lang] : f}
            </button>
          ))}
        </div>
        <div
          key={activeFilter}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: BRAND.spacing.component,
          }}
        >
          {filtered.map((resource, i) => (
            <ResourceCard key={resource.title + activeFilter} resource={resource} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MembersSection({ lang }) {
  const reduced = useReducedMotion();
  return (
    <section
      id="members"
      style={{
        background: BRAND.neutral,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.primary,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          {COPY.members.heading[lang]}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: BRAND.spacing.component,
          }}
        >
          {MEMBERS_DATA.map((member, i) => (
            <MemberCard key={i} member={member} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinSection({ lang }) {
  const reduced = useReducedMotion();
  return (
    <section
      id="join"
      style={{
        background: BRAND.highlight,
        padding: `${BRAND.spacing.section} ${BRAND.spacing.component}`,
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
          animation: reduced ? "none" : "fadeInUp 0.6s ease both",
        }}
      >
        <h2
          style={{
            fontFamily: BRAND.fonts.display,
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: BRAND.white,
            marginBottom: BRAND.spacing.element,
          }}
        >
          {COPY.join.heading[lang]}
        </h2>
        <p
          style={{
            fontFamily: BRAND.fonts.body,
            fontSize: "17px",
            color: `${BRAND.white}CC`,
            lineHeight: 1.6,
            marginBottom: "40px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {COPY.join.desc[lang]}
        </p>
        <JoinForm lang={lang} />
      </div>
    </section>
  );
}

function NewsletterSection({ lang }) {
  const reduced = useReducedMotion();
  return (
    <section
      id="newsletter"
      style={{
        background: BRAND.primary,
        padding: `60px ${BRAND.spacing.component}`,
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          animation: reduced ? "none" : "fadeInUp 0.6s ease both",
        }}
      >
        <NewsletterStrip lang={lang} />
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════
// 11. APP — single default export
// ════════════════════════════════════════════════════════════

// SEO metadata (to be placed in <head> when deployed):
// <title>Ayiti pa ka tann | AIPLACIDE Community</title>
// <meta name="description" content="A community for Haitian entrepreneurs building with AI in English, French, and Kreyol. Join Pierre Placide and build what's next." />
// <meta property="og:title" content="Ayiti pa ka tann | AIPLACIDE Community" />
// <meta property="og:description" content="A community for Haitian entrepreneurs building with AI in English, French, and Kreyol." />
// <meta property="og:image" content="[CLIENT_DATA NEEDED: OG image URL]" />
// <link rel="canonical" href="[CLIENT_DATA NEEDED: canonical URL]" />

export default function App() {
  const [lang, setLang] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = GLOBAL_CSS;
    document.head.appendChild(styleEl);

    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = FONT_URL;
    document.head.appendChild(linkEl);

    const titleEl = document.querySelector("title") || document.createElement("title");
    titleEl.textContent = "Ayiti pa ka tann | AIPLACIDE Community";
    if (!document.querySelector("title")) document.head.appendChild(titleEl);

    return () => {
      document.head.removeChild(styleEl);
      document.head.removeChild(linkEl);
    };
  }, []);

  const navLinks = [
    { id: "mirror", label: COPY.nav.links[lang][0] },
    { id: "philosophy", label: COPY.nav.links[lang][1] },
    { id: "offer", label: COPY.nav.links[lang][2] },
    { id: "resources", label: COPY.nav.links[lang][3] },
    { id: "join", label: COPY.nav.links[lang][4] },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: BRAND.fonts.body, color: BRAND.primary, background: BRAND.neutral }}>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <ScrollProgress />

      <nav
        style={{
          position: "fixed",
          top: "3px",
          left: 0,
          right: 0,
          zIndex: 90,
          background: `${BRAND.primary}F2`,
          backdropFilter: "blur(8px)",
          padding: `12px ${BRAND.spacing.component}`,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: BRAND.spacing.element,
          }}
        >
          <div
            style={{
              fontFamily: BRAND.fonts.display,
              fontSize: "20px",
              fontWeight: 700,
              color: BRAND.white,
              letterSpacing: "1px",
              cursor: "pointer",
            }}
            onClick={() => scrollTo("hero")}
          >
            {COPY.nav.brand}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: BRAND.white,
              fontSize: "24px",
              cursor: "pointer",
              minHeight: "44px",
              minWidth: "44px",
              alignItems: "center",
              justifyContent: "center",
            }}
            ref={(el) => {
              if (el) {
                const mq = window.matchMedia("(max-width: 768px)");
                el.style.display = mq.matches ? "flex" : "none";
                const handler = (e) => { el.style.display = e.matches ? "flex" : "none"; };
                mq.addEventListener("change", handler);
              }
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          <div
            ref={(el) => {
              if (el) {
                const mq = window.matchMedia("(max-width: 768px)");
                const update = (matches) => {
                  if (matches) {
                    el.style.display = mobileMenuOpen ? "flex" : "none";
                    el.style.flexDirection = "column";
                    el.style.width = "100%";
                    el.style.paddingTop = "12px";
                  } else {
                    el.style.display = "flex";
                    el.style.flexDirection = "row";
                    el.style.width = "auto";
                    el.style.paddingTop = "0";
                  }
                };
                update(mq.matches);
                mq.addEventListener("change", (e) => update(e.matches));
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: BRAND.spacing.element,
              flexWrap: "wrap",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: `${BRAND.white}CC`,
                  fontFamily: BRAND.fonts.body,
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: "8px 4px",
                  minHeight: "44px",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = `${BRAND.white}CC`; }}
              >
                {link.label}
              </button>
            ))}
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      <main id="main-content">
        <HeroSection lang={lang} />
        <MirrorSection lang={lang} />
        <PhilosophySection lang={lang} />
        <OfferSection lang={lang} />
        <StorySection lang={lang} />
        <ResourcesSection lang={lang} />
        <MembersSection lang={lang} />
        <JoinSection lang={lang} />
        <NewsletterSection lang={lang} />
      </main>

      <footer
        style={{
          background: BRAND.primary,
          padding: `60px ${BRAND.spacing.component} 40px`,
          borderTop: `3px solid ${BRAND.accent}`,
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <ContactForm lang={lang} />
          <div
            style={{
              marginTop: "60px",
              textAlign: "center",
              borderTop: `1px solid ${BRAND.white}20`,
              paddingTop: "40px",
            }}
          >
            <p
              style={{
                fontFamily: BRAND.fonts.display,
                fontSize: "20px",
                fontWeight: 700,
                color: BRAND.accent,
                marginBottom: BRAND.spacing.element,
                fontStyle: "italic",
              }}
            >
              {COPY.footer.tagline[lang]}
            </p>
            <p
              style={{
                fontFamily: BRAND.fonts.body,
                fontSize: "14px",
                color: `${BRAND.white}99`,
                marginBottom: BRAND.spacing.base,
              }}
            >
              {COPY.footer.cultural[lang]}
            </p>
            <p
              style={{
                fontFamily: BRAND.fonts.mono,
                fontSize: "13px",
                color: `${BRAND.white}66`,
              }}
            >
              {COPY.footer.credit}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
