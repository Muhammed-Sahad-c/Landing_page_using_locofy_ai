import PropTypes from "prop-types";

const Button = ({ className = "", buttonText }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-3.5 px-8 bg-forestgreen rounded flex flex-row items-center justify-center ${className}`}
    >
      <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-white text-center">
        {buttonText}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Button;
