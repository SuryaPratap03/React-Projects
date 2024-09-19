import React from 'react'
import { files } from '../../data/datafortreeview'
import Folder from './Folder'

const TreeView = () => {
  return (
    <div>
        <h1 className='text-5xl'>Tree View In REACT JS</h1>
        <Folder files={files}></Folder>
    </div>
  )
}

export default TreeView