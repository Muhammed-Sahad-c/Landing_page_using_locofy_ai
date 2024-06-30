import NationalAssociations from "./NationalAssociations";
import PropTypes from "prop-types";

const Community = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full h-[476px] flex flex-col items-center justify-start py-8 px-36 box-border gap-[32px] text-center text-17xl text-neutral-d-grey font-body-regular-body-3 md:pl-4 md:pr-4 md:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <h2 className="m-0 w-[590px] relative text-inherit leading-[44px] font-semibold font-inherit inline-block md:text-13xl md:self-stretch md:w-auto">
          Manage your entire community in a single system
        </h2>
        <p className="m-0 relative text-base leading-[24px] text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[32px] text-9xl lg:items-center lg:justify-center md:flex-row md:flex-wrap sm:pl-4 sm:pr-4 sm:box-border">
        <div className="self-stretch shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg bg-white flex flex-col items-center justify-center py-6 px-8 gap-[8px] lg:w-auto lg:[align-self:unset] md:flex-1 sm:flex-1">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <img
              className="w-[65px] relative h-14 object-cover"
              alt=""
              src="/icon1@2x.png"
            />
            <h3 className="m-0 w-[231px] relative text-inherit leading-[36px] font-bold font-inherit inline-block lg:text-5xl md:text-xl">
              National associates
            </h3>
          </div>
          <p className="m-0 self-stretch flex flex-row items-center justify-center text-sm text-neutral-grey">
            <p className="m-0 flex-1 relative leading-[20px]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </p>
        </div>
        <NationalAssociations
          icon="/icon1@2x.png"
          nationalAssociates="National associates"
          propFlex="unset"
          propHeight="unset"
          propAlignSelf="stretch"
        />
        <NationalAssociations
          icon="/icon1@2x.png"
          nationalAssociates="Clubs and groups"
          propFlex="unset"
          propHeight="unset"
          propAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

Community.propTypes = {
  className: PropTypes.string,
};

export default Community;
