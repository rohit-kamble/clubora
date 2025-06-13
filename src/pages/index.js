import { useState } from "react";
import { Playfair_Display, Nunito } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  // Contact form state and validation
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.mobile.trim()) {
      errs.mobile = "Mobile is required.";
    } else if (!/^[5-9][0-9]{9}$/.test(form.mobile.trim())) {
      errs.mobile = "Enter a valid 10-digit mobile number starting with 5-9.";
    }
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Here you can handle the form submission (e.g., send to API)
    } else {
      setSubmitted(false);
    }
  }

  return (
    <div className={`${nunito.className} min-h-screen w-full`}>
      {/* Top bar with logo only */}

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h1
            className={`${playfair.className} text-6xl md:text-7xl font-bold  mb-4 drop-shadow-lg`}
          >
            CLUBORA
          </h1>
        </div>
      </section>

      {/* Business Overview Section */}
      <section className="max-w-3xl mx-auto py-12 text-center">
        <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>
          Business Overview
        </h2>
        <p className="text-lg text-[#808080] mb-4">
          Clubora is redefining how residential communities experience leisure,
          lifestyle, and hospitality. With over a decade of hands-on expertise,
          we go beyond basic clubhouse operations — delivering curated,
          service-first experiences that turn shared spaces into true lifestyle
          destinations.
        </p>
        <p className="text-lg text-[#808080]">
          From boutique societies to large townships, Clubora brings consistent
          quality and hospitality-driven excellence to every community we serve.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="max-w-3xl mx-auto py-12 text-center">
        <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>
          What We Do
        </h2>
        <p className="text-lg text-[#808080] mb-4">
          We offer comprehensive clubhouse management with an unwavering focus
          on service, engagement, and operational finesse.
        </p>
        <h3 className="text-2xl font-semibold mb-2">
          Our Core Services Include:
        </h3>
        <ul className="list-disc list-inside text-[#808080] space-y-2 pl-4 text-left inline-block">
          <li>Clubhouse operations and management</li>
          <li>Hospitality-trained staffing & concierge services</li>
          <li>Resident engagement programs and community events</li>
          <li>Gym, spa, pool & recreation area operations</li>
          <li>Premium housekeeping & facility upkeep</li>
          <li>Lifestyle curation and personalized resident experiences</li>
        </ul>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <h3 className={`${playfair.className} text-3xl font-bold mb-2`}>
              Our Mission
            </h3>
            <p className="text-[#808080]">
              To elevate everyday living by transforming clubhouses into
              vibrant, hospitality-led spaces that bring comfort, connection,
              and community.
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className={`${playfair.className} text-3xl font-bold mb-2`}>
              Our Vision
            </h3>
            <p className="text-[#808080]">
              To become the most trusted name in luxury clubhouse management —
              known for excellence, innovation, and consistently exceptional
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clubora Section */}
      <section className="max-w-3xl mx-auto py-12 text-center">
        <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>
          Why Clubora?
        </h2>
        <p className="text-lg text-[#808080] mb-4">
          While traditional facility management maintains, we elevate.
          <br />
          Where others deliver routine operations, we deliver thoughtful
          service, meaningful engagement, and a luxury-first mindset.
        </p>
        <h3 className="text-2xl font-semibold mb-2">We bring:</h3>
        <ul className="list-disc list-inside text-[#808080] space-y-2 pl-4 text-left inline-block">
          <li>A hospitality-first approach to modern community living</li>
          <li>
            Tailored solutions for mid to high-end residential communities
          </li>
          <li>A professional, trained team focused on resident experience</li>
          <li>Proven systems and service standards honed over 10+ years</li>
        </ul>
      </section>

      {/* Our Services Section */}
      <section className="bg-gradient-to-br from-[#18181b] to-[#3b3b3b] py-16">
        <h2
          className={`${playfair.className} text-4xl font-bold text-center mb-10`}
        >
          Our Services
        </h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 max-w-6xl mx-auto px-2">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow p-8 w-64 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#eab308"
              strokeWidth="1.5"
              className="mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5V8.75a.75.75 0 0 1 .41-.67l8-4a.75.75 0 0 1 .68 0l8 4a.75.75 0 0 1 .41.67v1.75M4.5 19.5h15M4.5 19.5V10.5m0 9V21m15-1.5V10.5m0 9V21M9 19.5v-5.25m6 5.25v-5.25"
              />
            </svg>
            <h3 className="font-semibold mb-1 text-lg text-[#808080] text-center">
              Clubhouse Management
            </h3>
          </div>
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow p-8 w-64 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#eab308"
              strokeWidth="1.5"
              className="mb-2"
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="#eab308"
                strokeWidth="1.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16h8M9 12h6M10 8h4"
              />
            </svg>
            <h3 className="font-semibold mb-1 text-lg text-[#808080] text-center">
              Hospitality Services
            </h3>
          </div>
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow p-8 w-64 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#eab308"
              strokeWidth="1.5"
              className="mb-2"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="2"
                stroke="#eab308"
                strokeWidth="1.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8M8 14h8"
              />
            </svg>
            <h3 className="font-semibold mb-1 text-lg text-[#808080] text-center">
              Event Coordination
            </h3>
          </div>
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow p-8 w-64 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#eab308"
              strokeWidth="1.5"
              className="mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#eab308"
                strokeWidth="1.5"
              />
            </svg>
            <h3 className="font-semibold mb-1 text-lg text-[#808080] text-center">
              Maintenance & Support
            </h3>
          </div>
        </div>
      </section>

      {/* Contact Section (two-column) */}
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-8">
        {/* Right: Contact Form Card */}
        <div className="flex-1 flex justify-center items-start mx-auto">
          <div className="w-full max-w-md bg-gradient-to-br from-[#18181b] to-[#3b3b3b] rounded-2xl shadow-2xl p-8 text-white">
            <h2
              className={`${playfair.className} text-2xl font-bold mb-4 text-center text-[#808080]`}
            >
              Get in Touch
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-gray-400 mb-2 rounded-[4px] px-3 py-2 bg-white/90 text-black w-full"
                  value={form.name}
                  onChange={handleChange}
                />
                <span
                  className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                    errors.name ? "" : "invisible"
                  }`}
                >
                  {errors.name || " "}
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 mb-2 rounded-[4px] px-3 py-2 bg-white/90 text-black w-full"
                  value={form.email}
                  onChange={handleChange}
                />
                <span
                  className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                    errors.email ? "" : "invisible"
                  }`}
                >
                  {errors.email || " "}
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  className="border border-gray-400 mb-2 rounded-[4px] px-3 py-2 bg-white/90 text-black w-full"
                  value={form.mobile}
                  onChange={handleChange}
                />
                <span
                  className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                    errors.mobile ? "" : "invisible"
                  }`}
                >
                  {errors.mobile || " "}
                </span>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="border border-gray-400 rounded-[4px] px-3 py-2 bg-white/90 text-black min-h-[100px]"
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-[#808080] text-white font-bold rounded px-4 py-2 mt-2 hover:bg-gray-700 transition"
              >
                Send
              </button>
              {submitted && (
                <span className="text-green-600 text-center mt-2">
                  Thank you! Your message has been submitted.
                </span>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
