import LogoIcon from "./LogoIcon";
import PropTypes from "prop-types";

const FooterSiteDetails = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-col items-start justify-start gap-[40px] text-left text-sm text-neutral-silver font-body-regular-body-3 ${className}`}
    >
      <LogoIcon logo="/logo1@2x.png" />
      <div className="overflow-hidden flex flex-col items-center justify-start gap-[8px]">
        <div className="w-[350px] relative leading-[20px] inline-block">
          Copyright © 2020 Nexcent ltd.
        </div>
        <div className="w-[350px] relative leading-[20px] inline-block">
          All rights reserved
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
        <img
          className="w-8 relative h-8 object-cover"
          alt=""
          src="/social-icons@2x.png"
        />
        <img
          className="w-8 relative h-8 object-cover"
          alt=""
          src="/social-icons@2x.png"
        />
        <img
          className="w-8 relative h-8 object-cover"
          alt=""
          src="/social-icons@2x.png"
        />
        <img
          className="w-8 relative h-8 object-cover"
          alt=""
          src="/social-icons@2x.png"
        />
      </div>
    </div>
  );
};

FooterSiteDetails.propTypes = {
  className: PropTypes.string,
};

export default FooterSiteDetails;
