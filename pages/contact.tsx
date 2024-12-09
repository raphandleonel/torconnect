import Head from "next/head";
import Container from "@/components/container";
import { useContact } from "hooks/useContact";

export default function ContactPage() {
  const { formData, status, errorMessage, handleChange, handleSubmit } = useContact();

  return (
    <Container>
      <Head>
        <title>Contact Us - TorConnect</title>
        <meta
          name="description"
          content="Reach out to us with your queries or feedback. We are here to help."
        />
        <link rel="canonical" href="https://torconnect.io/contact" />
      </Head>
      <section className="pt-20 pb-20 max-w-[800px] mx-auto px-6 lg:px-0">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-5 text-lg">
            Have questions or need assistance? Fill out the form below, and we will respond promptly.
          </p>
        </div>
        <form
          className="bg-gradient-to-r from-blue-dark to-blue-dark-2 shadow-lg rounded-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full py-3 px-4 border border-blue-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-4"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full py-3 px-4 border border-blue-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-4"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full py-3 px-4 border border-blue-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-gray-4"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Write your message here..."
              className="w-full py-3 px-4 border border-blue-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-gray-4"
            ></textarea>
          </div>
          {status === "error" && (
            <p className="text-[rgb(239 68 68);] text-sm mb-4">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-[rgb(34 197 94)] text-sm mb-4">Your message has been sent successfully!</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full py-3 px-6 font-medium rounded-md transition-all duration-200 ${
              status === "submitting"
                ? "bg-blue-600 text-white cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-dark text-white"
            }`}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </Container>
  );
}
