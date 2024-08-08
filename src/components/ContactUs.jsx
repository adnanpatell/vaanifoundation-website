"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function ContactUs() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you&apos;re sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered.
        </p>
        <form className="relative z-10 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 mb-4 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 mb-4 p-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 mb-4 p-2"
          />
          <textarea
            placeholder="Inquiry"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 mb-4 p-2 h-32 resize-none"
          ></textarea>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Submit
      </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
