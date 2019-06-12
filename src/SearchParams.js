import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./useDropdown";

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Animal", "", ANIMALS);

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
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};
