import * as actions from 'actions/clients';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class ClientProfile extends React.Component {

  render() {
    return (
      <div className="clients">
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Client profile</strong>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.company.company,
    currentClient: state.clients.currentClient
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchClients: (searchObj) => dispatch(actions.searchClientsStart(searchObj))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientProfile));