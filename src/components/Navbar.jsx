import LogoIcon from "./LogoIcon";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-neutral-silver max-w-full overflow-hidden flex flex-col items-start justify-start py-[22px] px-[105px] box-border ${className}`}
    >
      <nav className="m-0 self-stretch flex flex-row items-center justify-between text-left text-base text-gray font-body-regular-body-3">
        <LogoIcon logo="/logo@2x.png" propWidth="154.5px" propHeight="24px" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[50px]">
          <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
            Home
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Service
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Feature
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Testimonial
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Faq
          </a>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[14px]">
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-neutral-silver rounded-md flex flex-row items-center justify-start">
            <div className="relative text-sm leading-[20px] font-medium font-body-regular-body-3 text-forestgreen text-center">
              Login
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-forestgreen rounded-md flex flex-row items-center justify-start">
            <div className="relative text-sm leading-[20px] font-medium font-body-regular-body-3 text-white text-center">
              Sign up
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
