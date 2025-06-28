import { motion } from "framer-motion";

const GlobalExpertiseSection = () => (
  <motion.section className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-h2 text-center mb-10 font-bold">
      Global Expertise. Local Excellence.
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">🎾</span>
        <span className="text-body font-semibold">
          Trained by Rohan Bopanna Academy
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">🏊</span>
        <span className="text-body font-semibold">
          Certified Michael Phelps Swim Coaches
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">🧘</span>
        <span className="text-body font-semibold">
          Iyengar Yoga Instructors
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">👟</span>
        <span className="text-body font-semibold">
          In association with Decathlon, Puma, Nike, Yonex, Wildcraft
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">🎵</span>
        <span className="text-body font-semibold">
          Music Classes by Furtados
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-background rounded-xl shadow-card p-6 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-3">🏸</span>
        <span className="text-body font-semibold">
          Powered by Gopichand Badminton Academy
        </span>
      </motion.div>
    </div>
  </motion.section>
);

export default GlobalExpertiseSection;
