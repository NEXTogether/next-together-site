// components/PrivacyPolicy.tsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#111216] w-full">
      <article className="pt-40 max-w-4xl mx-auto px-6 py-10 text-gray-200">
        <h1 className="text-3xl font-bold text-white mb-2">
          Informativa sulla Privacy – Next:Together
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Ultimo aggiornamento: 14 settembre 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Introduzione
          </h2>
          <p>
            Benvenuto su{" "}
            <a
              href="https://www.next-together.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.next-together.com
            </a>
            .<br />
            La tua privacy e la protezione dei tuoi dati personali sono per noi
            una priorità. Ti informiamo che i dati personali oggetto di
            trattamento potranno essere costituiti da un identificativo come il
            nome, un numero di identificazione, dati relativi all’ubicazione, a
            un identificativo online o a uno o più elementi caratteristici della
            tua identità fisica, fisiologica, psichica, economica, culturale o
            sociale idonea a rendere l’interessato identificato o
            identificabile, a seconda del tipo di servizi richiesti (“Dati
            Personali”).
          </p>
          <p>
            La presente informativa, redatta ai sensi del Regolamento (UE)
            2016/679 (GDPR) e delle linee guida del Garante per la protezione
            dei dati personali, descrive come raccogliamo, utilizziamo,
            condividiamo e proteggiamo i tuoi dati personali quando utilizzi il
            nostro sito e i nostri servizi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. Titolare del trattamento
          </h2>
          <p>
            Il titolare del trattamento dei dati personali è{" "}
            <strong>Next:Together</strong>, contattabile all’indirizzo email:{" "}
            <a
              href="mailto:info@next-together.com"
              className="text-blue-400 hover:underline"
            >
              info@next-together.com
            </a>
            .<br />
            Puoi contattarci per:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>revocare il consenso al trattamento dei dati,</li>
            <li>chiedere ulteriori informazioni e chiarimenti,</li>
            <li>esercitare i tuoi diritti (vedi sezione 8).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Tipologie di dati raccolti
          </h2>
          <p>
            Next:Together raccoglie e tratta, previo tuo consenso ove richiesto,
            le seguenti tipologie di dati personali:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Dati identificativi:</strong> raccolti tramite i form
              presenti nel Sito (es. “Contattaci”). Ti invitiamo a condividere
              solo dati strettamente necessari alla gestione della tua
              richiesta.
            </li>
            <li>
              <strong>Dati di navigazione:</strong> indirizzo IP, log di
              accesso, cookie (vedi Cookie Policy), raccolti in forma anonima e
              cancellati dopo l’elaborazione, salva esigenza di accertamento di
              reati informatici.
            </li>
            <li>
              <strong>Dati relativi ai servizi richiesti:</strong> creazione
              account, acquisti, pagamenti, carrello abbandonato,
              personalizzazione newsletter.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Finalità e Base Giuridica del Trattamento
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fornire i servizi:</strong> esecuzione del contratto.
            </li>
            <li>
              <strong>Gestire richieste di contatto e assistenza:</strong>{" "}
              consenso.
            </li>
            <li>
              <strong>Adempimenti di legge:</strong> obbligo legale.
            </li>
            <li>
              <strong>Migliorare servizi e sicurezza:</strong> legittimo
              interesse.
            </li>
            <li>
              <strong>Comunicazioni promozionali:</strong> consenso esplicito
              revocabile in ogni momento.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Modalità di trattamento e misure di sicurezza
          </h2>
          <p>
            I dati sono trattati con strumenti elettronici e/o cartacei nel
            rispetto dei principi di liceità, correttezza e trasparenza.
            Adottiamo misure di sicurezza adeguate per proteggere i dati da
            accessi non autorizzati, perdita, distruzione o trattamento
            illecito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Conservazione dei dati
          </h2>
          <p>
            I dati personali vengono conservati per il tempo strettamente
            necessario al perseguimento delle finalità indicate e in conformità
            alla normativa vigente. Per dettagli specifici puoi consultare la
            Cookie Policy o contattarci.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            7. Comunicazione e trasferimento dei dati
          </h2>
          <p>I tuoi dati possono essere comunicati a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              persone autorizzate dal Titolare (amministrazione, assistenza,
              IT);
            </li>
            <li>
              responsabili del trattamento (fornitori di servizi IT, legali,
              marketing);
            </li>
            <li>autorità competenti per obblighi di legge.</li>
          </ul>
          <p>
            Alcuni trasferimenti verso destinatari extra-UE possono avvenire
            solo con garanzie adeguate (Clausole Standard, Paesi sicuri,
            consulenza EDPB). Richieste di approfondimento possono essere
            inviate al Titolare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            8. Diritti dell’interessato
          </h2>
          <p>
            Puoi esercitare in qualsiasi momento i seguenti diritti (artt. 15-22
            GDPR):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>revoca del consenso;</li>
            <li>
              accesso, rettifica, cancellazione, limitazione, portabilità;
            </li>
            <li>opposizione al trattamento e alla profilazione;</li>
            <li>
              reclamo all’Autorità di controllo (art. 77) e ricorso
              giurisdizionale (art. 79).
            </li>
          </ul>
          <p>
            Per esercitare i diritti scrivi a{" "}
            <a
              href="mailto:info@next-together.com"
              className="text-blue-400 hover:underline"
            >
              info@next-together.com
            </a>{" "}
            indicando in oggetto “Richiesta esercizio diritti privacy”.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">
            9. Cookie Policy
          </h2>
          <p>
            Per maggiori informazioni sull’uso dei cookie consulta la nostra{" "}
            <a href="/cookie-policy" className="text-blue-400 hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            10. Modifiche alla Privacy Policy
          </h2>
          <p>
            Next:Together si riserva il diritto di modificare la presente
            informativa in qualsiasi momento. Eventuali aggiornamenti verranno
            pubblicati su questa pagina con data di aggiornamento.
          </p>
        </section>
      </article>
    </div>
  );
}
