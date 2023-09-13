import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";
const Modal = ({ isOpen, isClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 min-h-[220px] max-w-[75%] p-4 bg-white min-[768px]:mt-[-40%] mt-[-90%] m-auto rounded-lg">
            <div className="flex justify-end">
              <GrClose
                onClick={isClose}
                className="text-black font-semibold self-end text-2xl hover:text-red-700 cursor-pointer"
              />
            </div>
            <div className="p-4">{children}</div>
          </div>
          <div
            onClick={isClose}
            className="backdrop-blur absolute top-0 h-screen w-screen z-40"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};
export default Modal;
