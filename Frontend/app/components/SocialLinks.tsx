import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="">
      <p className="text-white font-[200] text-3xl">FOLLOW US</p>
      <ul className="flex items-center gap-8 mt-6">
        <li>
          <Link href="https://www.facebook.com/premiumbathware">
            <FaFacebookF color="#fff" size={18} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/premiumbathware_in/">
            <FaInstagram color="#fff" size={18} />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/67336660/admin/feed/posts/">
            <FaLinkedin color="#fff" size={18} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
