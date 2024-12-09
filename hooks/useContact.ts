import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function useContact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit. Please try again.");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "An error occurred. Please try again.");
    }
  };

  return {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
  };
}
