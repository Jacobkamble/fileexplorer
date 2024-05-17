
import { useState } from 'react'
import './App.css'
// import from './components/FolderItem';
import explorer from './data/folderData';
import FolderItem from './components/FolderItem';


function App() {
 
  const [folderData,setFolderData]=useState(explorer)

  return (
    <>
   <FolderItem data={folderData}/>
    </>
  )
}

export default App
