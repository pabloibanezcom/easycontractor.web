import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Invoices extends React.Component {

  render() {
    return (
      <div>
        <h3>Invoices</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Invoices));