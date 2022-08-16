import React, { useEffect } from "react";
import { Typography, Stack, Card, Button, CardActionArea } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import "../screens/prafull.css";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
// const [open, setOpen] = React.useState(false);
const Projects = (props) => {
  const [newProject, setNewProject] = React.useState(null);
  useEffect(() => {
    setNewProject(props.project);
  }, [props.project]);
  console.log(newProject);

  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");
  let navigate = useNavigate();
  const handleRoute = (id) => {
    console.log("route", id);
    navigate(`/project/${id}`); //clicked
  };
  const handleOnclick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("clicked create");
    setOpen(false);
    console.log(name, desc);
    axios
      .post(`https://sih-hydrateq.herokuapp.com/`, { name: name, desc: desc })
      .then((res) => {
        console.log(res.data);
        console.log("callback"); //clicked
        const newP = [...newProject];
        newP.push([res.data.id, name, desc]);
        setNewProject(newP);
        console.log(newProject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
   
    <>
     <Stack style={{ backgroundColor: "#BEE3F9" }}>
      
      <div
        className="bttn stack-new-pro"
        style={{ backgroundColor: "#BEE3F9" }}
      >

        {/* New Project Button  */}
        <button onClick={handleOnclick}  className="stack-new-pro new-pro">New Project</button>
       
       {/* Previous Project section */}
      </div>
      
    </Stack>
    <div  style={{ backgroundColor: "rgba(128, 128, 128, 0.219)" }}  className="last">
    <div className="heading">
        <h3 id="heading">Previous Projects</h3>
      </div>
      {/* <br/> <br/> */}

      <div >
        <Stack
          direction="row"
          // className="prev-pro"
         
        >
          {/* {
            props.proj.map((project,index)=>(
              <button onClick={()=>handleRoute(project[0])} key={index}>
                  {project[1]}
              </button>
            ))
          } */}
          {props.project.map((project, index) => (
            <Stack my={1} mx={2} py={1} key={index} direction="row">
              <Card
                sx={{ minWidth: 200, minHeight: 40 }}
                style={{ backgroundColor: "#4681F4" }}
              >
                <CardActionArea onClick={() => handleRoute(project[0])}>
                  <Stack pt={1} alignItems="center">
                    <Typography variant="subtitle1">{project[1]}</Typography>
                  </Stack>
                </CardActionArea>
              </Card>
            </Stack>
          ))}
        </Stack>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={name}
            label="Project Name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Project Description"
            value={desc}
            id="place"
            fullWidth
            variant="standard"
            onChange={(e) => setDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>

    </div>
    </>
  );
};

export default Projects;
