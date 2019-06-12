import React from "react";

export const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            id="location"
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};
