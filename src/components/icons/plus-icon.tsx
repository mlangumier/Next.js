import { TIconElement } from "@/src/models/common-model";

const PlusIcon: TIconElement = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.1603 7.48889L0.817383 7.48889"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M6.98926 1.31753L6.98926 13.6605"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default PlusIcon;
