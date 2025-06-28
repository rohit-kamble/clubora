import Image from "next/image";
import mirchandani from "../../client/mirchandani-group-logo.png.crdownload.png";
import dpPride from "../../client/DP Pride indore.jpeg";
import oceanPark from "../../client/Ocean park.jpeg";
import acacia from "../../client/Acacia logo.png";
import avtaraVidaGoa from "../../client/Avtara_Vida Goa.png";
import charviReemz from "../../client/Charvi Reemz.jpeg";
import adhiraj from "../../client/Adhiraj.jpeg";
import kpHorizontal from "../../client/kp-horizontal-01-01-01.png";

const logos = [
  { src: mirchandani, alt: "Mirchandani Group" },
  { src: dpPride, alt: "DP Pride Indore" },
  { src: oceanPark, alt: "Ocean Park" },
  { src: acacia, alt: "Acacia" },
  { src: avtaraVidaGoa, alt: "Avtara Vida Goa" },
  { src: charviReemz, alt: "Charvi Reemz" },
  { src: adhiraj, alt: "Adhiraj" },
  { src: kpHorizontal, alt: "KP Horizontal" },
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
            width={120}
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
