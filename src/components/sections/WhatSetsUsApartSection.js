import {
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";
import Image from "next/image";
import reception from "../../pics/1_Reception.jpg";
import fitness from "../../pics/2_fitness.jpg";
import pool from "../../pics/3_pool.jpg";
import games from "../../pics/4_games.jpg";
import playArea from "../../pics/5_play_area.jpg";
import events from "../../pics/6_events.jpg";
import academies from "../../pics/7_acadmies.jpg";
import softServices from "../../pics/8_soft_services.jpg";
// Use the services array from CluboraExperienceSection.js
const services = [
  {
    image: reception,
    title: "Reception & Resident Assistance",
    description:
      "Our front-desk team is trained in hotel-style hospitality—offering courteous service, handling resident queries, managing bookings, and creating a welcoming first impression every time.",
  },
  {
    image: fitness,
    title: "Fitness Center Management",
    description:
      "Clubora gym attendants ensure that equipment is monitored, spaces are maintained, and residents feel safe, guided, and motivated in their daily workouts.",
  },
  {
    image: pool,
    title: "Pool Oversight & Lifeguard Services",
    description:
      "Professionally trained lifeguards not only ensure safety at the pool but also maintain a calm, clean, and vacation-like atmosphere for families and swimmers alike.",
  },
  {
    image: games,
    title: "Indoor & Outdoor Game Zone Attendants",
    description:
      "From board games to badminton, our game attendants manage recreational areas, assist residents, and keep these spaces active, friendly, and well-coordinated.",
  },
  {
    image: playArea,
    title: "Kids' Play Area & Crèche Supervision",
    description:
      "Our attentive play area staff create safe, engaging environments for younger residents—with structured activity time, supervision, and gentle care.",
  },
  {
    image: events,
    title: "Events, Workshops & Lifestyle Engagement",
    description:
      "Clubora curates and delivers experiences—from cultural celebrations to weekend workshops—making the clubhouse a true social and creative hub for all age groups.",
  },
  {
    image: academies,
    title: "Sports Academies & Coaching",
    description:
      "We bring certified coaches from leading sports academies to your clubhouse—offering expert-led training in badminton, tennis, football, swimming, and more for all age groups.",
  },
  {
    image: softServices,
    title: "Soft Services",
    description: `Our attentive housekeeping team keeps all clubhouse and activity areas clean, fresh, and well-maintained—creating a welcoming environment every single day.`,
  },
];

const fontSizeMap = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const WhatSetsUsApartSection = ({ fontSize = "sm" }) => (
  <section className="w-full flex flex-col text-center">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 inline-block text-muted relative">
      Clubora Experience
    </h2>
    <div className="flex-1 flex flex-col justify-center p-8 md:p-16 text-clubora-gray md:min-h-0">
      <div className="flex flex-col gap-6">
        {/* First Row - 3 cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
            {services.slice(0, 3).map((service, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-md overflow-hidden border border-white/20 hover:shadow-lg hover:bg-opacity-20 transition`}
              >
                {/* Image Section - Top Half */}
                <div className="h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    width={"100%"}
                    height={"100%"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section - Bottom Half */}
                <div className="p-6">
                  <div className={`font-bold mb-3 ${fontSizeMap[fontSize]}`}>
                    {service.title}
                  </div>
                  <div
                    className={`${fontSizeMap[fontSize]} opacity-90 leading-relaxed`}
                  >
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {services.slice(3, 5).map((service, idx) => (
              <div
                key={idx + 3}
                className={`rounded-xl shadow-md overflow-hidden border border-white/20 hover:shadow-lg hover:bg-opacity-20 transition`}
              >
                {/* Image Section - Top Half */}
                <div className="h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    width={"100%"}
                    height={"100%"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section - Bottom Half */}
                <div className="p-6">
                  <div className={`font-bold mb-3 ${fontSizeMap[fontSize]}`}>
                    {service.title}
                  </div>
                  <div
                    className={`${fontSizeMap[fontSize]} opacity-90 leading-relaxed`}
                  >
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row - 3 cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
            {services.slice(5, 8).map((service, idx) => (
              <div
                key={idx + 5}
                className={`rounded-xl shadow-md overflow-hidden border border-white/20 hover:shadow-lg hover:bg-opacity-20 transition`}
              >
                {/* Image Section - Top Half */}
                <div className="h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    width={"100%"}
                    height={"100%"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section - Bottom Half */}
                <div className="p-6">
                  <div className={`font-bold mb-3 ${fontSizeMap[fontSize]}`}>
                    {service.title}
                  </div>
                  <div
                    className={`${fontSizeMap[fontSize]} opacity-90 leading-relaxed`}
                  >
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatSetsUsApartSection;
