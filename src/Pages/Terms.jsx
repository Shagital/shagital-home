import React from "react";
import { MoveLeft } from "lucide-react";
import { asset } from "../assets/asset";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 5, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="relative bg-[#08060E] overflow-hidden text-white"
    >
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-[#0B037A] opacity-30 rounded-full blur-[200px] pointer-events-none z-0 " />
      <div className=" mx-4 md:mx-16 lg:mx-44 text-white my-10 md:my-16">
        <div
          className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-700 rounded-md w-max"
          onClick={() => navigate(-1)}
        >
          <MoveLeft />
          <p>Return to home page</p>
        </div>
        <div>
  <div className="  mt-6 text-center">
    <h1 className="text-3xl font-bold mb-2">TERMS OF SERVICE</h1>
    <p className="text-zinc-400 text-sm md:text-sm">
      Last updated <span>October 14, 2025</span>
    </p>
    <p className="my-4 text-sm md:text-[17px] rounded-lg w-full py-4 bg-[#DC8B00]">
      These Terms of Service govern your access to and use of our website,
      including any content, functionality, and services offered through it.
      Please read these terms carefully before using our website.
    </p>
  </div>
  <div>
    <div className="space-y-4 mt-6">
      <div className="w-full h-[1px] bg-gray-700 mb-4"></div>
    </div>

    <div>
      <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        By accessing or using our website, you agree to comply with and be bound
        by these Terms of Service and all applicable laws and regulations. If
        you do not agree with these terms, you are prohibited from using or
        accessing our website. Your continued use of the site after any changes
        to these terms constitutes your acceptance of those changes.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">User Responsibilities</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        You agree to use our website only for lawful purposes and in a way that
        does not infringe on the rights of, restrict, or inhibit anyone else's
        use of the website. You are responsible for maintaining the
        confidentiality of your account information and for all activities that
        occur under your account. You must not attempt to gain unauthorized
        access to any portion of the website or interfere with its operation.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Intellectual Property</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        All content, features, and functionality on this website—including but
        not limited to text, graphics, logos, icons, images, and software—are
        the property of the Company or its licensors and are protected by
        copyright, trademark, and other intellectual property laws. You may not
        reproduce, modify, distribute, or otherwise use any materials from our
        website without prior written consent.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Use of the Service</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        You agree not to misuse the website or interfere with its normal
        operation. Prohibited actions include attempting to access restricted
        areas, introducing malware or harmful code, or engaging in activities
        that could disrupt our systems or compromise data security. We reserve
        the right to suspend or terminate access to users who violate these
        terms or misuse our platform.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        Our website and all content provided are delivered on an "as is" and "as
        available" basis. We make no representations or warranties of any kind,
        express or implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, or non-infringement.
        We do not warrant that the website will be error-free, secure, or
        available at all times.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        In no event shall the Company, its directors, employees, or affiliates
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, including without limitation loss of profits, data,
        use, goodwill, or other intangible losses, resulting from (i) your use
        or inability to use the website; (ii) any unauthorized access to or use
        of our servers and/or any personal information stored therein; or (iii)
        any other matter relating to your use of the website.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Termination</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        We may suspend or terminate your access to our website immediately,
        without prior notice or liability, if you breach these Terms of Service.
        Upon termination, your right to use the website will cease immediately.
        All provisions that by their nature should survive termination shall
        survive, including ownership provisions, warranty disclaimers, and
        limitations of liability.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Links to Other Websites</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        Our website may contain links to third-party websites or services that
        are not owned or controlled by us. We have no control over, and assume
        no responsibility for, the content, privacy policies, or practices of
        any third-party websites. You acknowledge and agree that we shall not be
        responsible for any damages or losses caused by or in connection with
        the use of such third-party websites or services.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        We may update these Terms of Service from time to time. Any changes will
        be effective immediately upon posting the revised terms on this page. We
        encourage you to review these terms periodically to stay informed about
        any updates. Continued use of the website after changes have been made
        signifies your acceptance of the revised Terms of Service.
      </p>
    </div>

    <div className="space-y-4 mt-6">
      <h2 className="text-2xl font-semibold">Governing Law</h2>
      <p className="text-sm md:text-[17px] mt-3 text-justify">
        These Terms of Service are governed by and construed in accordance with
        the laws of your local jurisdiction, without regard to its conflict of
        law provisions. Any disputes arising under or in connection with these
        terms shall be subject to the exclusive jurisdiction of the competent
        courts in your area.
      </p>
    </div>
  </div>
</div>

      </div>
    </motion.div>
  );
};

export default Terms;
