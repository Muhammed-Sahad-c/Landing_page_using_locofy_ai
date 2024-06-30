import Button from "./Button";
import PropTypes from "prop-types";

const RightContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-center gap-[32px] text-left text-17xl text-neutral-d-grey font-body-regular-body-3 md:items-start md:justify-center md:flex-[unset] md:self-stretch ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit md:text-13xl sm:text-13xl">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="m-0 self-stretch relative text-sm leading-[20px] text-neutral-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
      </div>
      <Button buttonText="Learn More" />
    </div>
  );
};

RightContainer.propTypes = {
  className: PropTypes.string,
};

export default RightContainer;
