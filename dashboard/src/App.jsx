import { useState } from "react";
import Router from "./router/router";
const App = () => {
 const [allRoutes, setAllRoutes] = useState([]);
 return <Router allRoutes={allRoutes} />
}
   
export default App;

