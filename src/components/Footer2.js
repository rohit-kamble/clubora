import Image from "next/image";
import React from "react";
import logoTitle from "../../src/logoTitle.png";

const Footer2 = () => {
  return (
    <footer
      className="bg-black/80 text-white px-8 py-12 w-full shadow-2xl backdrop-blur-md"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
    >
      <div className="items-start mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left: Navigation and Newsletter */}
        <div className="flex-1">
          {/* Navigation */}

          {/* Newsletter Signup */}
          <div className="mb-16">
            <div className="space-y-4">
              <ul className="space-y-2 flex gap-2">
                {["Home", "About", "Services", "Contact", "Privacy Policy"].map(
                  (service) => (
                    <li key={service}>
                      <a
                        href={`${
                          service.toLowerCase() === "privacy policy"
                            ? "https://clubora.in/privacy-policy.html"
                            : `/#${service.toLowerCase()}`
                        }`}
                        className="text-white font-bold text-sm underline hover:text-clubora-gold transition-colors duration-300"
                      >
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
              <Image
                src={logoTitle}
                alt="Clubora Logo"
                width={120}
                height={40}
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                className="object-contain mt-8 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              />
            </h2>
          </div>
        </div>
        {/* Right: Location Info */}
        <div className="flex flex-col items-start md:items-end text-right md:text-right min-w-[250px]">
          <div className="font-bold text-sm uppercase mb-4 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
            Location
          </div>
          <p className="text-white font-bold leading-relaxed mb-0 text-sm">
            Goa
          </p>
          <p className="text-white font-bold leading-relaxed mb-0 text-sm">
            Indore
          </p>
          <p className="text-white font-bold leading-relaxed mb-0 text-sm">
            Bhopal
          </p>
          <p className="text-white font-bold leading-relaxed mb-0 text-sm">
            Mumbai
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end text-right md:text-right min-w-[250px]">
          <div className="text-2xl font-bold uppercase mb-4 text-sm drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
            Reach Out
          </div>
          <p>
            <a
              href="tel:+919594789944"
              className="text-white font-bold transition-colors duration-300 flex text-sm items-center gap-2"
            >
              <span>7012501885</span>
            </a>
          </p>
          <p>
            <a
              href="mailto:info@clubora.in"
              className="text-white font-bold transition-colors duration-300 flex text-sm items-center gap-2"
            >
              <span>hello@clubora.in</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
