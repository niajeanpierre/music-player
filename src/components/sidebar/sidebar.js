import React from 'react'
import './sidebar.css'
import image from './profile.jpeg'
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt='profile' />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<IoShareSocialSharp />} />
        <SidebarButton title="Trending" to="/trending" icon={<IoMdTrendingUp />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlayCircle />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<MdLibraryMusic />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar
