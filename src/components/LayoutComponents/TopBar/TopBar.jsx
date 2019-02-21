import React from 'react';
import CompaniesManagement from './CompaniesManagement/CompaniesManagement';
import MessagesMenu from './MessagesMenu/MessagesMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="mr-4">
          <CompaniesManagement />
        </div>
        <div className="mr-auto" />
        <div className="mr-4">
          <MessagesMenu />
        </div>
        <ProfileMenu />
      </div>
    )
  }
}


export default TopBar;