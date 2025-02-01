import React, { useState } from "react";
import Image from "next/image";

const JoinUsSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe.");
      }

      setStatus("success");
      setEmail(""); // Clear the email field on success
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 relative bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden rounded-[20px] shadow-xl">
      {/* Background Visuals */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/newsletter/bg-dots.svg"
          alt="Decorative background dots"
          fill
          sizes="100vw"
          priority // Ensures fast loading for background images
          className="opacity-20 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900 opacity-50"></div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Join Our Community
          </h2>
          <p className="text-lg mt-4 text-gray-3">
            Stay updated with the latest insights, guides, and news about the
            dark web. Subscribe to our newsletter and become part of our growing
            community.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="bg-white text-gray-8 shadow-lg rounded-lg p-6 sm:p-10">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-wrap gap-5 justify-center items-center"
          >
            <div className="flex-1 max-w-[350px] w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="rounded-md border border-gray-3 bg-gray-2 text-gray-7 placeholder:text-gray-5 w-full py-3.5 px-5 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
            >
              Subscribe
            </button>
          </form>

          {/* Feedback Messages */}
          {status === "success" && (
            <p className="text-green-dark mt-4 text-center flex items-center justify-center gap-2">
              <span>✅</span> Successfully subscribed to the newsletter!
            </p>
          )}
          {status === "error" && (
            <p className="text-[rgb(239 68 68)] mt-4 text-center flex items-center justify-center gap-2">
              <span>❌</span> Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
