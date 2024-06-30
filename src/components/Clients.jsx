import PropTypes from "prop-types";

const Clients = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white max-w-full flex flex-col items-center justify-start py-8 px-36 box-border gap-[32px] text-center text-17xl text-neutral-d-grey font-body-regular-body-3 md:pl-4 md:pr-4 md:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit">
          Our Clients
        </h1>
        <p className="m-0 self-stretch relative text-base leading-[24px] text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="self-stretch h-[98px] flex flex-row flex-wrap items-center justify-center gap-[32px_64px] md:items-center md:justify-center">
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="w-12 relative rounded-lg h-12 object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </div>
    </div>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
};

export default Clients;
