import { useEffect, useState } from "react";
import Router from "./router/router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
const App = () => {
 const [allRoutes, setAllRoutes] = useState([...publicRoutes])
//  console.log(allRoutes);

    useEffect(()=> {
        const routes = getRoutes()
        // console.log(routes)
        setAllRoutes([...allRoutes,routes])
    },[])


 return <Router allRoutes={allRoutes} />
}
   
export default App;

