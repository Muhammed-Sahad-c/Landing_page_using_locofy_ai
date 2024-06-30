import NationalAssociations from "../components/NationalAssociations";
import FeatureSection1 from "../components/FeatureSection1";
import FeatureSection from "../components/FeatureSection";
import FooterSiteDetails from "../components/FooterSiteDetails";
import FooterLinks from "../components/FooterLinks";

const LandingPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-start justify-start gap-[64px] text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
      <div className="self-stretch flex flex-col items-start justify-start text-left text-45xl">
        <div className="self-stretch bg-neutral-silver overflow-hidden flex flex-col items-center justify-center py-[22px] px-[105px] sm:pl-4 sm:pr-4 sm:box-border">
          <nav className="m-0 self-stretch flex flex-row items-center justify-between text-left text-base text-gray font-body-regular-body-3">
            <img
              className="w-[154.5px] h-6 object-cover"
              alt=""
              src="/logo@2x.png"
            />
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[32px] md:hidden">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                Home
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Service
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Feature
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Testimonial
              </a>
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Faq
              </a>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[14px] md:hidden">
              <button className="cursor-pointer [border:none] py-2.5 px-5 bg-neutral-silver rounded-md flex flex-row items-center justify-start">
                <div className="relative text-sm leading-[20px] font-medium font-body-regular-body-3 text-forestgreen text-center">
                  Login
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2.5 px-5 bg-forestgreen rounded-md flex flex-row items-center justify-start">
                <div className="relative text-sm leading-[20px] font-medium font-body-regular-body-3 text-white text-center">
                  Sign up
                </div>
              </button>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 w-8 relative overflow-hidden shrink-0 hidden lg:hidden md:flex">
              <img
                className="absolute h-[48.13%] w-[64.06%] top-[24.06%] right-[16.25%] bottom-[27.81%] left-[19.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </button>
          </nav>
        </div>
        <div className="self-stretch bg-neutral-silver flex flex-row items-center justify-center py-24 px-36 gap-[32px] md:flex-col sm:pl-4 sm:pr-4 sm:box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[32px] md:items-center md:justify-center md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] md:items-center md:justify-center">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit md:font-semibold md:font-body-regular-body-3 md:text-25xl md:text-center sm:text-13xl sm:self-stretch sm:w-auto">
                <span>{`Lessons and insights `}</span>
                <span className="text-forestgreen">from 8 years</span>
              </h1>
              <p className="m-0 self-stretch relative text-base leading-[24px] text-neutral-grey md:text-center">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-8 bg-forestgreen rounded flex flex-row items-center justify-center">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-white text-center">
                Register
              </div>
            </button>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[391px] relative h-[407px] object-cover md:w-[300px] md:h-[312px] sm:w-[200px] sm:h-[218px]"
              alt=""
              src="/illustration@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-start py-0 px-36 gap-[32px] md:items-start md:justify-start md:pl-4 md:pr-4 md:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px] md:items-start md:justify-start">
          <h2 className="m-0 relative text-inherit leading-[44px] font-semibold font-inherit md:text-13xl md:text-left">
            Our Clients
          </h2>
          <p className="m-0 relative text-base leading-[24px] text-neutral-grey md:text-left">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-4 px-0 gap-[32px_64px] md:items-center md:justify-start">
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <img
            className="w-12 relative rounded-lg h-12 object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-start py-0 px-36 gap-[32px] md:items-start md:justify-start md:pl-4 md:pr-4 md:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px] md:items-start md:justify-start">
          <h2 className="m-0 relative text-inherit leading-[44px] font-semibold font-inherit md:text-13xl md:text-left">
            Mange your entire community in a single system
          </h2>
          <p className="m-0 relative text-base leading-[24px] text-neutral-grey md:text-left">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[32px] lg:items-center lg:justify-center md:flex-row md:flex-wrap sm:items-center sm:justify-center sm:pl-4 sm:pr-4 sm:box-border">
          <NationalAssociations
            icon="/icon@2x.png"
            nationalAssociates="National associates"
          />
          <NationalAssociations
            icon="/icon1@2x.png"
            nationalAssociates="National associates"
            propFlex="1"
            propHeight="260px"
            propAlignSelf="unset"
          />
          <NationalAssociations
            icon="/icon2@2x.png"
            nationalAssociates="Clubs and groups"
            propFlex="1"
            propHeight="260px"
            propAlignSelf="unset"
          />
        </div>
      </div>
      <FeatureSection1 />
      <FeatureSection />
      <div className="self-stretch bg-neutral-black flex flex-row items-start justify-start py-16 px-[165px] gap-[125px] md:flex-col md:gap-[64px] sm:pl-4 sm:pr-4 sm:box-border">
        <FooterSiteDetails />
        <FooterLinks />
      </div>
    </div>
  );
};

export default LandingPage;
