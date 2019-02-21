import * as actions from 'actions/auth';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";

class ExternalLogin extends React.Component {
  componentDidMount() {
    const { externalLoginCallback, location } = this.props;
    externalLoginCallback(location.hash);
  }

  render() {
    const { authTokens } = this.props;
    return (
      <div>
        {authTokens && authTokens.access_token && <Redirect to='/profile' />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authTokens: state.auth.authTokens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    externalLoginCallback: (hash) => dispatch(actions.externalLoginCallbackStart(hash)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExternalLogin));