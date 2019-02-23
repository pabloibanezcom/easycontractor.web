import * as authActions from 'actions/auth';
import * as companyActions from 'actions/company';
import * as settingsActions from 'actions/settings';
import { BackTop, Layout } from 'antd';
import classNames from 'classnames';
import Breadcrumbs from 'components/LayoutComponents/Breadcrumbs/Breadcrumbs';
import Menu from 'components/LayoutComponents/Menu/Menu';
import TopBar from 'components/LayoutComponents/TopBar/TopBar';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthService from 'services/auth.service';

@connect(mapStateToProps)
class MainLayout extends React.PureComponent {

  componentWillMount() {
    const { user, getUser, getSettings } = this.props;
    getSettings();
    if (!user) {
      const accessToken = AuthService.getToken();
      if (accessToken && accessToken.access_token) {
        getUser(accessToken.access_token);
      }
    }
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (user) {
      this.loadCompany();
    }
  }

  loadCompany() {
    const { location, user, setCompany } = this.props;
    const elements = location.pathname.split('/').filter(e => e !== '');
    const userCompanies = [].concat(user.person.companiesAsDirector).concat(user.person.companiesAsShareholder).concat(user.person.companiesAsAccountant);
    let company
    if (elements[0] === 'company') {
      company = userCompanies.find(c => c.url === elements[1]);
    } else {
      company = userCompanies[0];
    }
    if (company) {
      setCompany(company);
    }
    return true;
  }


  render() {
    const {
      children,
      isBorderless,
      isSquaredBorders,
      isFixedWidth,
      isMenuShadow,
      isMenuTop,
      user
    } = this.props;
    return (
      <Layout
        className={classNames({
          settings__borderLess: isBorderless,
          settings__squaredBorders: isSquaredBorders,
          settings__fixedWidth: isFixedWidth,
          settings__menuShadow: isMenuShadow,
          settings__menuTop: isMenuTop,
        })}
      >
        <BackTop />
        <Menu />
        {/* <Settings /> */}
        {user && (
          <Layout>
            <Layout.Header>
              <TopBar />
            </Layout.Header>
            <Layout.Content style={{ height: '100%', position: 'relative' }}>
              {user && <Breadcrumbs />}
              <div className="utils__content">{children}</div>
            </Layout.Content>
            <Layout.Footer>
              {/* <Footer /> */}
            </Layout.Footer>
          </Layout>
        )}

      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    isBorderless: true,
    isSquaredBorders: false,
    isFixedWidth: false,
    isMenuShadow: false,
    isMenuTop: false,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSettings: () => dispatch(settingsActions.getSettingsStart()),
    getUser: (accessToken) => dispatch(authActions.getUserStart(accessToken)),
    setCompany: (company) => dispatch(companyActions.setCompany(company))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainLayout))
