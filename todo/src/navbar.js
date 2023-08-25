import React from 'react'
import './navbar.css'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
function NAV() {
  return (
    <div>
        <nav id='nav' class="navbar navbar-dark bg-primary">
            <h1>ToDo list
            <span id='img' ><PlaylistAddIcon /></span>
            </h1>
        </nav>
    </div>
  )
}

export default NAV