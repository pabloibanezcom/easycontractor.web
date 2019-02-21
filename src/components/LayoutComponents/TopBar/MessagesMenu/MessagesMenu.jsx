import { Avatar, Badge, Dropdown, Menu } from 'antd';
import React from 'react';

class MessagesMenu extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false} className="activity messages-menu-dropdown-menu">
        <Menu.Item className="item">
          <i className="icon icmn-star-full" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">now</span>
              <a href="javascript: void(0);">
                Update Status: <span className="badge badge-danger">New</span>
              </a>
            </div>
            <div className="descr">
              Failed to get available update data. To ensure the proper functioning of your
              application, update now.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item className="item">
          <i className="icon icmn-stack" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">24 min ago</span>
              <a href="javascript: void(0);">
                Income: <span className="badge badge-default">$299.00</span>
              </a>
            </div>
            <div className="descr">
              Failed to get available update data. To ensure the proper functioning of your
              application, update now.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item className="item">
          <i className="icon icmn-list" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">30 min ago</span>
              <a href="javascript: void(0);">Inbox Message</a>
            </div>
            <div className="descr">
              From: <a href="javascript: void(0);">David Bowie</a>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item className="item">
          <i className="icon icmn-home" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">now</span>
              <a href="javascript: void(0);">
                Update Status: <span className="badge badge-primary">New</span>
              </a>
            </div>
            <div className="descr">
              Failed to get available update data. To ensure the proper functioning of your
              application, update now.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item className="item">
          <i className="icon icmn-loop" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">24 min ago</span>
              <a href="javascript: void(0);">
                Income: <span className="badge badge-warning">$299.00</span>
              </a>
            </div>
            <div className="descr">
              Failed to get available update data. To ensure the proper functioning of your
              application, update now.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item className="item">
          <i className="icon icmn-cog utils__spin-delayed--pseudo-selector" />
          <div className="inner">
            <div className="title">
              <span className="pull-right">30 min ago</span>
              <a href="javascript: void(0);">Inbox Message</a>
            </div>
            <div className="descr">
              From: <a href="javascript: void(0);">David Bowie</a>
            </div>
          </div>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown className="messages-menu" overlay={menu} trigger={['click']}>
        <div className="dropdown">
          <Badge count={2}><Avatar icon="mail" /></Badge>

          {/* <Badge dot><i className="fa fa-envelope topbar__dropdownIcon" /></Badge> */}
        </div>
      </Dropdown>
    )
  }
}

export default MessagesMenu
