import React, { useState } from "react";
import explorer from "../data/folderData";
import FileItem from "./FileItem";

const FolderItem = ({ data }) => {

  const[toggle,setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <>
      <div onClick={handleToggle} className="folder-item">📁 {data.name}</div>

{toggle &&(  <div className="folder-conetnt">
        {data.items.map((itm) =>
          itm.isFolder ? (
            <FolderItem key={itm.id} data={itm} />
          ) : (
            <FileItem key={itm.id} name={itm.name} />
          )
        )}
      </div>)}

    
    </>
  );
};

export default FolderItem;
