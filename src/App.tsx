import { useEffect, useRef, useState, type RefObject } from "react";
import "./App.css";

/** Foto hero salvate — attiva quella che preferisci */
const HERO_IMAGES = {
  // attuale
  nightCity:
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2400&q=80",
  // precedente (grattacieli di giorno)
  towers:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
} as const;

const HERO_IMAGE = HERO_IMAGES.nightCity;

const marqueeItems = [
  "Design",
  "Sviluppo",
  "Brand",
  "E-commerce",
  "Performance",
  "Motion",
  "SEO",
  "Launch",
];

const projects = [
  {
    name: "Blanchir",
    type: "Brand site",
    place: "Brescia",
    url: "https://blanchir.it",
    domain: "blanchir.it",
    text: "Tinteggiature, decorazioni e resine — un sito che vende affidabilità e qualità.",
    image: "/work/blanchir.png",
  },
  {
    name: "SavoArt",
    type: "E-commerce",
    place: "Design 3D",
    url: "https://savoart.com",
    domain: "savoart.com",
    text: "Shop di oggetti di design in stampa 3D, con collezione e catalogo chiari.",
    image: "/work/savoart.png",
  },
  {
    name: "Il Camporosso",
    type: "Hospitality",
    place: "Agriturismo",
    url: "https://agriturismocamporosso.it",
    domain: "agriturismocamporosso.it",
    text: "Agriturismo e eventi privati: atmosfera, menu e richieste in un’esperienza unica.",
    image: "/work/camporosso.png",
  },
];

const services = [
  {
    title: "Design",
    text: "Direzione visiva, tipografia e interfacce che restano in testa.",
  },
  {
    title: "Build",
    text: "Frontend veloce, codice pulito, esperienza fluida su ogni device.",
  },
  {
    title: "Grow",
    text: "Lancio, SEO tecnica e ottimizzazione continua dopo il go-live.",
  },
];

const plans = [
  {
    name: "Vetrina",
    blurb: "Per chi vuole una presenza online semplice ma professionale.",
    price: "400",
    featured: false,
    features: [
      "Sito one-page o fino a 3 pagine",
      "Design personalizzato",
      "Ottimizzato per mobile",
      "SEO base inclusa",
    ],
  },
  {
    name: "Business",
    blurb: "Per aziende che vogliono distinguersi dalla concorrenza.",
    price: "900",
    featured: true,
    features: [
      "Fino a 7 pagine",
      "Design premium su misura",
      "SEO avanzata + copywriting",
      "Form contatti + Google Maps",
      "2 mesi di supporto incluso",
    ],
  },
  {
    name: "E-commerce",
    blurb: "Per chi vuole vendere online con un negozio professionale.",
    price: "2.000",
    featured: false,
    features: [
      "Catalogo prodotti completo",
      "Carrello e pagamenti sicuri",
      "Gestione ordini autonoma",
      "SEO per e-commerce",
      "4 mesi di supporto incluso",
    ],
  },
];

function useReveal(): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    node.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page" ref={pageRef}>
      <header className={`nav ${scrolled ? "is-solid" : ""}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          Savo<span>Web</span>
        </a>
        <nav className={`nav__links ${menuOpen ? "is-open" : ""}`} aria-label="Principale">
          <a href="#lavori" onClick={closeMenu}>
            Lavori
          </a>
          <a href="#servizi" onClick={closeMenu}>
            Servizi
          </a>
          <a href="#prezzi" onClick={closeMenu}>
            Prezzi
          </a>
          <a href="#contatti" onClick={closeMenu}>
            Contatti
          </a>
        </nav>
        <a className="nav__cta" href="#contatti" onClick={closeMenu}>
          Parliamone
        </a>
        <button
          className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img
              src={HERO_IMAGE}
              alt="Skyline urbano — SavoWeb, creazione siti web a Brescia"
              width={2400}
              height={1600}
              fetchPriority="high"
            />
            <div className="hero__veil" />
          </div>

          <div className="hero__frame">
            <p className="hero__brand">
              <span>Savo</span>
              <span>Web</span>
            </p>
            <div className="hero__copy">
              <h1>Creazione siti web a Brescia.</h1>
              <p>
                SavoWeb è l’agenzia web a Brescia per brand che vogliono un
                digitale netto, moderno e impossibile da scorrere via.
              </p>
              <div className="hero__actions">
                <a className="btn btn--accent" href="#contatti">
                  Inizia ora
                </a>
                <a className="btn btn--line" href="#lavori">
                  Vedi i lavori
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </div>

        <section className="work" id="lavori">
          <div className="work__head reveal">
            <p className="eyebrow">Lavori selezionati</p>
            <h2>Progetti reali, online ora.</h2>
          </div>
          <ul className="work__list">
            {projects.map((project, i) => (
              <li
                className="work__item reveal"
                key={project.name}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <a
                  href={project.url}
                  className="work__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work__media">
                    <img
                      src={project.image}
                      alt={`Sito web ${project.name} — ${project.type} realizzato da SavoWeb`}
                      loading="lazy"
                      width={1600}
                      height={900}
                    />
                  </div>
                  <div className="work__meta">
                    <div className="work__info">
                      <p className="work__index">0{i + 1}</p>
                      <h3>{project.name}</h3>
                      <p className="work__text">{project.text}</p>
                      <p className="work__tags">
                        {project.type} · {project.place}
                      </p>
                    </div>
                    <span className="work__cta">
                      {project.domain}
                      <i aria-hidden="true">↗</i>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="services" id="servizi">
          <div className="services__head reveal">
            <p className="eyebrow">Servizi web a Brescia</p>
            <h2>
              Ideo, costruisco
              <br />e metto online.
            </h2>
          </div>
          <ul className="services__list">
            {services.map((item, i) => (
              <li
                className="services__item reveal"
                key={item.title}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pricing" id="prezzi">
          <div className="pricing__head reveal">
            <p className="eyebrow">Prezzi trasparenti</p>
            <h2>Quanto costa? Te lo diciamo subito.</h2>
            <p className="pricing__lead">
              Niente preventivi a sorpresa. Ecco i nostri pacchetti.
            </p>
          </div>
          <ul className="pricing__grid">
            {plans.map((plan, i) => (
              <li
                className={`pricing__card reveal ${plan.featured ? "is-featured" : ""}`}
                key={plan.name}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {plan.featured ? (
                  <p className="pricing__badge">Più scelto</p>
                ) : null}
                <h3>{plan.name}</h3>
                <p className="pricing__blurb">{plan.blurb}</p>
                <p className="pricing__from">A partire da</p>
                <p className="pricing__price">
                  <span>€</span>
                  {plan.price}
                </p>
                <ul className="pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  className={`btn ${plan.featured ? "btn--accent" : "btn--line"}`}
                  href={`mailto:info@savoweb.com?subject=${encodeURIComponent(`Preventivo pacchetto ${plan.name}`)}`}
                >
                  Richiedi preventivo
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact" id="contatti">
          <div className="contact__inner reveal">
            <p className="eyebrow">Contatti Brescia</p>
            <h2>
              Hai un’idea?
              <br />
              Facciamola vivere.
            </h2>
            <p className="contact__note">
              Lavoro con aziende e professionisti a Brescia e in tutta la
              Lombardia. Scrivimi: risposta entro 24 ore.
            </p>
            <a className="contact__mail" href="mailto:info@savoweb.com">
              info@savoweb.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__left">
          <span className="footer__name">
            Savo<span>Web</span>
          </span>
          <span className="footer__place">Brescia, Italia</span>
          <a className="footer__privacy" href="/privacy">
            Privacy Policy
          </a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
