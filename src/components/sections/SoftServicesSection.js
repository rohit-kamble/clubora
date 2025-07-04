import Image from "next/image";
import {
  FaBroom,
  FaSprayCan,
  FaHandSparkles,
  FaClipboardCheck,
} from "react-icons/fa";
import housekeepingImage from "../../pics/softServices.jpg";

const services = [
  {
    icon: FaBroom,
    title: "Daily Cleaning & Maintenance",
    description:
      "Comprehensive cleaning of all clubhouse areas and activity spaces.",
  },
  {
    icon: FaSprayCan,
    title: "Sanitization & Hygiene",
    description:
      "Regular sanitization protocols to ensure health and safety standards.",
  },
  {
    icon: FaHandSparkles,
    title: "Attention to Detail",
    description:
      "Meticulous attention to cleanliness and presentation in every space.",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality Assurance",
    description:
      "Regular inspections and quality checks to maintain high standards.",
  },
];

const SoftServicesSection = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
    {/* Left: Image with overlay */}
    <div className="relative flex items-center justify-center bg-black min-h-[350px] lg:min-h-0">
      <Image
        src={housekeepingImage}
        alt="Soft Services"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 text-center text-white p-8 max-w-lg w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Soft Services</h2>
        <p className="text-lg font-medium">
          Our attentive housekeeping team keeps all clubhouse and activity areas
          clean, fresh, and well-maintained—creating a welcoming environment
          every single day.
        </p>
      </div>
    </div>

    {/* Right: Orange tile list */}
    <div className="bg-burnt-orange flex flex-col justify-center p-8 lg:p-16">
      <h3 className="text-3xl font-bold text-white mb-8">What We Do</h3>
      <ul className="space-y-8">
        {services.map((service, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <service.icon className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-lg mb-1">
                {service.title}
              </div>
              <div className="text-white/90">{service.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SoftServicesSection;
