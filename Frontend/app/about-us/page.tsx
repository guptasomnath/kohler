import Image from "next/image";
import React from "react";
import Vision from "../components/about/Vision";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";
import AboutImage from "@/public/banner6.png";
import type { Metadata } from "next";
import { BASE_URL } from "@/constant";

export const metadata: Metadata = {
  title: "Learn About Who We Are | Premium Bathware",
  description:
    "Learn about us and our commitment to modern bathroom and kitchen solutions in Kolkata. Discover our mission, vision, and values. Contact us today!",
  alternates: {
    canonical: BASE_URL + "/about-us",
  },
};

function page() {
  return (
      <div className="w-full bg-[#F5F5F5] fadeIn">
        <Image
          className="w-full object-cover h-[350px]"
          src={AboutImage}
          alt="banner"
          height={1500}
          width={1500}
        />
        <section className="px-40 pt-[3rem] sm:px-3 sm:pt-12">
          <h1 className="font-[210] text-3xl pb-3">About Us</h1>
          <p className="text-[14px] leading-[1.6">
            Welcome to Premium Bathware, where luxury meets functionality in
            every product we offer. As a leading brand in the realm of bathroom
            and kitchen essentials, we pride ourselves on delivering exquisite
            designs and unparalleled quality to enhance your living spaces.{" "}
            <br />
            <br /> At Premium Bathware, we understand the significance of
            creating environments that reflect your unique taste and lifestyle.
            That&apos;s why we meticulously curate our collection to encompass a
            wide array of stylish and innovative products, ranging from sleek
            faucets and designer sinks to opulent bath accessories and
            state-of-the-art kitchen fixtures. <br />
            <br /> Our commitment to excellence extends beyond just aesthetics.
            We prioritize the use of premium materials and cutting-edge
            technology to ensure durability, performance, and sustainability in
            all our offerings. Whether you&apos;re renovating your home or
            embarking on a new construction project, our products are engineered
            to exceed your expectations in both form and function. <br />
            <br /> As a customer-centric brand, we strive to provide exceptional
            service at every step of your journey with us. From personalized
            design consultations to seamless delivery and installation, our
            dedicated team is here to assist you in transforming your vision
            into reality. <br />
            <br /> Discover the epitome of luxury and sophistication with
            Premium Bathware. Explore our exquisite collection today and elevate
            your living spaces to new heights of elegance and refinement.
          </p>

          <ul className="grid grid-cols-3 pt-16 sm:grid-cols-1">
            <Vision
              className="bg-[#E1E1E1]"
              text="Mission"
              description="Our Mission at Premium Bathware is to elevate everyday living by providing premium-quality bathroom and kitchen products that combine elegance, functionality, and sustainability, enhancing the beauty and comfort of every home."
            />
            <Vision
              className="bg-[#CECECE]"
              text="Vision"
              description="At Premium Bathware, our vision is simple yet profound: to redefine luxury living by offering exquisite bathroom and kitchen solutions that elevate everyday experiences. We strive to inspire creativity, sophistication, and functionality in every home, setting new standards of excellence in design and innovation."
            />

            <Vision className="bg-[#BABABA]" text="Values">
              <ul className="list-disc">
                <li>Quality Craftsmanship</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Integrity</li>
                <li>Design Excellence</li>
                <li>Community Engagement</li>
              </ul>
            </Vision>
          </ul>

          <p className="w-full text-center pt-10 text-1xl">
            FEEL FREE TO CONTACT US
          </p>
          <div className="mt-5 flex items-center justify-center gap-8 sm:gap-8">
            <Link href="tel:9831234910" className="flex items-center gap-1">
              <IoCall size={13} className="text-gray-500" />
              <span className="text-lg text-gray-500 sm:text-sm">
                9831234910
              </span>
            </Link>

            <Link
              href="mailto:subrata.ash@gmail.com"
              className="flex items-center gap-1"
            >
              <MdMarkEmailRead size={13} className="text-gray-500" />
              <span className="text-lg text-gray-500 sm:text-sm">
                subrata.ash@gmail.com
              </span>
            </Link>
          </div>
        </section>
      </div>
  );
}

export default page;
