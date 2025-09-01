"use client";
import { useState } from "react";
import { toast } from "sonner";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  brief: "",
  prefer: "WhatsApp me",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d{10,15}$/;

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, prefer: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!emailRegex.test(form.email)) newErrors.email = "Valid email required.";
    if (!phoneRegex.test(form.phone)) newErrors.phone = "Valid phone required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      toast.success("Email sent!");
      setForm(initialState);
    } else {
      toast.error("Failed to send email.");
    }
  };

  return (
    <div className="max-w-[1180px] h-full mx-auto px-6 mt-36 pb-20 space-y-10">
      <div className="space-y-4 mt-10">
        <h3 className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            Let's
          </span>{" "}
          <span className="text-primary">Communicate</span>
        </h3>
        <p className="text-sub-color text-lg font-normal text-center mx-auto">
          Feel free to reach out with any questions—we're always here to chat!
        </p>
      </div>
      <form
        className="bg-white shadow-lg rounded-3xl p-8 space-y-8 max-w-2xl mx-auto z-40"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 text-base ${
                errors.fullName ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.fullName && (
              <span className="text-xs text-red-500">{errors.fullName}</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 text-base ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 text-base ${
                errors.phone ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.phone && (
              <span className="text-xs text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="brief">
            Briefly Describe Your Project (Optional)
          </label>
          <textarea
            name="brief"
            id="brief"
            value={form.brief}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            I prefer you...
          </label>
          <div className="flex gap-6">
            {["WhatsApp me", "Email me", "Call me"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-base cursor-pointer"
              >
                <input
                  type="radio"
                  name="prefer"
                  value={option}
                  checked={form.prefer === option}
                  onChange={handleRadio}
                  className="accent-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg text-lg transition hover:bg-primary/90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
