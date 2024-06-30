import PropTypes from "prop-types";

const FooterLinks = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-start justify-start gap-[30px] text-left text-xl text-white font-body-regular-body-3 md:flex-row md:flex-wrap sm:flex-col ${className}`}
    >
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 w-40 relative text-inherit leading-[28px] font-semibold font-inherit inline-block">
          Company
        </h3>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            About us
          </a>
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Blog
          </a>
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Contact us
          </a>
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Pricing
          </a>
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Testimonials
          </a>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 w-40 relative text-inherit leading-[28px] font-semibold font-inherit inline-block">
          Support
        </h3>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Help center
          </a>
          <a className="[text-decoration:none] w-40 relative leading-[20px] text-[inherit] inline-block">
            Terms of services
          </a>
          <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
            Legal
          </a>
          <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
            Privacy policy
          </a>
          <a className="[text-decoration:none] relative leading-[20px] text-[inherit]">
            Status
          </a>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 w-40 relative text-inherit leading-[28px] font-semibold font-inherit inline-block">
          Stay up to date
        </h3>
        <div className="w-[255px] relative h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white opacity-[0.2]" />
          <img
            className="absolute h-[45%] w-[7.06%] top-[27.5%] right-[4.71%] bottom-[27.5%] left-[88.24%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/essential-icons--send@2x.png"
          />
          <input
            className="[border:none] [outline:none] font-body-regular-body-3 text-sm bg-[transparent] absolute top-[22.5%] left-[4.71%] leading-[20px] text-text-gray-300 text-left"
            placeholder="Your email address"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;
