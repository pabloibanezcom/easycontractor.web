import { Dropdown, Menu } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../../store/actions/company';

class CompaniesManagement extends React.Component {

  getMenuOptionsForRole = (role, prop) => {
    const { user, setCompany } = this.props;
    if (user.person[prop].length) {
      return (
        <Menu.ItemGroup title={role}>
          {user.person[prop].map(company => <Menu.Item key={company._id}><Link to={`/company/${company.url}`} onClick={() => setCompany(company)}>{company.name}</Link></Menu.Item>)}
        </Menu.ItemGroup>
      )
    }
    return null;
  }

  render() {
    const menu = (
      <Menu selectable={false}>
        {this.getMenuOptionsForRole('Director', 'companiesAsDirector')}
        {this.getMenuOptionsForRole('Shareholder', 'companiesAsShareholder')}
        {this.getMenuOptionsForRole('Accountant', 'companiesAsAccountant')}
        <Menu.Divider />
        <Menu.Item>
          <Link to="/">
            <i className="menuIcon icmn-cog" /> Settings
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown className="companies-management" overlay={menu} trigger={['click']} placement="bottomLeft">
        <div className="dropdown">
          <i className="icon icmn-database" />
          <span className="d-none d-xl-inline">
            <strong>
              <FormattedMessage id="topBar.companiesManagement" />
            </strong>
          </span>
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

const mapDispatchToProps = dispatch => {
  return {
    setCompany: (company) => dispatch(actions.setCompany(company))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesManagement);
