import React, { useState } from "react";
const NameCard = () => {
  const [ishover, setishover] = useState(false);
  return (
    <div
      className="mt-3"
      onMouseEnter={() => setishover(true)}
      onMouseOut={() => setishover(false)}
    >
      I{"'"}m <span className="font-semibold">Anandha Dinesh</span>
      {"  "}
      {ishover && (
        <span className="text-sm align-text-bottom">
          But You can call me Anand😉
        </span>
      )}
    </div>
  );
};

export default NameCard;
