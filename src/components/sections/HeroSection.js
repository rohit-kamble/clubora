import { motion } from "framer-motion";
import Image from "next/image";
import logoTitle from "../../logoTitle.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => (
  <motion.section
    id="home"
    className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-10"
      src="/videos/banner.mp4"
      poster="/banner.png"
    />
    {/* <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-10"
    >
      <source src="/videos/banner.mp4" type="video/mp4" />
    </video> */}
    {/* Dark overlay for better text readability */}
    {/* <div className="absolute inset-0 bg-black/50 z-20" /> */}
    {/* Hero Content */}
    <div className="relative z-30 flex flex-col items-center justify-center w-full">
      <motion.div variants={fadeIn} className="mb-6">
        <Image
          src={logoTitle}
          alt="Clubora Logo"
          width={320}
          height={80}
          className="mx-auto drop-shadow-lg"
          priority
          style={{
            filter: "brightness(0) invert(1)",
          }}
        />
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
