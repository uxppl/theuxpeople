"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import { User, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      toast.success("Email sent!");
      setForm(initialState);
    } else {
      toast.error("Failed to send email.");
    }
  };

  return (
    <div className="max-w-[1180px] h-full mx-auto px-6 mt-2 pb-20 space-y-20">
      <div
        className={`flex items-center justify-between  mx-auto px-6 bg-white border border-[#f7f7f7] h-12 max-w-[807px] w-full rounded-full transition-all duration-400 z-50`}
        style={{
          boxShadow: `0px 1px 3px -1.5px #33333316,
                   0px 5px 5px -2.5px #33333308,
                   0px 12px 6px -6px #33333302,
                   0px 16px 8px -8px #33333301,
                   0px 0px 0px 1px #33333304,
                   0px -0.5px 0.5px 0px #33333308`,
        }}
      >
        <Link href="/">
          <Image
            alt="The UX People"
            src={"/images/logo.png"}
            width={144}
            height={24}
            priority
            quality={100}
          />
        </Link>
      </div>
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
        className="p-8 space-y-8 w-full max-w-4xl mx-auto"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <User size={18} />
              </span>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="e.g. John Doe"
                value={form.fullName}
                onChange={handleChange}
                className={`w-full border rounded-lg pl-10 pr-4 py-2 text-sm bg-transparent focus:outline-gray-300 ${
                  errors.fullName ? "border-red-500" : "border-[#d1d1d1]"
                }`}
              />
            </div>
            {errors.fullName && (
              <span className="text-xs text-red-500">{errors.fullName}</span>
            )}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. johndoe@email.com"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded-lg pl-10 pr-4 py-2 text-sm bg-transparent focus:outline-gray-300 ${
                  errors.email ? "border-red-500" : "border-[#d1d1d1]"
                }`}
              />
            </div>
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone Number <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Phone size={18} />
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="e.g. +905001234567"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded-lg pl-10 pr-4 py-2 text-sm bg-transparent focus:outline-gray-300 ${
                  errors.phone ? "border-red-500" : "border-[#d1d1d1]"
                }`}
              />
            </div>
            {errors.phone && (
              <span className="text-xs text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium mb-2" htmlFor="brief">
            Briefly Describe Your Project{" "}
            <span className="opacity-50">(Optional)</span>
          </label>
          <textarea
            name="brief"
            id="brief"
            placeholder="I need a redesign for my app..."
            value={form.brief}
            onChange={handleChange}
            rows={5}
            maxLength={400}
            className="w-full border border-[#d1d1d1] rounded-lg px-4 py-2 text-sm bg-transparent focus:outline-gray-300 pr-20"
          />
          <span className="absolute right-4 bottom-3 text-xs text-gray-400">
            {form.brief.length}/400
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            I prefer you...
          </label>
          <div className="flex flex-col gap-3">
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
                  className="appearance-none w-4 h-4 rounded-full border-4 bg-white border-white checked:border-primary checked:bg-white"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center  pt-2">
          <Button
            iconPosition="right"
            icon={
              loading ? (
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block" />
              ) : (
                <ArrowRight />
              )
            }
            disabled={loading}
          >
            Submit
          </Button>
          <p className="text-xs text-sub-color">
            Your information will remain confidential and only be used by
            TheUXPeople team, ensuring your privacy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
