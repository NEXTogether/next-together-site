import Image from "next/image";
import { GrMapLocation, GrSearchAdvanced } from "react-icons/gr";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineLoop } from "react-icons/md";
import { RxGear } from "react-icons/rx";
import { TbShieldLockFilled } from "react-icons/tb";

type TeamMember = {
  name: string;
  role: string;
  propic: string;
  immagini: string[];
};

type Supporter = {
  name: string;
  desc: string;
  pic: string;
};

export default function Pag1() {
  const team: TeamMember[] = [
    {
      name: "Ruslana Perekhrest",
      role: "CEO & Founder",
      propic: "ruslana.jpg",
      immagini: ["doppiomalto.png", "galdus.jpg"],
    },
    {
      name: "Sebastian Pugliese",
      role: "CTO & Co-Founder",
      propic: "sebastian.jpg",
      immagini: ["galdus.jpg", "netizens.jpg"],
    },
    {
      name: "Francesco Catenazzi",
      role: "Partnerships & Go-to-Market Lead",
      propic: "francesco.jpg",
      immagini: ["alleanza_assicurazioni.jpg", "doppiomalto.png"],
    },
    {
      name: "Lorenzo Troia",
      role: "Frontend Engineer",
      propic: "lorenzo.jpg",
      immagini: ["pwc.jpg", "galdus.jpg"],
    },
    {
      name: "Souad Kamch",
      role: "AI/ML Engineer",
      propic: "souad.jpg",
      immagini: ["codestorm.jpg", "galdus.jpg"],
    },
  ];

  const supporters: Supporter[] = [
    {
      name: "B4i - Bocconi for innovation",
      desc: "Programma di pre-accelerazione che ci ha aiutato a raffinare visione e modello di business",
      pic: "b4i.jpg",
    },
    {
      name: "Bridge for Billions",
      desc: "Percorso di incubazione internazionale per validazione e sviluppo sostenibile",
      pic: "bridge_for_billions.jpg",
    },
    {
      name: "Galdus",
      desc: "Galdus è il nostro ambiente di lavoro che unisce AI, analisi vendite e formazione per aiutare team e locali a scalare in modo sostenibile: più ricavi, processi chiari, persone formate.",
      pic: "galdus.jpg",
    },
    {
      name: "Google for Startups",
      desc: "Grazie a Google for Startups, disponiamo di crediti per servizi cloud e AI che ci aiutano a scalare in modo sostenibile",
      pic: "googlestartups.jpg",
    },
    {
      name: "Refugee Restart",
      desc: "Team eterogeneo e complementare, guidato da una motivazione eccezionale. NEXT:Together ha dimostrato una rara capacità di tradurre i bisogni reali dei clienti in un'innovazione concreta e immediatamente efficace, focalizzando il valore con precisione chirurgica.",
      pic: "refugee_restart.jpg",
    },
  ];

  return (
    <div>
      <div
        className="flex flex-col lg:flex-col gap-10 py-10 px-10 xl:px-50 min-h-screen w-full text-left items-center justify-center mt-20"
        id="supporters"
      >
        <div className="flex-row">
          <h1 className="text-2xl sm:text-4xl md:text-6xl">Supported By</h1>
          <h2 className="sm:text-2xl md:text-3xl">
            Next:Together è già stato supportato da prestigiosi programmi di
            innovazione che credono nel valore della formazione continua:
          </h2>
        </div>
        <div className="w-full max-w-7xl mx-auto p-4">
          {/* La griglia: 2 colonne fisse con spaziatura */}
          <div className="grid w-full grid-cols-2 gap-4">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-center items-center gap-4"
              >
                <div className="relative w-full md:w-1/3 aspect-square">
                  <Image
                    src={`/${supporter.pic}`}
                    alt={supporter.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>

                {/* CONTENUTO TESTUALE */}
                <div className="w-full md:w-2/3 flex-grow text-white">
                  <h1 className="font-bold text-lg">{supporter.name}</h1>
                  <p className="text-sm">{supporter.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-col gap-10 py-10 px-10 xl:px-50 min-h-screen w-full text-left items-center justify-center mt-20"
        id="team"
      >
        <div className="flex-row space-y-5">
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-center font-bold">
            Vuoi far parte del futuro della formazione?
          </h1>
          <h2 className="sm:text-2xl md:text-3xl text-center">
            Inizia il Tuo Viaggio di Crescita con NOI
          </h2>
        </div>
        <div className="w-full max-w-7xl mx-auto p-4">
          {/* La griglia: 2 colonne fisse con spaziatura */}
          <div className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={`/${member.propic}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover rounded-md"
                  />
                </div>

                {/* CONTENUTO TESTUALE */}
                <div className="w-full flex-grow text-white">
                  <h1 className="font-bold text-lg">{member.name}</h1>
                  <p className="">{member.role}</p>
                </div>

                <div className="flex flex-col gap-2 w-full h-full">
                  {member.immagini.map((immagineSrc, idx) => (
                    // Usiamo il tag <img> standard
                    <img
                      key={idx}
                      src={`/${immagineSrc}`}
                      alt={`Immagine ${idx + 1} di ${member.name}`}
                      className="w-full h-auto rounded-md"
                      // Aggiungiamo il lazy loading per una migliore performance
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-col gap-10 py-10 px-5 xl:px-50 min-h-screen w-full text-left items-center justify-center mt-20"
        id="features"
      >
        <div className="self-start flex-row space-y-5">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Funzionalitá Chiave:
          </h1>
          <h2 className="sm:text-2xl md:text-3xl">
            Orientati senza sforzo in un flusso chiaro
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full mx-auto gap-4">
          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <RxGear className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">Semplicità d’uso</h1>
            <p className="text-2xl">
              Editor intuitivo, nessuna configurazione complessa md:{" "}
            </p>
          </div>

          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <GrSearchAdvanced className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">Semplicità d’uso</h1>
            <p className="text-2xl">
              Tutto indicizzato: corsi, prove, attestati. md:{" "}
            </p>
          </div>

          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <LuBookOpenCheck className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">
              Corsi personalizzati
            </h1>
            <p className=" md:text-2xl">
              Crea moduli testuali o visuali, arricchiti con quiz e materiali.
            </p>
          </div>

          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <GrMapLocation className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">
              Roadmap formative
            </h1>
            <p className=" md:text-2xl">
              Percorsi sequenziali e adattivi per team e ruoli.
            </p>
          </div>

          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <MdOutlineLoop className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">
              Valutazione continua
            </h1>
            <p className=" md:text-2xl">
              Feedback a 360°, prove pratiche e indicatori di performance.
            </p>
          </div>

          <div className="bg-linear-to-r from-[#5270ff] to-[#fc66c5] p-2 md:p-4 rounded-2xl">
            <TbShieldLockFilled className="text-8xl mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl">
              Privacy e sicurezza
            </h1>
            <p className=" md:text-2xl">
              Conformità GDPR/AI Act, audit trail e accessi per ruolo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
