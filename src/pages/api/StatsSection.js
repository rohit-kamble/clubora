import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Clients", value: 109 },
  { label: "Year's Of Experience", value: 17 },
  { label: "Skilled Staff", value: 2015 },
];

export default function StatsSection() {
  return (
    <div className="stats-section">
      <p className="text-2xl font-bold">
        17 Years of Expertise in Facility Management
      </p>
      <p className="text-2xl font-bold">
        Trust Our Experience for Your Operations
      </p>
      <div className="stats-cards">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <span className="stat-value">
              <CountUp end={stat.value} duration={5} useInView />+
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
