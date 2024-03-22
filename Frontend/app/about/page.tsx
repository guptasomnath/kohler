import Image from "next/image";
import React from "react";
import Vision from "../newcomponents/about/Vision";
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";

function page() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <Image
        className="w-full"
        src="https://www.jaquar.com/images/thumbs/0043870_About-Page-(Header)_1920x450.jpeg"
        alt="banner"
        height={1280}
        width={1280}
      />
      <section className="px-40 pt-24">
        <h1 className="font-[210] text-3xl pb-3">About</h1>
        <p className="text-[14px] leading-[1.6">
          Conceived in 1960 by Late Shri N. L. Mehra and headquarter in Manesar,
          Jaquar Group is a rapidly growing multi-diversified ‘Complete Bathroom
          and Lighting Solutions’ brand. Built on the platform of highest
          quality standards, aesthetics and with the intent of providing
          world-class products, the Group caters to various segments of bathroom
          and lighting industry for the Luxury, premium and value segments
          through its brands – Artize, Jaquar and Essco. As undisputed market
          leaders the company has presence in over 55 countries across Europe,
          Middle East, Asia- Pacific and Africa region, 7 state-of-the-art
          manufacturing units in India and 1 in South Korea.
        </p>

        {/* <p className="w-full text-center pt-10 text-1xl">A RESPONSIBLE GREEN COMPANY</p> */}

        <ul className="grid grid-cols-3 pt-16">
          <Vision
            className="bg-[#E1E1E1]"
            text="Mission"
            description="Continuously striving to create value and exceeding customer’s expectations in quality, delivery and cost effectiveness through continuous product innovation and cutting edge technologies."
          />
          <Vision
            className="bg-[#CECECE]"
            text="Vision"
            description="To be the brand that inspires people worldwide to rediscover the joys of water and light."
          />

          <Vision className="bg-[#BABABA]" text="Values">
            <ul className="list-disc">
              <li>Passion for Technology</li>
              <li>Highest quality standards</li>
              <li>Building strong relationship</li>
              <li>Excellent customer service</li>
              <li>Taking care of our people</li>
              <li>Integrity</li>
            </ul>
          </Vision>
        </ul>

        <p className="w-full text-center pt-10 text-1xl">
          FEEL FREE TO CONTACT US
        </p>
        <div className="mt-5 flex items-center justify-center gap-8">
          <Link href="9382413005" className="flex items-center gap-1">
            <IoCall size={13} className="text-gray-500" />
            <span className="text-lg text-gray-500">9382413005</span>
          </Link>

          <Link
            href="mailto:testing@gmail.com"
            className="flex items-center gap-1"
          >
            <MdMarkEmailRead size={13} className="text-gray-500" />
            <span className="text-lg text-gray-500">testing@gmail.com</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default page;
