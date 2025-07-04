import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contactImage from "../../pics/contact.jpg";

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

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 80, delay: 0.1 },
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

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setSubmitError("");

      var templateParams = {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.message,
      };

      emailjs
        .send("service_l23oi5m", "template_h5dcxdm", templateParams, {
          publicKey: "MyJrGLYk2-3kOWrwY",
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true);
            setIsSubmitting(false);
            setTimeout(() => {
              setSubmitted(false);
            }, 2000);
            setForm({
              name: "",
              email: "",
              mobile: "",
              message: "",
            });
          },
          function (err) {
            console.log("FAILED...", err);
            setIsSubmitting(false);
            setSubmitError("Failed to send message. Please try again.");
          }
        );
    }
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative py-20 bg-gradient-to-br from-clubora-navy to-clubora-blue"
    >
      <div className="max-w-6xl flex justify-center mx-auto px-4 relative">
        <motion.div variants={fadeIn} className="text-center mb-8 md:mb-12">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold mb-4 inline-block text-muted relative"
          >
            Get in Touch
          </motion.h2>
          <p className="text-clubora-navy text-lg max-w-2xl mb-8">
            {`Have questions about our services? We're here to help. Send us a message and we'll get back to you shortly.`}
          </p>
        </motion.div>
      </div>

      <div className="bg-burnt-orange flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Form */}
        <div className="w-full md:w-1/2">
          <motion.div variants={fadeIn} className="flex justify-center">
            <div className="w-full max-w-md bg-clubora-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 ">
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
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={contactImage}
            alt="Contact"
            // width={500}
            // height={500}
            className=" shadow-xl object-cover max-h-[500px] w-full"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
