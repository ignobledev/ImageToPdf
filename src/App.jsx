import React from "react";
import Navbar from "./components/Navbar"
import Tools from "./components/Tools"
import Toolkit from "./components/Toolkit"

function app(){
  return (
 <div>
   <Navbar /><main>
 <h1>Worrid about your pdf document converting.</h1>
    <h2>we are here</h2>
    </main>
      <div>
        <Toolkit/>
      </div>
      <Tools/>

 </div>
  );
}
export default app;
