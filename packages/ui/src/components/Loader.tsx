import React from "react";

const Loader = () => {
  return (
    <div className="ui:flex ui:flex-col ui:justify-center ui:items-center ui:min-h-screen ui:bg-pearl-white ui:p-6">
      <svg
        className="ui:size-16 ui:animate-spin ui:text-dark-slate"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="ui:opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="ui:opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default Loader;
