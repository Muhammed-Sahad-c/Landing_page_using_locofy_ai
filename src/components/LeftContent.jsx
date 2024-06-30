import PropTypes from "prop-types";

const LeftContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-center gap-[32px] md:items-center md:justify-center md:flex-[unset] md:self-stretch self-stretch flex-1 flex flex-col items-start justify-center gap-[32px] text-base text-forestgreen md:items-center md:justify-center md:flex-[unset] md:self-stretch ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] md:items-center md:justify-center self-stretch flex flex-col items-start justify-start gap-[16px] md:items-center md:justify-center">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit md:font-semibold md:font-body-regular-body-3 md:text-25xl md:text-center sm:text-13xl sm:self-stretch sm:w-auto m-0 self-stretch relative text-inherit font-semibold font-inherit md:font-semibold md:font-body-regular-body-3 md:text-25xl md:text-center sm:text-13xl sm:self-stretch sm:w-auto">
          <span>{`Lessons and insights `}</span>
          <span className="text-forestgreen">from 8 years</span>
        </h1>
        <p className="m-0 self-stretch relative text-base leading-[24px] text-neutral-grey md:text-center m-0 self-stretch relative leading-[24px] text-neutral-grey md:text-center">
          Where to grow your business as a photographer: site or social media?
        </p>
      </div>
      <button className="cursor-pointer [border:none] py-3.5 px-8 bg-forestgreen rounded flex flex-row items-center justify-center cursor-pointer [border:none] py-3.5 px-8 bg-forestgreen rounded flex flex-row items-center justify-center">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-white text-center relative text-base leading-[24px] font-medium font-body-regular-body-3 text-white text-center">
          Register
        </div>
      </button>
    </div>
  );
};

LeftContent.propTypes = {
  className: PropTypes.string,
};

export default LeftContent;
