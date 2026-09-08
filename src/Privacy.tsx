import { useEffect } from "react";
import "./Privacy.css";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | SavoWeb — Brescia";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Privacy Policy di SavoWeb, agenzia web a Brescia. Informativa sul trattamento dei dati personali ai sensi del GDPR.",
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy">
      <header className="privacy__nav">
        <a className="privacy__brand" href="/">
          Savo<span>Web</span>
        </a>
        <a className="privacy__back" href="/">
          Torna alla home
        </a>
      </header>

      <main className="privacy__main">
        <p className="eyebrow">Informativa</p>
        <h1>Privacy Policy</h1>
        <p className="privacy__updated">Ultimo aggiornamento: 7 settembre 2026</p>

        <section>
          <h2>1. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali è{" "}
            <strong>SavoWeb</strong>, con sede operativa a Brescia (BS), Italia,
            contattabile all’indirizzo email:{" "}
            <a href="mailto:info@savoweb.com">info@savoweb.com</a>
          </p>
        </section>

        <section>
          <h2>2. Dati raccolti</h2>
          <p>
            Quando ci contatti tramite il nostro sito web, raccogliamo
            esclusivamente i dati che ci fornisci volontariamente:
          </p>
          <ul>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono (se fornito)</li>
            <li>Contenuto del messaggio</li>
          </ul>
        </section>

        <section>
          <h2>3. Finalità del trattamento</h2>
          <p>I tuoi dati personali vengono trattati esclusivamente per:</p>
          <ul>
            <li>Rispondere alle tue richieste di informazioni</li>
            <li>Fornirti preventivi per i nostri servizi</li>
            <li>Gestire eventuali rapporti contrattuali</li>
          </ul>
        </section>

        <section>
          <h2>4. Base giuridica</h2>
          <p>
            Il trattamento dei tuoi dati si basa sul tuo consenso esplicito,
            fornito al momento del contatto, e sulla necessità di eseguire
            misure precontrattuali su tua richiesta (art. 6, par. 1, lett. a) e
            b) del GDPR).
          </p>
        </section>

        <section>
          <h2>5. Conservazione dei dati</h2>
          <p>
            I tuoi dati personali vengono conservati per il tempo strettamente
            necessario a rispondere alla tua richiesta e, in caso di rapporto
            contrattuale, per il periodo previsto dalla legge per gli obblighi
            fiscali e contabili.
          </p>
        </section>

        <section>
          <h2>6. Condivisione dei dati</h2>
          <p>
            I tuoi dati non vengono venduti, ceduti o condivisi con terze parti
            per finalità di marketing. Potranno essere comunicati solo a
            soggetti che forniscono servizi strumentali alle nostre attività
            (es. servizi di hosting), che agiscono in qualità di responsabili
            del trattamento.
          </p>
        </section>

        <section>
          <h2>7. I tuoi diritti</h2>
          <p>Ai sensi del GDPR, hai il diritto di:</p>
          <ul>
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiedere la rettifica o la cancellazione dei dati</li>
            <li>Richiedere la limitazione del trattamento</li>
            <li>Opporti al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento</li>
          </ul>
          <p>
            Per esercitare i tuoi diritti, puoi contattarci all’indirizzo:{" "}
            <a href="mailto:info@savoweb.com">info@savoweb.com</a>
          </p>
        </section>

        <section>
          <h2>8. Cookie</h2>
          <p>
            Questo sito web non utilizza cookie di profilazione. Vengono
            utilizzati esclusivamente cookie tecnici necessari al funzionamento
            del sito, che non richiedono il consenso dell’utente.
          </p>
        </section>

        <section>
          <h2>9. Modifiche alla Privacy Policy</h2>
          <p>
            Ci riserviamo il diritto di modificare questa Privacy Policy in
            qualsiasi momento. Le modifiche saranno pubblicate su questa pagina
            con indicazione della data di ultimo aggiornamento.
          </p>
        </section>

        <section>
          <h2>10. Contatti</h2>
          <p>
            Per qualsiasi domanda riguardante questa Privacy Policy o il
            trattamento dei tuoi dati personali, puoi contattarci a:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@savoweb.com">info@savoweb.com</a>
            </li>
            <li>Sede: Brescia, Italia</li>
          </ul>
        </section>

        <a className="privacy__home" href="/">
          Torna alla home
        </a>
      </main>

      <footer className="privacy__footer">
        <span>© {new Date().getFullYear()} SavoWeb. Tutti i diritti riservati.</span>
      </footer>
    </div>
  );
}
