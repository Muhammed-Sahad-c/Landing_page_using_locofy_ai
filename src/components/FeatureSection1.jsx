import RightContainer from "./RightContainer";
import PropTypes from "prop-types";

const FeatureSection1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-center justify-center py-0 px-36 gap-[32px] text-left text-17xl text-neutral-d-grey font-body-regular-body-3 md:flex-col sm:items-start sm:justify-center sm:pl-4 sm:pr-4 sm:box-border ${className}`}
    >
      <RightContainer />
      <div className="self-stretch flex flex-col items-center justify-center py-[52px] px-0 md:items-start md:justify-center">
        <img
          className="w-[330px] relative h-[303.8px] object-cover md:flex md:w-[215px] md:h-[197px]"
          alt=""
          src="/mobileloginrafiki@2x.png"
        />
      </div>
    </div>
  );
};

FeatureSection1.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection1;
