import { Mail, Phone } from "lucide-react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
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
              <Mail className="w-6 h-6"/>
              <span>atulknag@gmail.com</span>
            </div>
            <div class="flex items-center gap-1">
              <Mail className="w-6 h-6"/>
              <span>rudrr1bansal@gmail.com</span>
            </div>
            <div class="flex items-center gap-1">
              <Phone className="w-6 h-6" />
              <span>+91 7454863935 </span>
            </div>
            <div class="flex items-center gap-1">
              <Phone className="w-6 h-6" />
              <span>+91 9354905265 </span>
            </div>
            


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
