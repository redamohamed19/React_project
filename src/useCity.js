import { useState, useEffect } from "react";

const localCache = {};

export default function useCity(animal) {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);

      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}`
      );
      const json = await res.json();
      var s = [];
      json.pets.map(x => {
        s.push(x.city);
      });
      console.log(s);

      setBreedList(s);
    }
  }, [animal]);

  return [breedList];
}
