'use client'
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    const { data, error } = await sendEmail(formData);

    if (!data) {
      toast.error("Failed to send email");
    } else {
      toast.success("Email sent successfully!");
      setSenderEmail(""); // Clear email input
      setMessage(""); // Clear message input
    }

    if (error) {
      toast.error(error);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          blykhalid1999@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleEmailSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
