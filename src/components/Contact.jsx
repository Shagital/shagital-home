import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link dynamically
    const mailtoLink = `mailto:Hello@shagital.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(
      email
    )}`;

    window.location.href = mailtoLink;

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="block md:grid-cols-2 md:grid mx-4 md:mx-16 lg:mx-44 text-white my-10 md:my-16 overflow-hidden space-y-6 scroll-smooth"
      id="contact"
    >
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-2xl font-extrabold bg-gradient-to-br from-[#FFff] to-[#4545458] bg-clip-text text-transparent">
          STAY CONNECTED WITH US.
        </h1>
        <p className="text-lg md:text-xl font-light mt-1 text-gray-400 md:w-72">
          Be the first to know about our next and latest project we have in
          stock to make Africa a great place.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex-col md:flex md:flex-row md:gap-2">
            <div className="w-full mb-3">
              <label
                htmlFor="name"
                className="text-sm font-extralight block text-white/50 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-lg py-2 bg-[#2C2330] px-3 rounded-lg w-full outline-none"
              />
            </div>
            <div className="w-full mb-3">
              <label
                htmlFor="email"
                className="text-sm font-extralight block text-white/50 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-2 bg-[#2C2330] px-3 rounded-lg w-full outline-none"
              />
            </div>
          </div>
          <label
            htmlFor="message"
            className="text-sm font-extralight block text-white/50 mb-2"
          >
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-lg py-2 bg-[#2C2330] px-3 rounded-lg w-full outline-none resize-none"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="block text-lg py-3 w-full mt-4 rounded-lg bg-[#DC8B00] cursor-pointer hover:bg-[#dc7900] transition duration-500 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
