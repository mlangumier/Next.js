import { XMarkIcon } from "@heroicons/react/24/outline";

export const ToastComponent = ({
  closeToast,
  icon,
  message,
  textColor,
  bgColor,
}: any) => (
  <div
    className={`absolute inset-x-0 self-center m-auto top-[70px] z-[1000] md:min-w-[768px] w-full md:w-fit max-w-[80%] min-h-6 max-h-fit py-2 px-2 gap-2 flex items-center cursor-pointer border-l-8 rounded-md ${bgColor}`}
    onClick={closeToast}
  >
    {icon}

    <p className={`flex-grow text-center ${textColor}`}>{message}</p>

    <XMarkIcon className={`w-5 h-5 ${textColor}`} />
  </div>
);
