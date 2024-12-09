import React, { useState } from "react";

const Newsletter: React.FC = () => {
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
    <section className="py-12.5 bg-gray relative overflow-hidden z-10">
      <div className="absolute left-0 top-0 w-full h-full -z-1">
        <img src="/images/newsletter/bg-dots.svg" alt="background dots" />
      </div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="bg-white shadow-1 rounded-[10px] py-9 px-4 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-[455px] w-full">
              <h3 className="font-semibold text-heading-6 text-dark mb-3">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get notifications when we launch new
                products or publish new articles.
              </p>
            </div>

            {/* Right Section */}
            <div className="max-w-[494px] w-full">
              <form onSubmit={handleSubscribe}>
                <div className="flex items-center gap-5">
                  <div className="max-w-[350px] w-full">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-medium rounded-md text-white bg-dark flex py-3.5 px-5.5 hover:opacity-90 transition-all ease-linear duration-300"
                  >
                    Subscribe
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-green-500 mt-3">
                    Successfully subscribed to the newsletter!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 mt-3">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
