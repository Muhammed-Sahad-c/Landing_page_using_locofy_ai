import { useMemo } from "react";
import PropTypes from "prop-types";

const NationalAssociations = ({
  className = "",
  icon,
  nationalAssociates,
  propFlex,
  propHeight,
  propAlignSelf,
}) => {
  const nationalAssociationsStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propHeight, propAlignSelf]);

  return (
    <div
      className={`flex-1 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg bg-white h-[260px] flex flex-col items-center justify-center py-6 px-8 box-border gap-[8px] text-center text-9xl text-neutral-d-grey font-body-regular-body-3 lg:w-auto lg:[align-self:unset] md:flex-1 sm:flex-1 ${className}`}
      style={nationalAssociationsStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
        <img
          className="w-[65px] relative h-14 object-cover"
          alt=""
          src={icon}
        />
        <h3 className="m-0 self-stretch h-9 relative text-inherit leading-[36px] font-bold font-inherit inline-block lg:text-5xl md:text-xl sm:text-xl">
          {nationalAssociates}
        </h3>
      </div>
      <p className="m-0 self-stretch flex flex-row items-center justify-center text-sm text-neutral-grey">
        <h6 className="m-0 w-[251px] relative text-inherit leading-[20px] font-normal font-inherit inline-block shrink-0">
          Our membership management software provides full automation of
          membership renewals and payments
        </h6>
      </p>
    </div>
  );
};

NationalAssociations.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  nationalAssociates: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default NationalAssociations;
