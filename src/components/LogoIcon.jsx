import { useMemo } from "react";
import PropTypes from "prop-types";

const LogoIcon = ({ className = "", logo, propWidth, propHeight }) => {
  const logoIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className={`w-[191px] h-[29.7px] object-cover ${className}`}
      alt=""
      src={logo}
      style={logoIconStyle}
    />
  );
};

LogoIcon.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default LogoIcon;
