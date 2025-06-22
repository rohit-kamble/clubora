import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 sm:py-20">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-clubora-gold hover:text-clubora-navy transition-colors duration-300 font-semibold group"
          >
            <FaArrowLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-clubora-navy mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-clubora-gray space-y-6">
            <p>
              At Clubora, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, and safeguard the data you share with us when you
              visit our website or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Name, email address, phone number, and location when you submit
                a contact form.
              </li>
              <li>
                Technical data such as IP address, browser type, and usage
                statistics (via cookies and analytics tools).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              2. How We Use Your Information
            </h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to inquiries and provide service updates.</li>
              <li>Improve our website and services.</li>
              <li>
                Communicate with you regarding events, offers, or updates (only
                if you opt-in).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              3. Data Security
            </h2>
            <p>
              We use industry-standard security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information. Data may
              only be shared with trusted service providers who assist us in
              operating our website or servicing you, under strict
              confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies for analytics and to enhance your
              browsing experience. You can adjust your browser settings to
              disable cookies if you prefer.
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              6. Your Rights
            </h2>
            <p>
              You may request to access, update, or delete your personal data at
              any time by contacting us at{" "}
              <a
                href="mailto:hello@clubora.in"
                className="text-clubora-gold hover:underline"
              >
                hello@clubora.in
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. All updates
              will be posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-clubora-navy mt-10">
              8. Contact Us
            </h2>
            <p>
              If you have any questions regarding this policy, please reach out
              to us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                📞{" "}
                <a
                  href="tel:7021501885"
                  className="text-clubora-gold hover:underline"
                >
                  7021501885
                </a>
              </li>
              <li>
                📧{" "}
                <a
                  href="mailto:hello@clubora.in"
                  className="text-clubora-gold hover:underline"
                >
                  hello@clubora.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
