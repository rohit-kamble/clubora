import Image from "next/image";
import React from "react";
import logoTitle from "../../src/logoTitle.png";
import footerBg from "../pics/footer.jpg";

const Footer2 = () => {
  return (
    <footer className="relative overflow-hidden h-[280px] md:h-[280px] h-auto">
      {/* Background with gradient, pattern, and contact image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800">
        <div className="absolute inset-0 opacity-10">
          {/* <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div> */}
          <Image
            src={footerBg}
            alt="Contact"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Contact background image overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z'/%3E%3Cpath d='M100 40c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60zm0 100c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            backgroundPosition: "right bottom",
          }}
        ></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 md:px-8 py-6 md:py-8 w-full h-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col h-full">
            {/* Top section with logo, navigation, contact, and locations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-1">
              {/* Logo and company info */}
              <div className="space-y-3 md:space-y-4 col-span-2 md:col-span-1">
                <div className="relative group">
                  <Image
                    src={logoTitle}
                    alt="Clubora Logo"
                    width={120}
                    height={40}
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 relative">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-8 md:w-10 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Contact",
                    "Privacy Policy",
                  ].map((service) => (
                    <a
                      key={service}
                      href={`${
                        service.toLowerCase() === "privacy policy"
                          ? "https://clubora.in/privacy-policy.html"
                          : `/#${service.toLowerCase()}`
                      }`}
                      className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center group text-xs md:text-sm"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 relative">
                  Get In Touch
                  <div className="absolute -bottom-1 left-0 w-8 md:w-10 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <a
                    href="tel:+919594789944"
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group"
                  >
                    <span className="font-medium text-xs md:text-sm">
                      +91 7012501885
                    </span>
                  </a>
                  <a
                    href="mailto:info@clubora.in"
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group"
                  >
                    <span className="font-medium text-xs md:text-sm">
                      hello@clubora.in
                    </span>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 relative">
                  Our Presence
                  <div className="absolute -bottom-1 left-0 w-8 md:w-10 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {["Goa", "Indore", "Bhopal", "Mumbai"].map((location) => (
                    <div
                      key={location}
                      className="flex items-center group cursor-pointer"
                    >
                      {/* <div className="w-3 h-3 bg-gradient-to-br from-amber-400/40 to-orange-500/40 border border-amber-400/30 rounded-full mr-3 group-hover:scale-110 transition-all duration-300"></div> */}
                      <span className="text-gray-300 font-medium text-xs md:text-sm group-hover:text-amber-400 transition-colors duration-300">
                        {location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
