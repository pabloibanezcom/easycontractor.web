import * as actions from 'actions/clients';
import ClientCard from 'components/Custom/ClientCard/ClientCard';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Clients extends React.Component {

  componentDidUpdate() {
    const { company, clients, searchClients } = this.props;
    if (company && !clients) {
      searchClients({ companyId: company._id });
    }
  }

  render() {
    const { clients } = this.props;
    return (
      <div className="clients">
        <div className="row">
          {clients && clients.map(client => <div className="col-lg-4"><ClientCard client={client} /></div>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.company.company,
    clients: state.clients.clients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchClients: (searchObj) => dispatch(actions.searchClientsStart(searchObj))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Clients));