import Image from "next/image";
import acacia from "../../client/Acacia logo.png";
import avtaraVidaGoa from "../../client/Avtara_Vida Goa.png";
import charviReemz from "../../client/Charvi Reemz.jpeg";
import adhiraj from "../../client/Adhiraj.jpeg";
import ashray from "../../client/Ashray.jpeg";
import vianaarHomesLogo from "../../client/vianaar_homes_logo.jpeg";
import ltLogo from "../../client/L&T.jpg";
import hiranandani from "../../client/Hiranandani.jpg";
import tata from "../../client/tata.jpg";
import suraksha from "../../client/Suraksha.jpg";
import omkar from "../../client/Omkar.png";
import raunak from "../../client/Raunak.png";
import runwal from "../../client/Runwal.gif";

const logos = [
  { src: acacia, alt: "Acacia" },
  { src: avtaraVidaGoa, alt: "Avtara Vida Goa" },
  { src: charviReemz, alt: "Charvi Reemz" },
  { src: adhiraj, alt: "Adhiraj" },
  { src: ashray, alt: "Ashray" },
  { src: vianaarHomesLogo, alt: "Vianaar Homes" },
  { src: ltLogo, alt: "L&T" },
  { src: hiranandani, alt: "Hiranandani" },
  { src: tata, alt: "Tata" },
  { src: suraksha, alt: "Suraksha" },
  { src: omkar, alt: "Omkar" },
  { src: raunak, alt: "Raunak" },
  { src: runwal, alt: "Runwal" },
];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 py-10 w-full max-w-4xl mx-auto">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="relative flex items-center justify-center h-32 bg-white rounded-xl group transition-all duration-300 overflow-hidden"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={"100%"}
            height={80}
            className="object-contain h-20 w-auto z-10 transition-all duration-300 filter grayscale group-hover:filter-none group-hover:scale-105"
          />
          {/* Colored overlay on hover */}
          <div className="absolute inset-0 bg-burnt-orange/80 opacity-0 group-hover:opacity-80 transition-all duration-300 z-20" />
        </div>
      ))}
    </div>
  );
}
