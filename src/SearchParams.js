import React, { useState } from "react";

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            id="location"
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};
