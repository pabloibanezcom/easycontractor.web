import { Layout, Menu } from 'antd';
import _ from 'lodash';
import React from 'react';
// import store from 'store'
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import LogoInverseMobile from '../../../../assets/img/logo-inverse-mobile.png';
import LogoInverse from '../../../../assets/img/logo-inverse.png';
import getPages from '../../../../pages';

const { Sider } = Layout
const { SubMenu, Divider } = Menu

const mapStateToProps = (state) => ({
  settings: state.settings.settings,
  company: state.company.company,
  isMobileView: false,
  isSettingsOpen: false,
  isLightTheme: false,
  isMobileMenuOpen: false,
})

class MenuLeft extends React.Component {
  state = {
    isMenuCollapsed: false,
    selectedKeys: [],
    openedKeys: [],
    menuData: getPages().filter(e => e.divider || e.showInMenu)
  }

  componentWillMount() {
    this.setSelectedKeys(this.props)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isMenuCollapsed && !newProps.isMobileView) {
      this.setState({
        openedKeys: [],
      })
    }
    this.setSelectedKeys(newProps)
  }

  setSelectedKeys = () => {
    const { location } = this.props;
    const { menuData } = this.state;
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    const urlElements = location.pathname.split('/');
    const selectedItem = _.find(flattenItems(menuData, 'children'), [
      'url',
      `/${urlElements[urlElements.length - 1]}`,
    ])
    this.setState({
      selectedKeys: selectedItem ? [selectedItem.key] : [],
    })
  }

  onCollapse = (value, type) => {
    const { isMenuCollapsed } = this.props
    if (type === 'responsive' && isMenuCollapsed) {
      return
    }

    this.setState({
      isMenuCollapsed: value,
      openedKeys: []
    })
  }

  onOpenChange = openedKeys => {
    this.setState({
      openedKeys,
    })
  }

  handleClick = e => {
    // custom action on settings menu item
    if (e.key === 'settings') {
      return
    }
    this.setState({
      selectedKeys: [e.key]
    })
  }

  generateMenuItems = () => {
    const { company } = this.props;
    const { menuData = [] } = this.state;
    const generateItem = item => {
      const { key, title, url, icon, disabled } = item
      if (item.divider) {
        return <Divider key={Math.random()} />
      }
      if (item.url) {
        return (
          <Menu.Item key={key} disabled={disabled}>
            {item.target ? (
              <a href={`/company/${company && company.url}${url}`} target={item.target} rel="noopener noreferrer">
                {icon && <span className={`${icon} icon`} />}
                <span className="title">{title}</span>
              </a>
            ) :
              (
                <Link to={`/company/${company && company.url}${url}`}>
                  {icon && <span className={`${icon} icon`} />}
                  <span className="title">{title}</span>
                </Link>
              )}
          </Menu.Item>
        )
      }
      return (
        <Menu.Item key={key} disabled={disabled}>
          <span className="title">{title}</span>
          {icon && <span className={`${icon} icon`} />}
        </Menu.Item>
      )
    }

    const generateSubmenu = items =>
      items.map(menuItem => {
        if (menuItem.children) {
          const subMenuTitle = (
            <span key={menuItem.key}>
              <span className="title">{menuItem.title}</span>
              {menuItem.icon && <span className={`${menuItem.icon} icon`} />}
            </span>
          )
          return (
            <SubMenu title={subMenuTitle} key={menuItem.key}>
              {generateSubmenu(menuItem.children)}
            </SubMenu>
          )
        }
        return generateItem(menuItem)
      })

    return menuData.map(menuItem => {
      if (menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <span className="title">{menuItem.title}</span>
            {menuItem.icon && <span className={`${menuItem.icon} icon`} />}
          </span>
        )
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {generateSubmenu(menuItem.children)}
          </SubMenu>
        )
      }
      return generateItem(menuItem)
    })
  }

  render() {
    const { selectedKeys, openedKeys, isMenuCollapsed } = this.state
    const { isMobileView, isLightTheme, settings } = this.props
    const menuSettings = isMobileView
      ? {
        width: 256,
        collapsible: false,
        collapsed: false,
        onCollapse: this.onCollapse,
      }
      : {
        width: 256,
        collapsible: true,
        collapsed: isMenuCollapsed,
        onCollapse: this.onCollapse,
        breakpoint: 'lg',
      }

    const menu = this.generateMenuItems()

    return (
      <Sider
        {...menuSettings}
        className="menu-left"
      >
        <div className="logo">
          <div className="logoContainer">
            <img
              src={menuSettings.collapsed ? LogoInverseMobile : LogoInverse}
              alt=""
            />
          </div>
        </div>
        <Scrollbars
          className={isMobileView ? 'scrollbarMobile' : 'scrollbarDesktop'}
          autoHide
        >
          {settings && (
            <Menu
              theme={isLightTheme ? 'light' : 'dark'}
              onClick={this.handleClick}
              selectedKeys={selectedKeys}
              openKeys={openedKeys}
              onOpenChange={this.onOpenChange}
              mode="inline"
              className="navigation"
            >
              {menu}
            </Menu>
          )}
        </Scrollbars>
      </Sider>
    )
  }
}

export default connect(mapStateToProps, null)(withRouter(MenuLeft));
