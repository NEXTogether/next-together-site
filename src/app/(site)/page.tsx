import Image from "next/image";
import UsersPreview from "../components/UsersPreview";
import SampleCourse from "../components/SampleCourse";
import PlansList from "../components/PlansList";
import CreateCourse from "../components/CreateCourse";

export default function Home() {
  const employees = {
    "Sarah Jhonson": {
      companyRole: "Frontend Developer",
      progress: 72,
      startColor: "#3e7ff5",
      endColor: "#845df4",
    },
    "Mike Chen": {
      companyRole: "Backend Developer",
      progress: 25,
      startColor: "#21c163",
      endColor: "#3984e9",
    },
    "Emma Davis": {
      companyRole: "UX Designer",
      progress: 97,
      startColor: "#8e5af2",
      endColor: "#f0489e",
    },
  };

  const courses = {
    "Advanced JavaScript Patterns": {
      description: "Master advanced concepts and design patterns in JavaScript",
      abbreviation: "JS",
      status: "In progress",
      startingDate: "/",
      lessonsDone: 6,
      totalLessons: 10,
      hours: 12,
      remainingHours: 4,
      startColor: "#3e7ff5",
      endColor: "#845df4",
    },
    "Node.js Backend Development": {
      description: "Backend Developer",
      abbreviation: "N",
      status: "Starting",
      startingDate: "Next Monday",
      lessonsDone: 2,
      totalLessons: 10,
      hours: 20,
      remainingHours: 4,
      startColor: "#21c163",
      endColor: "#3984e9",
    },
  };

  const plans = {
    start: {
      price: 200,
      description:
        "Tutto ciò che serve per iniziare, per aziende con meno di 20 dipendenti:",
      features: [
        "Talent Card dinamiche",
        "Dashboard manageriale",
        "Roadmap formative personalizzate",
        "Supporto via email",
      ],
      buttonText: "Richiedi la Demo",
      buttonHref: "/demo-form",
    },
    grow: {
      price: 300,
      description: "Per aziende in cresita da 20 a 100 dipendenti:",
      features: [
        "Tutte le funzionalitá del piano START",
        "Piattaforma scalata per team piú ampi",
      ],
      buttonText: "Richiedi la Demo",
      buttonHref: "/demo-form",
    },
    enterprise: {
      price: 0,
      description: "Per aziende con oltre 100 dipendenti:",
      features: [
        "Personalizzazione su misura (branding, integrazioni HR, policy interne)",
        "Supporto dedicato",
      ],
      buttonText: "Contattaci",
    },
  };

  return (
    <div className="font-sans border-red-500">
      {/* Primo Capitolo */}
      <div className="px-5 md:px-10 lg:px-50 flex flex-col justify-center items-center min-h-screen max-h-screen overflow-hidden pt-40">
        {/* Logo */}
        {/* <div className="flex w-full md:w-125 items-stretch h-auto">
          <div className="flex-1 aspect-square relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 50vw, 96px"
              className="object-contain border-yellow-500"
            />
          </div>
          <div className="flex-[5] aspect-[5/1] relative">
            <Image
              src="/logo_esteso.png"
              alt="Extended Logo"
              fill
              sizes="(max-width: 768px) 50vw, 480px"
              className="object-contain border-yellow-500"
            />
          </div>
        </div> */}

        {/* Titolo */}
        <div className="flex flex-col mt-2 gap-y-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white border-green-500">
            La Piattaforma Completa <br className="hidden md:block" />
            per lo Sviluppo del Talento
          </h1>
          {/* <h2 className="text-lg md:text-xl lg:text-3xl xl:text-4xl border-green-500">
            Sblocca la crescita aziendale con la nostra{" "}
            <br className="hidden md:block" />
            piattaforma di formazione
          </h2> */}
        </div>

        {/* Bottone Scopri di piú */}
        <div className="items-center mt-6">
          <button className="scale-65 md:scale-75 lg:scale-90 xl:scale-100 text-2xl uppercase px-8 py-4 bg-black text-[#edf000] font-bold border-4 border-[#edf000] hover:cursor-pointer">
            Scopri di più
          </button>
        </div>

        {/* Immagine */}
        <div className="mt-15 w-2/3 md:w-1/3 aspect-[1706/1663] border-yellow-300">
          <Image
            src="/immagineiniziale.png"
            alt="img 1"
            width={1731}
            height={1663}
            className="object-contain"
          />
        </div>
      </div>

      {/* Video */}
      {/* <div className="p-2.5 px-10 xl:px-50 flex flex-col justify-center items-center">
        <div className="aspect-[19/9] min-w-full rounded-2xl bg-gray-800 border-yellow-300">
          <p className="h-full text-center">VIDEO</p>
        </div>
      </div> */}

      <div className="flex flex-col px-10 xl:px-50 min-h-screen w-full justify-center items-center text-white drop-shadow-md text-center space-y-8">
        {/* Title + Subtitle */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl md:text-6xl">
            Siamo nati per semplificare la formazione continua
          </h1>
          <h2 className="text-lg md:text-2xl">
            Partiamo dai team operativi, dove il tempo è poco e la formazione
            spesso rimane indietro. Next:Together rende l’apprendimento
            flessibile, misurabile e adattivo.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Card 1 */}
          <div className="flex flex-col w-full lg:w-1/3 lg:aspect-square overflow-hidden py-12 lg:py-6 justify-start">
            <div className="relative w-1/2 lg:w-2/3 aspect-square mx-auto">
              <Image
                src="/malditesta.png"
                alt="Troppi Strumenti"
                fill
                className="object-contain"
              />
            </div>
            <p className="flex-shrink-0 px-2 sm:px-4 lg:px-10 mt-6 text-center text-xl">
              Troppi strumenti, poca visione? Con Next:Together hai un solo
              posto per profili, percorsi e risultati.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-full lg:w-1/3 lg:aspect-square overflow-hidden py-12 lg:py-6 justify-start">
            <div className="relative w-1/2 lg:w-2/3 aspect-square mx-auto">
              <Image
                src="/mappa.png"
                alt="Mappe di carriera"
                fill
                className="object-contain"
              />
            </div>
            <p className="flex-shrink-0 px-2 sm:px-4 lg:px-10 mt-6 text-center text-xl">
              Percorsi non allineati ai ruoli? Crei roadmap intelligenti,
              testuali o visuali, che si adattano al contesto aziendale.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col w-full lg:w-1/3 lg:aspect-square overflow-hidden py-12 lg:py-6 justify-start">
            <div className="relative w-1/2 lg:w-2/3 aspect-square mx-auto">
              <Image
                src="/stonkswoman.png"
                alt="Talent Card"
                fill
                className="object-contain"
              />
            </div>
            <p className="flex-shrink-0 px-2 sm:px-4 lg:px-10 mt-6 text-center text-xl">
              Feedback sparsi e lenti? Una Talent Card dinamica aggiorna in
              tempo reale competenze e progressi.
            </p>
          </div>
        </div>
      </div>

      {/* Secondo Capitolo */}
      <div className="px-10 xl:px-50 min-h-screen w-full bg-white text-black drop-shadow-md text-center">
        <div className="flex flex-col md:flex-row items-center border border-white min-h-screen py-2 gap-x-4 gap-y-8 lg:gap-x-8">
          <div className="text-left border-pink-500 mt-auto md:m-auto md:flex-1">
            <h1 className="text-4xl md:text-6xl m-0">
              Potenzia il talento <br className="hidden" />
              della tua squadra
            </h1>
            <h2 className="text-lg md:text-2xl m-0 mt-4">
              La piattaforma di formazione aziendale che{" "}
              <br className="hidden" />
              connette i dipendenti alle opportunità
            </h2>
          </div>
          <div className="border-pink-500 mb-auto md:m-auto md:flex-1 w-full">
            <UsersPreview employees={employees} />
          </div>
        </div>
      </div>

      {/* Terzo Capitolo */}
      <div className="flex flex-col lg:flex-row gap-10 py-10 px-10 xl:px-50 min-h-screen w-full text-left items-center justify-items-center justify-center mt-20">
        {/* Immagine */}
        <div className="border-blue-500 w-full items-center justify-items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src="/screen1.png"
            alt="Extended Logo"
            height={1892}
            width={1128}
            className="object-contain m-auto"
          />
        </div>

        {/* Scritte */}
        <div className="flex flex-col gap-y-16">
          {/* 1 Paragrafo */}
          <div className="flex flex-col gap-y-3">
            {/* Titolo */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl">
              Talent Card Dinamiche per ogni dipendente
            </h1>
            {/* Desc */}
            <p
              className="text-md
             sm:text-xl md:text-2xl"
            >
              Ogni dipendente ha un profilo digitale che evolve con competenze,
              obiettivi e attività. <br />
              Un modo semplice e chiaro per valorizzare il percorso di crescita.
            </p>
          </div>

          {/* 2 Paragrafo */}
          <div className="flex flex-col gap-y-3">
            {/* Titolo */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl">
              Dashboard manageriale per monitorare i progressi
            </h1>
            {/* Desc */}
            <p
              className="text-md
             sm:text-xl md:text-2xl"
            >
              I manager hanno una panoramica completa dell’andamento dei team:
              obiettivi raggiunti, corsi completati e indicatori di performance.{" "}
              <br />
              Tutto in un’unica interfaccia intuitiva.
            </p>
          </div>

          {/* 3 Paragrafo */}
          <div className="flex flex-col gap-y-3">
            {/* Titolo */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl">AI agent</h1>
            {/* Desc */}
            <p
              className="text-md
             sm:text-xl md:text-2xl"
            >
              Percorsi di formazione personalizzati grazie all’AI, adattati alle
              competenze del dipendente e agli obiettivi aziendali. <br />
              Ogni passo diventa mirato, misurabile ed efficace.
            </p>
          </div>
        </div>
      </div>

      {/* Quarto Capitolo */}
      {/* TODO: controllare se é da rendere piú piccolo verticalmente */}
      <div className="flex flex-col gap-8 py-10 px-10 xl:px-50 min-h-screen w-full text-left items-center justify-items-center justify-center mt-20">
        {/* Titolo */}
        <h1 className="text-4xl md:text-6xl">Esplora i corsi disponibili</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {Object.entries(courses).map(([nome, vars], idx) => (
            <SampleCourse
              key={idx}
              name={nome}
              abbreviation={vars.abbreviation}
              description={vars.description}
              status={vars.status}
              startingDate={vars.startingDate}
              lessonsDone={vars.lessonsDone}
              totalLessons={vars.totalLessons}
              totalHours={vars.hours}
              remainingHours={vars.remainingHours}
              startColor={vars.startColor}
              endColor={vars.endColor}
            />
          ))}
        </div>
      </div>

      {/* Quinto Capitolo */}
      <div className="flex flex-col items-center justify-center px-10 xl:px-50 min-h-screen w-full bg-white text-black drop-shadow-md space-y-8 text-center">
        {/* Titolo */}
        <div>
          <h1 className="text-4xl md:text-6xl m-0">
            Crea corsi aziendali personalizzati in pochi minuti
          </h1>
          <h2 className="text-lg md:text-2xl m-0 mt-4">
            Next:Together ti permette di trasformare documenti, presentazioni e
            materiali interni in corsi digitali accessibili ai tuoi dipendenti.
            Bastano pochi click per caricare i file e renderli parte della
            formazione aziendale
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <CreateCourse />
        </div>
      </div>

      {/* Sesto Capitolo */}
      <div className="flex flex-col gap-8 py-10 px-10 xl:px-50 min-h-screen w-full text-left items-center justify-items-center justify-center mt-20">
        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center w-full">
          Scegli il piano piú adatto al tuo business
        </h1>

        {/* Piani */}
        <div className="flex flex-wrap gap-8 justify-center">
          {Object.entries(plans).map(([nome, plan], idx) => (
            <PlansList key={idx} {...plan} name={nome} />
          ))}
        </div>
      </div>
    </div>
  );
}
