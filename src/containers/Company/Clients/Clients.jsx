import * as actions from 'actions/clients';
import { Button, Icon } from 'antd';
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
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Your clients (3)</strong>
          <Button type="primary" className="right ml-3"><Icon type="usergroup-add" />Add client</Button>
          <div className="clearfix" />
        </div>
        <div className="row">
          {clients && clients.map(client => <div key={client._id} className="col-lg-4 col-md-6 animated fadeIn"><ClientCard client={client} /></div>)}
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