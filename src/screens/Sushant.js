import React,{ useEffect,useState} from "react";
import "./prafull.css";
import drop from "../images/1.png";
import axios from "axios";
import Projects from '../components/Projects'
import Sidebars from "../components/Sidebars";
const Sushant = () => {
    const [pro,setPro] = React.useState([]);
    
    const handleAddProject = (name,desc) => {
        console.log("callback")  //clicked
        const newProject = [...pro];        
        newProject.push([" ",name,desc]);       
        setPro(newProject);
    }   //clicked
    useEffect(() => {
      axios.get("http://sih-hydrateq.herokuapp.com/")
        .then(response =>{ setPro(response.data.projects)
        console.log(response.data.projects)});
    }, []);
  return (
      
    <div className="cont">
      {/* Side Bar */}
      <Sidebars/>

      {/* Centre Image/Logo  */}

      <div className="center-div">
        <img src={drop} alt="" className="center" />
        <br />
        <br />
        <br />
        {/* New Project Button */}
      

        {/* project Onbording */}
        <Projects className="project-list" project={pro} handleAddProject={handleAddProject}/>
      </div>
    </div>
  );
};

export default Sushant;