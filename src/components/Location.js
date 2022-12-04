import React from "react";
import { useState } from "react";
import CardsBy from "./CardsBy";

const Location = () => {
  const [showingMoreData, setShowingMoreData] = useState(false);

  return (
    <div>
      {showingMoreData ? (
        <CardsBy changeState={{ setShowingMoreData, showingMoreData }} />
      ) : (
        <div>
          <h1>List of Locations</h1>
          <button
            onClick={() => setShowingMoreData(!showingMoreData)}
            className="toggle-more-info-button"
          >
            SHOW LOCATIONS
          </button>
        </div>
      )}
    </div>
  );
};

export default Location;
