import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <div className="client-card card card--withShadow">
      <div className="icon">
        {/* <i className="lnr lnr-bookmark" /> */}
        <img alt={client.name} src={client.logo} />
      </div>
      <span className="name">{client.name}</span>
      <span className="web">{client.web}</span>
      <span className="period">From August 2017 to December 2018</span>
    </div>
  );
}

export default ClientCard;