import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";


function ColoradoStateParks() {
  // howManyParks();
  // console.log(RMFunctions.trees);
  // RMFunctions.wildlife();
  // RMFunctions.elevation();
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />;
    </div>
  );
}

export default ColoradoStateParks;