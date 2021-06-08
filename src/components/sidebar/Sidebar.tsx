import { Avatar } from '@material-ui/core';
import React from 'react'
import { sidebarList } from '../../constants/SidebarList'
import './Sidebar.css';

export const Sidebar = () => {
    return (
      <div id="sidebar">
        <div className="sidebar-header">
          <Avatar src='../../images/image_placeholder.jpg' />
          <p>Garima</p>
          <button>Student</button>
        </div>
        <ul>
          {sidebarList?.map((item: any) => {
            return (
              <li key={item?.id} className="sidebar-list">
                {item?.icon}
                <span>{item?.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
}


