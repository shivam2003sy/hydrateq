import React from "react";
import { Onbording } from "./screens/Onbording";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Projects from "./components/Projects";
import { Home } from "./screens/Home";
import ProjectScreen from "./screens/ProjectScreen";
import NotFound from "./screens/NotFound";
import Prafull from "./screens/Prafull";
import Sushant from "./screens/Sushant";
import Help from "./screens/Help";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Sushant/>}/>
        <Route exact path="/dashboard" element={ <Sushant />}/>
        <Route exact path="/project" element={ <Prafull />}/>

        <Route exact path="/help" element={ <Help />}/>
        <Route  path="/project/:id" element={ <ProjectScreen/>} />
        {/* <Route path="/analysis/:id" element={<Analysis/>}/> */}
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
export default App
