
import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });
  const getClassName = (className, isActive) => {
    if (!isActive) return className;
    return `${className} ${className}-active`;
  };
  
  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
      <div className={getClassName("dropzone", isDragActive)} {...getRootProps()}/>
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
              
              Drop here ! 
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;