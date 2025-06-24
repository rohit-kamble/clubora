import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Communities Transformed", value: 30 },
  { label: "Trained Staff", value: 500 },
  { label: "Years of Clubhouse Expertise", value: 5 },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="relative py-20 mt-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?au')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <p className="text-3xl font-bold text-clubora-white">
          Backed by Experience. Driven by Excellence.
        </p>
        <p className="text-xl text-clubora-white mt-2 mb-12">
          We bring the structure of hospitality and the heart of community
          living to every clubhouse we manage.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div className="bg-clubora-white/10 p-8 rounded-lg" key={idx}>
              <span className="block text-5xl font-bold text-clubora-white">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    start={0}
                    delay={idx * 0.2}
                    useEasing={true}
                    enableScrollSpy={false}
                    scrollSpyOnce={true}
                  />
                )}
                {!inView && "0"}+
              </span>
              <span className="block mt-2 text-lg text-clubora-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
