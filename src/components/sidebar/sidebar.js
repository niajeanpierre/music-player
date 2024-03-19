import React from 'react'
import './sidebar.css'
import image from './profile.jpeg'
import SidebarButton from './sidebarButton'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt='profile' />
      <div>
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
      </div>
      <SidebarButton />
    </div>
  )
}

export default Sidebar
