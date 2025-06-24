import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logoTitle from "../logoTiltle.png";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Image
              src={logoTitle}
              alt="Clubora Logo"
              width={200}
              height={200}
              className="drop-shadow-lg relative top-[-22px]"
              // style={{
              //   filter: "brightness(0) invert(1)",
              // }}
              priority
            />
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-clubora-gold tracking-wider uppercase">
              Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact", "Privacy Policy"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href={`${
                        service.toLowerCase() === "privacy policy"
                          ? "https://clubora.in/privacy-policy.html"
                          : `/#${service.toLowerCase()}`
                      }`}
                      className="text-white/70 hover:text-clubora-gold transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Reach Out */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-clubora-gold tracking-wider uppercase">
              Reach Out
            </h3>
            <div className="space-y-3 text-white/70">
              <p>
                <a
                  href="tel:+919594789944"
                  className="hover:text-clubora-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span>7012501885</span>
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@clubora.in"
                  className="hover:text-clubora-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span>hello@clubora.in</span>
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Our Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-clubora-gold tracking-wider uppercase">
              Our Locations
            </h3>
            <p className="text-white/70 leading-relaxed mb-0">Goa</p>
            <p className="text-white/70 leading-relaxed mb-0">Indore</p>
            <p className="text-white/70 leading-relaxed mb-0">Bhopal</p>
            <p className="text-white/70 leading-relaxed mb-0">Mumbai</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-clubora-gold/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 sm:mb-0">
            {/* Copyright &copy; {new Date().getFullYear()} Clubora. All Rights
            Reserved. */}
          </p>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
