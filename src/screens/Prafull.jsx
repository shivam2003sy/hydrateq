import React, { useCallback, useState } from "react";
import "./prafull.css";
import Dropzone from "../components/Dropzone.js";
import cuid from "cuid";
import cloud from "../images/cloud.png"; //
import ImageList from "../components/Imagelist";
import ButtonSelectGraph from "../components/ButtonSelectGraph";
import Gaurav from "../components/Gaurav";
import Sidebars from "../components/Sidebars";
const Prafull = () => {
  const [images, setImages] = useState([]);

  const [selGraphs, setSelGraphs] = useState([]); // This is to store the selected graphs
  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const handleClick = (event) => {
    // 👇️ refers to the div element
    console.log(event.currentTarget);

    console.log("div clicked");
    alert("Clicked");
  };

  const GraphSelection = (name_of_graph) => {
    setSelGraphs((previousState) => {
      console.log("Selected" + name_of_graph);
      return { ...previousState, name_of_graph };
    });
  };

  return (
    <>
      <div className="cont">
        {/* Sidebar */}
        <Sidebars />
        {/* Dropzone */}
        <div className="main-container">
          <div className="dropzone-area  mt-5">
            <div className="dropzone-d">
              <img src={cloud} alt="" style={{width: '60%',marginLeft: '1rem'}} />
              <Dropzone
                onDrop={onDrop}
                accept={"text/csv , application/pdf , image/*"}
                className="drop-area"
              />
              
              
            </div>
           
            <h5 className="heading text-center my-2">Or</h5>
            <div className="cont">
            <label class="label ">
              <input type="file" required className="select-file" />
              <span className="select-file">Select a file</span>
            </label>
            </div>
            
            
          
            <div className="btn-generate">
             
              Generate
            </div>
          </div>
          {/* <div className="dropzone-area  mt-5">
       <div className="dropzone-d"> 
       
        <Dropzone onDrop={onDrop}  accept={"text/csv , application/pdf , image/*"} /></div>

        <div className="btn-generate">Generate</div> */}

          {/* Spread Sheet Input  */}
          <Gaurav />
        </div>

        {/* <ImageList images={images} />   */}
      </div>
    </>
  );
};

export default Prafull;
{
  /* <div className="select-graph">
          <br />
          <br />
          <h5>Select The Graph to be Selected</h5>
       
        <ButtonSelectGraph name_of_graph={"PiperDiagram"} />
          
          <ButtonSelectGraph name_of_graph={"Durov Diagram"} onClick = {()=>GraphSelection}/>
          <br />
          <ButtonSelectGraph name_of_graph={"Huffman Diagram"} onClick = {()=>GraphSelection}/>
          <ButtonSelectGraph name_of_graph={"Dijkstra Diagram"} onClick = {()=>GraphSelection}/>
          <br />
          <ButtonSelectGraph name_of_graph={"Swalo Diagram"} onClick = {()=>GraphSelection}/>
          <ButtonSelectGraph name_of_graph={"Djader Diagram"} onClick = {()=>GraphSelection}/>
          <br />
          
          <ButtonSelectGraph name_of_graph={"Swalo Diagram"} onClick = {()=>GraphSelection}/>
          <ButtonSelectGraph name_of_graph={"Djader Diagram"} onClick = {()=>GraphSelection}/>
          <br />
      </div> */
}
