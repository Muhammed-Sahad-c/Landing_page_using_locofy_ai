import RightContainer from "./RightContainer";
import PropTypes from "prop-types";

const FeatureSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-center justify-center py-0 px-36 gap-[32px] md:flex-col sm:items-start sm:justify-center sm:pl-4 sm:pr-4 sm:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-[52px] px-0 md:items-start md:justify-center">
        <img
          className="w-[330px] relative h-[303.8px] object-cover md:flex md:w-[215px] md:h-[197px]"
          alt=""
          src="/mobileloginrafiki@2x.png"
        />
      </div>
      <RightContainer />
    </div>
  );
};

FeatureSection.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection;
