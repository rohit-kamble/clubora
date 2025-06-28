import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

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
  {
    icon: FaConciergeBell,
    title: "FFMS – Facility & Manpower Experts",
    description:
      "FFMS is one of the growing facility management service providers trusted across industries. Their ability to deploy skilled and unskilled trained manpower across locations complements Clubora's service delivery—bringing strength, reliability, and scale to our clubhouse operations.",
  },
];

const CluboraExperienceSection = () => (
  <motion.section
    id="services"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="max-w-7xl mx-auto py-20 px-4 text-center"
  >
    <motion.h2
      variants={fadeIn}
      className="text-4xl md:text-5xl font-bold text-clubora-navy mb-4"
    >
      The Clubora Experience
    </motion.h2>
    <motion.p
      variants={fadeIn}
      className="text-xl text-clubora-gold font-semibold mb-8"
    >
      Delivering a Luxury Experience in Everyday Residential Life
    </motion.p>
    <motion.p
      variants={fadeIn}
      className="text-lg text-clubora-gray mb-16 max-w-4xl mx-auto leading-relaxed"
    >
      {`At Clubora, we believe a great clubhouse is not just about amenities—it's about how they're brought to life. That's why our focus is on placing the right people, with the right training, in the right roles. Every service we offer is designed to create a warm, seamless, and enriching resident experience`}
    </motion.p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-left transition-all duration-300 flex flex-col items-start"
        >
          <service.icon className="w-12 h-12 text-clubora-gold mb-5" />
          <h3 className="text-2xl font-bold text-clubora-navy mb-3">
            {service.title}
          </h3>
          <p className="text-clubora-gray">{service.description}</p>
        </motion.div>
      ))}
    </div>
    <motion.p
      variants={fadeIn}
      className="text-lg text-clubora-gray mt-16 max-w-4xl mx-auto leading-relaxed italic"
    >
      Every service is delivered with a human touch—rooted in hospitality, back
    </motion.p>
  </motion.section>
);

export default CluboraExperienceSection;
