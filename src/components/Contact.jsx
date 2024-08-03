import { Mail, Phone, X } from "lucide-react";
import { resourcesLinks, platformLinks } from "../constants";
import xLogo from '../assets/x-logo.jpg';
import instaLogo from '../assets/insta-logo.png';

const Contact = () => {
  return (
    <footer id="contact" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid  w-full grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-medium mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-light hover:font-normal"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-medium mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-light hover:font-normal"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-[fit-content]">
          <h3 className=" text-white text-md font-medium mb-4">Contacts</h3>
          <div className="flex-col font-light space-y-2 sm:space-y-2">
            <p>Rohini Sec-22, New Delhi - 110086</p>
            <div class="flex items-center gap-1">
              <Mail className="w-6 h-6" />
              <a href="mailto:scrapsmart.info@gmail.com" class="hover:underline">
                <span>scrapsmart.info@gmail.com</span>
              </a>
            </div>



            <div class="flex items-center gap-1">
              <Phone className="w-6 h-6" />
              <a href="tel:+919354905265" class="hover:underline">
                <span>+91 9354905265</span>
              </a>
            </div>

            <div class="flex items-center mt-2 gap-3">
              <a href="https://x.com/ScrapingSmarter">
                <img src={xLogo} alt="logo" className="w-8 rounded-full cursor-pointer hover:brightness-125 transition-all duration-200" />
              </a>
              <a href="https://www.instagram.com/scrap.smart/">
                <img src={instaLogo} alt="logo" className="w-7 rounded-full cursor-pointer hover:brightness-125" />
              </a>
            </div>



          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
