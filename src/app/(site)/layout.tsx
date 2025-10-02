import "../globals.css";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import ForceDarkMode from "@/components/ForceDarkMode";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* <>{children}</> */}
      <div className="bg-linear-to-l from-[#3533cc] to-black text-white">
        <ForceDarkMode />
        {children}
      </div>
      <footer className="min-h-screen h-screen flex flex-row justify-between items-center py-10 px-10 md:px-50 gap-16">
        <Image
          src="/pattini.png"
          alt="Extended Logo"
          height={2000}
          width={2000}
          className="object-contain hidden lg:block w-1/2"
        />
        <div className="flex flex-col text-center justify-between h-6/10">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl">
              Cresci insieme a noi
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl">
              Trasforma la tua formazione aziendale in{" "}
              <br className="hidden lg:block" />
              un percorso formativo semplice, digitale e personalizzato
            </h2>
          </div>

          <div className="text-xl md:text-2xl lg:text-4xl w-fit self-center items-center justify-center">
            <p className="uppercase">Contatti:</p>
            <div className="flex elf-center items-center justify-center">
              <a href="mailto:info@next-together.com">
                <MdAlternateEmail />
              </a>
            </div>
          </div>

          <div className="flex text-sm md:text-lg w-fit self-center items-center justify-center space-x-4">
            <a className="hover:underline" href="/tos">
              ToS
            </a>
            <a className="hover:underline" href="/cookies">
              Cookies
            </a>
            <a className="hover:underline" href="/privacy">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
