import { useState } from "react";
import { motion } from "framer-motion";

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

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.mobile) newErrors.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Invalid mobile number";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setForm({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative py-20 bg-gradient-to-br from-clubora-navy to-clubora-blue"
    >
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div variants={fadeIn} className="text-center mb-12">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
          >
            Get in Touch
          </motion.h2>
          <p className="text-clubora-navy text-lg max-w-2xl mx-auto mb-8">
            {`Have questions about our services? We're here to help. Send us a message and we'll get back to you shortly.`}
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="flex justify-center">
          <div className="w-full max-w-md bg-clubora-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 ">
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
                  className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <span
                  className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
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
                  className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <span
                  className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
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
                  className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                  value={form.mobile}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <span
                  className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
                    errors.mobile ? "" : "invisible"
                  }`}
                >
                  {errors.mobile || " "}
                </span>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray min-h-[120px] focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <span
                  className={`absolute left-0 top-[120px] text-clubora-reddish text-xs mt-1 ${
                    errors.message ? "" : "invisible"
                  }`}
                >
                  {errors.message || " "}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-burnt-orange text-clubora-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:bg-burnt-orange/90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#4caf50] text-center mt-2"
                >
                  Thank you! Your message has been submitted.
                </motion.span>
              )}
              {submitError && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-clubora-reddish text-center mt-2"
                >
                  {submitError}
                </motion.span>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
