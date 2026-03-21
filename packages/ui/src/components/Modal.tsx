import { useEffect } from "react";

type ModalProps = {
  isOpen?: boolean;
  hide: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen = false, hide, children }: ModalProps) => {
  useEffect(() => {
    isOpen ? (document.body.style.overflow = "hidden") : null;

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="ui:bg-black/40 ui:fixed ui:inset-0 ui:flex ui:justify-center ui:items-center ui:z-50 ui:px-6">
      <div className="ui:bg-off-white ui:w-full ui:max-w-2xl ui:rounded-md ui:relative ui:p-4 ui:overflow-y-scroll ui:overflow-x-hidden ui:max-h-[85vh]">
        <div
          onClick={() => hide()}
          className="ui:absolute ui:top-2 ui:right-2 ui:flex ui:items-center ui:cursor-pointer ui:px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 ui:font-semibold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
