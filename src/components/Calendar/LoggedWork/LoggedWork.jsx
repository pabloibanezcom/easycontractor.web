import React from 'react';

const LoggedWork = ({ loggedWork }) => {
  return (
    <li>
      <div className="left fullwidth client loggedwork">
        <i className="icmn icmn-clock icon mr-10" />
        <span className="loggedwork__client"><img alt={loggedWork.client.name} src={loggedWork.client.logo} style={{ width: '14px' }} /> {loggedWork.client.name}</span>
        <span className="loggedwork__time right">{loggedWork.time} day</span>
        <div className="clearfix" />
      </div>
    </li>
  );
}

export default LoggedWork;