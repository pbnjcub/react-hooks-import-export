import React from "react";
import * as RMFunctions from "./parks/RockyMountain"

console.log(RMFunctions.trees);

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;