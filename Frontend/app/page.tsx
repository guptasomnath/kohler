import { Metadata } from "next";
import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";
import CollapsibleMenu from "./components/Collapsible/CollapsibleMenu";
import CollectionsListview from "./components/CollectionsListview";
import HomeActionsBtn from "./components/HomeActionsBtn";
import { BASE_URL } from "@/constant";
import { generateLinkHtml } from "@/utils/generateLinkHtml";
import CollapsibleInfo from "./components/Collapsible/CollapsibleInfo";
import Script from "next/script";
import homefaqschema from "@/public/homefaqschema.json";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Modern Bathroom & Kitchen Products in Kolkata | Premium Bathware",
//   description:
//     "Discover our range of modern bathroom and kitchen products in Kolkata with Premium Bathware. Elevate your home with our exquisite range. Get Quote Now!",
//   metadataBase: new URL(`${BASE_URL}`),
//   alternates: {
//     canonical: BASE_URL,
//   },
// };

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Modern Bathroom & Kitchen Products in Kolkata | Premium Bathware
        </title>
        <meta
          name="description"
          content="Discover our range of modern bathroom and kitchen products in Kolkata with Premium Bathware. Elevate your home with our exquisite range. Get Quote Now!"
        />
      </Head>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homefaqschema),
        }}
      />
      <main className="fadeIn">
        <div className="relative">
          <Banner />
          <BannerInfo />
          <div className="hidden sm:flex w-1/2 backdrop-blur-sm ml-10 rounded-3xl pl-24 sm:ml-0 sm:rounded-none pr-28 h-auto bg-[#000000b9] flex-col justify-center relative items-start py-12 sm:w-full sm:pl-4 sm:pr-4">
            <h2 className="text-white text-[50px] font-[400] leading-[55px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
              LUXURY REDEFINED, Premium Bathware
            </h2>
            <p className="text-white font-thin text-[14px] sm:text-[13px] slidUp">
              Indulge in luxurious comfort with our premium bathroom products,
              meticulously crafted to elevate your daily routine to a new level
              of sophistication.
            </p>
            <HomeActionsBtn />
          </div>
        </div>
        <CollectionsListview />
        <CollapsibleMenu heading="KNOW MORE ABOUT US">
          <CollapsibleInfo
            heading="Premium Bathware - Modern Bathroom & Kitchen Products in Kolkata"
            description="Our services of bathware products give you comfort while making your sanctuary more susceptible to relaxation. With our premium bathware services, luxury products come to your doorstep. Our services of proper planning and execution of installation make your experiences more convenient while giving you a tension-free zone to relax in your house. Providing products of supreme luxury makes our bath ware services professionally authentic while giving you a vast range of collections for your choices. As we are one of the most trustworthy authorized partners of Kohler, we give you a chance to experience the best quality of bath ware that reflects both, style and grace. "
          />
          <CollapsibleInfo
            heading="Our features for premium products"
            description="Products that are reliable for sustainable usage at reasonable prices are the best attraction for us. Variations of our products give us a huge range for designing that gives you a chance to explore your bathware. As the new products are the most demanded ones for you, it makes us the best in service. With our resources of product development, the level of expert services becomes further prominent for you. As we have determined our best services for your comfort and luxury, it gives you a viable experience of having an aesthetically pleasing bath space in your house. "
          />
          <CollapsibleInfo heading="New Launches">
            <div
              dangerouslySetInnerHTML={{
                __html: `Products of luxurious bathware like designer ${generateLinkHtml(
                  "/basin-area/basin",
                  "basin"
                )}
                  , and trendy and high-functioning ${generateLinkHtml(
                    "/basin-area/faucets",
                    "faucets"
                  )} give our products more
                  susceptibility for your home. ${generateLinkHtml(
                    "/basin-area/basin-fittings",
                    "Basin fittings"
                  )} with our ${generateLinkHtml(
                  "/new-launches/new-launches",
                  "new launches"
                )}
                  make your experience more definitive since they make our services
                  more convenient for you. New products like ${generateLinkHtml(
                    "/showering-area/showers",
                    "showers"
                  )} and ${generateLinkHtml(
                  "/showering-area/hand-shower",
                  "hand showers"
                )}
                  make our services more comfortable for you. As the range of our
                  products is the most popular in the market of stylish and designer
                  bathware, it has helped us to gain better sustenance in providing
                  you with our best quality products. Mostly the range of traditional
                  household bathware to luxurious bathware, all are provided by our
                  experts while making our services more fitting for urban styles.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Basin products">
            <div
              dangerouslySetInnerHTML={{
                __html: `Our products of the bathroom and the area attached can be developed with reliable and long-lasting materials. As our designs for ${generateLinkHtml(
                  "/commercial/sensor-faucets",
                  "sensor faucets"
                )} along with ${generateLinkHtml(
                  "/commercial/urinals-sensors",
                  "urinal sensors"
                )} are the latest attraction for your bathware, it gives you modernized bathroom facilities with automatic systems. Our bathware products including the basins are made with durable materials while implementing style statements to it. High-quality products with proper materialistic balance help the products to become very eye-catching.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Toilet products">
            <div
              dangerouslySetInnerHTML={{
                __html: `Various ranges of toilet accessories with products are provided to you as our varieties like ${generateLinkHtml(
                  "/toilet-area/toilets",
                  "toilets"
                )} with designer ${generateLinkHtml(
                  "/toilet-area/toilet-seats",
                  "toilet seats"
                )} have been identified. The attributes of ${generateLinkHtml(
                  "/toilet-area/smart-toilet",
                  "smart toilets"
                )} and their installation have become further effective with us. Designs for our new collection range of ${generateLinkHtml(
                  "/basin-area/bathroom-mirror-cabinets",
                  "bathroom mirror cabinets"
                )} and other designs of ${generateLinkHtml(
                  "/basin-area/bathroom-vanity",
                  "bathroom vanity"
                )} make our collection more intriguing for your houses. ${generateLinkHtml(
                  "/showering-area/digital-showering",
                  "Smart showers"
                )} with extensive quality bathware make your experience more comfortable with style. Our designs for ${generateLinkHtml(
                  "/showering-area/diverters-trims",
                  "diverters & trims"
                )} give you more variety in your bathroom. Designs for ${generateLinkHtml(
                  "/showering-area/shower-doors",
                  "shower doors"
                )} make it further effective for you since the experience of luxury gains more susceptibility. ${generateLinkHtml(
                  "/showering-area/body-spray",
                  "Spray showers"
                )} are another attraction of our product ranges which makes the experience of luxury bathware more effective. `,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Kitchen products">
            <div
              dangerouslySetInnerHTML={{
                __html: `Kitchen setups with extensive features like ${generateLinkHtml(
                  "/commercial/flush-faucets-valves",
                  "flush faucets and valves"
                )} help our products gain more popularity in urban households. As our range of collections for ${generateLinkHtml(
                  "/commercial/sensor-faucets",
                  "sensor faucets"
                )} kitchen area settings is very resourceful for your usage, it helps to make kitchen spaces filled with utility. For our designer variations, the kitchen area gains more utility with stylish outlooks for urban ${generateLinkHtml(
                  "/kitchen-area/kitchen-faucet",
                  "kitchen faucets"
                )}. These products make your experience more resourceful since they provide satisfying services in the kitchen`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo
            heading="Services of extensive expertise"
            description="Our primary focus is to provide you with better opportunities for bathware experiences since our experts choose to give you proper comfort and luxury all at once. Expert bathware products with our designs give you the most satisfying experiences of all time."
          />

          <CollapsibleInfo heading="Design">
            <div
              dangerouslySetInnerHTML={{
                __html: `Our designs for ${generateLinkHtml(
                  "/toilet-area/bathroom-accessories",
                  "bathroom accessories"
                )} make the experience of luxury living more integrated with your lifestyle. As modern bathroom designs are primarily based on your comfort, they give you high-quality standards in your bathroom areas. Quality of reliable bath ware with extensive composition makes our designs more eye-catching while giving you a chance to show off their aesthetic value.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Sustainability">
            <div
              dangerouslySetInnerHTML={{
                __html: `We provide products that are very reliable and convenient for personal usage as we build quality products with proper resources. Our products have variations for ${generateLinkHtml(
                  "/commercial/commercial-accessories",
                  "commercial bathroom accessories"
                )} that make you inclined to our brand services. With our products, you have the best safety and aesthetics that make your livelihood more content and satisfying.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Comfort">
            <div
              dangerouslySetInnerHTML={{
                __html: `Our services are aimed at your comfort as we provide you with the best kind of bathware products and accessories. Feasible services with extensive quality of comfort make our products more susceptible for future usage which gives us more stability and profundity in our services. Proper setups for ${generateLinkHtml(
                  "/showering-area/shower-fitting",
                  "shower fittings"
                )} are very reliable with us since we also give you the experience of ${generateLinkHtml(
                  "/wellness/steam",
                  "steam"
                )} showers with their proper features.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo
            heading="Functionality"
            description="With our services of experts, our provided services become more susceptible for daily usage, or even for commercial purposes. As our experts make the services of installation with proper strategic planning, execution of the plans becomes more prominent. With the customized services, our experts give you the best ideas for styling your bathroom which makes it more prominent for long-term usage. The functionality of these products increases with our services, as our expertise in customized features gives you the most reliable experience of the modern era."
          />

          <CollapsibleInfo
            heading="Segmentation of comfort in the Bathroom areas"
            description="Our extensive structures for bathrooms are the most thrilling attractions as we provide various quality materials with extensive designs for your preferences. Systematic services for the bathroom areas give you a better experience while making them more comfortable for long-lasting usage"
          />

          <CollapsibleInfo
            heading="Basin area"
            description="Our services for basins with reliable features faucets make them the best kind of installation that makes your daily tasks more fun. Aesthetic designs of basins are available at us as they make your experience in the kitchen more susceptible to contemporary styles"
          />
          <CollapsibleInfo heading="Showering area">
            <div
              dangerouslySetInnerHTML={{
                __html: `Different ranges of products make our services very compatible for your use since our services for ${generateLinkHtml(
                  "/showering-area/shower-doors",
                  "shower doors"
                )} give you more variety in bathroom setups. Our range of ${generateLinkHtml(
                  "/commercial/customized-mirror",
                  "customized mirrors"
                )} makes it more prominent for you since it gives a touch of personalization to your bathroom.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Toilet area">
            <div
              dangerouslySetInnerHTML={{
                __html: `Modernized systems for ${generateLinkHtml(
                  "/toilet-area/cisterns-and-flushing",
                  "cisterns and flushing"
                )} with the technology of ${generateLinkHtml(
                  "/smart-products/electronic-bidet-seats",
                  "electronic bidet seats"
                )} make your experience more satisfying in your toilet spaces. As our products are more integrated with the urban lifestyle, they give you the best quality of urban styling.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo heading="Smart products">
            <div
              dangerouslySetInnerHTML={{
                __html: `Our product range also includes ${generateLinkHtml(
                  "/wellness/bathtubs",
                  "bathtubs"
                )} that give you the most satisfying experience in your bathing zone. With our range of ${generateLinkHtml(
                  "/wellness/bathtub-fillers",
                  "bathtub fillers"
                )}, the experience of satisfactory bathroom setups becomes more susceptible, giving you a better experience in your home space.`,
              }}
            />
          </CollapsibleInfo>

          <CollapsibleInfo
            heading="Commercial products"
            description="We also produce and provide commercially built basins and toilet seats that can give official spaces more elegance. With our product variations and expertise in installation and fittings, we get to make our services more compatible for each user."
          />

          <CollapsibleInfo
            heading="Wellness"
            description="Our different ranges of products give you the best experience of luxury with aesthetic value in bathware. These products and our services make your experience with us more reliable which enhances the viability of our brand further. As we provide extensive quality production and material resources, it helps to make our services more sustainable for every kind of use. With our services and expertise in management, we give you the best quality of next-level products that give you a divine and refreshing experience in your bathroom."
          />
        </CollapsibleMenu>
      </main>
    </>
  );
}
