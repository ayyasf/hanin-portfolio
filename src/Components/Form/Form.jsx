import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_h0961f6",
        "template_rg9bcll",
        form.current,
        "AesIBsbrpVchKwHFI"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong, please try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-4xl mx-auto flex flex-col gap-6"
    >
      <input type="hidden" name="title" value="New message from the form" />

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="flex-1 text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="flex-1 text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="w-full text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary resize-none"
        ></textarea>
      </div>

      <div className="text-center md:text-left">
        <button
          type="submit"
          disabled={sending}
          className="bg-myprimary hover:bg-hovercolor text-[14px] text-white px-6 py-3 rounded-md transition disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default Form;