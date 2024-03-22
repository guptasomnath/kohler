import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function SocialLinks() {
  return (
    <div className="">
      <p className="text-white font-[200] text-3xl">Follow Us</p>
      <ul className="flex items-center gap-8 mt-6">
        <li>
          <FaFacebookF color="#fff" size={18} />
        </li>
        <li>
          <FaInstagram color="#fff" size={18} />
        </li>
        <li>
          <FaYoutube color="#fff" size={18} />
        </li>
        <li>
          <FaLinkedin color="#fff" size={18} />
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
