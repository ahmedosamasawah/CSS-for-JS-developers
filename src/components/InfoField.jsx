const InfoField = ({ type, children }) => {
  const getIconPath = () => {
    switch (type) {
      case "warn":
        return "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z";
      case "note":
        return "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z";
    }
  };

  return (
    <aside className={`info-field ${type}`}>
      <div className="info-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {type === "warn" ? (
            <>
              <path d={getIconPath()}></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r={type === "note" ? "10" : "0"}></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </>
          )}
        </svg>
      </div>
      <div>{children}</div>
    </aside>
  );
};

export default InfoField;
