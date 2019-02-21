import DrawerMenu from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import React from 'react';
import { connect } from 'react-redux';
import MenuLeft from './MenuLeft/MenuLeft';

const mapStateToProps = () => ({
  isMobileMenuOpen: false,
  isMobileView: false,
  isLightTheme: false
})

class AppMenu extends React.Component {
  toggleOpen = () => {
    const { dispatch, isMobileMenuOpen } = this.props
    document
      .querySelector('#root')
      .setAttribute(
        'style',
        !isMobileMenuOpen ? 'overflow: hidden; width: 100%; height: 100%;' : '',
      )
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMobileMenuOpen',
        value: !isMobileMenuOpen,
      },
    })
  }

  render() {
    const { isMobileMenuOpen, isMobileView, isLightTheme } = this.props
    const BootstrappedMenu = () => {
      if (isMobileView) {
        return (
          <DrawerMenu
            getContainer={null}
            level="all"
            open={isMobileMenuOpen}
            onMaskClick={this.toggleOpen}
            onHandleClick={this.toggleOpen}
            className={isLightTheme ? 'drawer-light' : ''}
          >
            <MenuLeft />
          </DrawerMenu>
        )
      }
      return <MenuLeft />
    }

    return BootstrappedMenu()
  }
}

export default connect(mapStateToProps, null)(AppMenu);
