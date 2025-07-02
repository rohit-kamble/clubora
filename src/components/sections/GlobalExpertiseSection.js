import {
  FaTableTennis,
  FaSwimmer,
  FaYinYang,
  FaShoePrints,
  FaMusic,
} from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";

// Import background images
import tennisBg from "../../pics/sportAcadamy.jpg";
import swimmingBg from "../../pics/pool.jpg";
import yogaBg from "../../pics/billiardtable.jpg";
import sportsBg from "../../pics/gamezone.jpg";
import musicBg from "../../pics/billiardtable.jpg";
import badmintonBg from "../../pics/gamezone.jpg";

const cardData = [
  {
    icon: <FaTableTennis className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🎾
    title: "Rohan Bopanna Academy",
    desc: "Trained by Rohan Bopanna Academy",
    bgImage: tennisBg,
  },
  {
    icon: <FaSwimmer className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🏊
    title: "Michael Phelps Swim Coaches",
    desc: "Certified Michael Phelps Swim Coaches",
    bgImage: swimmingBg,
  },
  {
    icon: <FaYinYang className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🧘
    title: "Iyengar Yoga Instructors",
    desc: "Iyengar Yoga Instructors",
    bgImage: yogaBg,
  },
  {
    icon: <FaShoePrints className="text-white text-5xl mb-4 drop-shadow-lg" />, // 👟
    title: "Sports Brands Partners",
    desc: "In association with Decathlon, Puma, Nike, Yonex, Wildcraft",
    bgImage: sportsBg,
  },
  {
    icon: <FaMusic className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🎵
    title: "Furtados Music Classes",
    desc: "Music Classes by Furtados",
    bgImage: musicBg,
  },
  {
    icon: (
      <MdSportsTennis className="text-white text-5xl mb-4 drop-shadow-lg" />
    ), // 🏆
    title: "Gopichand Badminton Academy",
    desc: "Powered by Gopichand Badminton Academy",
    bgImage: badmintonBg,
  },
];

const GlobalExpertiseSection = () => (
  <section className="py-12 px-4 max-w-5xl mx-auto text-center">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 inline-block text-muted relative">
      Global Expertise Local Excellence
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl shadow-xl border border-transparent p-8 text-center transition-all duration-300 flex flex-col items-center group overflow-hidden h-80"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${card.bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {card.icon}
            <h3 className="text-2xl font-extrabold mb-2 text-white transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm text-gray-200 font-medium">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GlobalExpertiseSection;
