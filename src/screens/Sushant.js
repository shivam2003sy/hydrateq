import React,{ useEffect,useState} from "react";
import "./prafull.css";
import drop from "../images/2323.png";
import axios from "axios";
import Projects from '../components/Projects'
import Sidebars from "../components/Sidebars";
import { Typography, Stack, Card, Button, CardActionArea } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import DialogTitle from '@mui/material/DialogTitle';
import "../screens/prafull.css";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
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
      <div className="main-container">
      <div className="center-div">
        
        <img src={drop} alt="" className="center" />
        <br />
        <br />
        <br />
        {/* New Project Button */}
        

        {/* project Onbording */}
        <div className="project-section">
        <Projects className="project-list" project={pro} handleAddProject={handleAddProject} style={{ backgroundColor: "white" }}/>    
        </div>
      
      </div>
      </div>

     
    </div>
  );
};

export default Sushant;
