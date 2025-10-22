import React from "react";
import { MoveLeft } from "lucide-react";
import { asset } from "../assets/asset";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Privacy = () => {
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
            <h1 className="text-3xl font-bold mb-2">PRIVACY POLICY</h1>
            <p className="text-zinc-400 text-sm md:text-sm">
              Last updated <span>October 14, 2025</span>
            </p>
            <p className="my-4 text-sm md:text-[17px] rounded-lg w-full py-4 bg-[#DC8B00]">
              This privacy policy explains how we collect, use, and protect your
              personal information when you visit our website.
            </p>
          </div>
          <div>
            <div className="space-y-4 mt-6">
              <div className="w-full h-[1px] bg-gray-700 mb-4"></div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Privacy Policy</h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                We are committed to protecting your privacy. We collect personal
                information such as your name and email address when you sign up
                for our newsletter or contact us through our website. We use
                this information to respond to your inquiries and send you
                updates about our services. We do not share your personal
                information with third parties without your consent, except as
                required by law. We implement security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. By using our website, you consent to
                our privacy policy.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">Usage Data</h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                Usage Data is collected automatically when using the Service.
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data. When You
                access the Service by or through a mobile device, We may collect
                certain information automatically, including, but not limited
                to, the type of mobile device You use, Your mobile device's
                unique ID, the IP address of Your mobile device, Your mobile
                operating system, the type of mobile Internet browser You use,
                unique device identifiers and other diagnostic data. We may also
                collect information that Your browser sends whenever You visit
                Our Service or when You access the Service by or through a
                mobile device.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Tracking Technologies and Cookies
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies We use include beacons, tags, and scripts to
                collect and track information and to improve and analyze Our
                Service. The technologies We use may include:
                <ul className="flex flex-col gap-2 my-3">
                  <li className="list-disc mx-4">
                    <span className="font-bold">
                      Cookies or Browser Cookies.
                    </span>{" "}
                    A cookie is a small file placed on Your Device. You can
                    instruct Your browser to refuse all Cookies or to indicate
                    when a Cookie is being sent. However, if You do not accept
                    Cookies, You may not be able to use some parts of our
                    Service. Unless you have adjusted Your browser setting so
                    that it will refuse Cookies, our Service may use Cookies.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold">Web Beacons.</span> Certain
                    sections of our Service and our emails may contain small
                    electronic files known as web beacons (also referred to as
                    clear gifs, pixel tags, and single-pixel gifs) that permit
                    the Company, for example, to count users who have visited
                    those pages or opened an email and for other related website
                    statistics (for example, recording the popularity of a
                    certain section and verifying system and server integrity).
                  </li>
                </ul>
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. You can learn more about cookies on
                TermsFeed website article.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Use of Your Personal Data
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                The Company may use Personal Data for the following purposes:
                <ul className="flex flex-col gap-2 my-3">
                  <li className="list-disc mx-4">
                    <span className="font-bold">
                      To provide and maintain our Service,
                    </span>{" "}
                    including to monitor the usage of our Service.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold"> To manage Your Account:</span>{" "}
                    to manage Your registration as a user of the Service. The
                    Personal Data You provide can give You access to different
                    functionalities of the Service that are available to You as
                    a registered user.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold">
                      For the performance of a contract:
                    </span>{" "}
                    the development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold"> To contact You:</span> To
                    contact You by email, telephone calls, SMS, or other
                    equivalent forms of electronic communication, such as a
                    mobile application's push notifications regarding updates or
                    informative communications related to the functionalities,
                    products or contracted services, including the security
                    updates, when necessary or reasonable for their
                    implementation.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold"> To provide You:</span> with
                    news, special offers, and general information about other
                    goods, services and events which We offer that are similar
                    to those that you have already purchased or inquired about
                    unless You have opted not to receive such information.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold"> For other purposes:</span> We
                    may use Your information for other purposes, such as data
                    analysis, identifying usage trends, determining the
                    effectiveness of our promotional campaigns and to evaluate
                    and improve our Service, products, services, marketing and
                    your experience.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold"> For business transfers:</span>{" "}
                    We may use Your information to evaluate or conduct a merger,
                    divestiture, restructuring, reorganization, dissolution, or
                    other sale or transfer of some or all of Our assets, whether
                    as a going concern or as part of bankruptcy, liquidation, or
                    similar proceeding, in which Personal Data held by Us about
                    our Service users is among the assets transferred.
                  </li>
                  <li className="list-disc mx-4">
                    <span className="font-bold">
                      {" "}
                      To manage Your requests:{" "}
                    </span>
                    To attend and manage Your requests to Us.
                  </li>
                </ul>
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Retention of Your Personal Data
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer periods.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Transfer of Your Personal Data
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ from those from Your jurisdiction. Your consent to
                this Privacy Policy followed by Your submission of such
                information represents Your agreement to that transfer. The
                Company will take all steps reasonably necessary to ensure that
                Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers. If We need to rely on consent as a
                legal basis for processing Your information and Your country
                requires consent from a parent, We may require Your parent's
                consent before We collect and use that information.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Links to Other Websites
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or
                services.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Changes to this Privacy Policy
              </h2>
              <p className="text-sm md:text-[17px] mt-3 text-justify">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. We will let You know via email and/or a prominent
                notice on Our Service, prior to the change becoming effective
                and update the "Last updated" date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
