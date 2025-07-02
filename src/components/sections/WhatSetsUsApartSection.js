import {
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";

// Use the services array from CluboraExperienceSection.js
const services = [
  {
    icon: FaConciergeBell,
    title: "Reception & Resident Assistance",
    description:
      "Our front-desk team is trained in hotel-style hospitality—offering courteous service, handling resident queries, managing bookings, and creating a welcoming first impression every time.",
  },
  {
    icon: FaDumbbell,
    title: "Fitness Center Management",
    description:
      "Clubora gym attendants ensure that equipment is monitored, spaces are maintained, and residents feel safe, guided, and motivated in their daily workouts.",
  },
  {
    icon: FaSwimmer,
    title: "Pool Oversight & Lifeguard Services",
    description:
      "Professionally trained lifeguards not only ensure safety at the pool but also maintain a calm, clean, and vacation-like atmosphere for families and swimmers alike.",
  },
  {
    icon: FaGamepad,
    title: "Indoor & Outdoor Game Zone Attendants",
    description:
      "From board games to badminton, our game attendants manage recreational areas, assist residents, and keep these spaces active, friendly, and well-coordinated.",
  },
  {
    icon: FaBaby,
    title: "Kids' Play Area & Crèche Supervision",
    description:
      "Our attentive play area staff create safe, engaging environments for younger residents—with structured activity time, supervision, and gentle care.",
  },
  {
    icon: FaEvent,
    title: "Events, Workshops & Lifestyle Engagement",
    description:
      "Clubora curates and delivers experiences—from cultural celebrations to weekend workshops—making the clubhouse a true social and creative hub for all age groups.",
  },
  {
    icon: FaConciergeBell,
    title: "Sports Academies & Coaching",
    description:
      "We bring certified coaches from leading sports academies to your clubhouse—offering expert-led training in badminton, tennis, football, swimming, and more for all age groups.",
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
    <div className="flex-1 flex flex-col justify-center p-8 md:p-16 text-white md:min-h-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex bg-burnt-orange items-start gap-5 bg-opacity-10 rounded-xl shadow-md p-6 border border-white/20 hover:shadow-lg hover:bg-opacity-20 transition`}
          >
            <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 mt-1" />
            <div>
              <div className={`font-bold mb-1 ${fontSizeMap[fontSize]}`}>
                {service.title}
              </div>
              <div className={`${fontSizeMap[fontSize]} opacity-90`}>
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatSetsUsApartSection;
