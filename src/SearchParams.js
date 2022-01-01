import React from "react";
import { useState, useEffect } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile", "mozarilla"];
  const [citys, setCity] = useState([""]);

  useEffect(() => {
    console.log("fg");
    requestCity();
  }, [animal]);
  async function requestCity() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    const json = await res.json();
    var s = [];
    var tab = json.pets;
    tab.forEach(x => {
      s.push(x.city);
    });

    let uniqueChars = [...new Set(s)];

    setCity(uniqueChars);
  }
  //  const matr= useState("Seattle, WA"); location=matr[0];setlocation=matr[1];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={e => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="city">
          city
          <select id="city">
            <option />
            {citys.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
