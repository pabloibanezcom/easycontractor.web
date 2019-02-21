import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getRoleStrFromPerson } from '../../../../util/person';

class ProfileMenu extends React.Component {
  render() {
    const { user } = this.props;
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <Link to="/profile">
            <strong>
              {user.name || 'Anonymous'}
            </strong>
            <div>
              <strong>
                <FormattedMessage id="topBar.profileMenu.role" />:{' '}
              </strong>
              {getRoleStrFromPerson(user.person)}
            </div>
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <div>
            <strong>
              <FormattedMessage id="topBar.profileMenu.email" />:{' '}
            </strong>
            {user.email}
            <br />
            <strong>
              <FormattedMessage id="topBar.profileMenu.phone" />:{' '}
            </strong>
            {user.person.phone || '-'}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="javascript: void(0);">
            <i className="menuIcon icmn-user" />
            <FormattedMessage id="topBar.profileMenu.editProfile" />
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/login">
            <i className="menuIcon icmn-exit" />
            <FormattedMessage id="topBar.profileMenu.logout" />
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']} onVisibleChange={this.addCount}>
        <div className="dropdown">
          <Avatar className="avatar" shape="square" size="large" icon="user" src={user.picture} />
        </div>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(ProfileMenu);