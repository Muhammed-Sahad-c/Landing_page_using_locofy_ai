import LeftContent from "./LeftContent";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-neutral-silver max-w-full flex flex-row items-center justify-center py-24 px-36 box-border gap-[32px] md:flex-col sm:pl-4 sm:pr-4 sm:box-border ${className}`}
    >
      <LeftContent />
      <div className="flex-1 flex flex-row items-center justify-center md:flex-[unset] md:self-stretch">
        <img
          className="w-[391px] relative h-[407px] object-cover md:w-[300px] md:h-[312px] sm:w-[200px] sm:h-[218px]"
          alt=""
          src="/illustration@2x.png"
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
