import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../util/string';

class Breadcrumbs extends React.Component {

  renderElements() {
    const { company, location } = this.props;
    const elements = location.pathname.split('/').filter(e => e !== '');
    if (elements[0] === 'company') {
      // Company page
      return (
        <React.Fragment>
          <Link to={`/company/${company && company.url}`} className="text-muted">
            {company && company.name}
          </Link>
          <span>
            <span className="arrow" />
            <strong>{capitalizeFirstLetter(elements[2])}</strong>
          </span>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <span className="text-muted">
          Home
        </span>
        <span>
          <span className="arrow" />
          <strong>{capitalizeFirstLetter(elements[0])}</strong>
        </span>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="breadcrumbs">
        <div className="path">
          {this.renderElements()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.company.company
  };
};

export default connect(mapStateToProps, null)(withRouter(Breadcrumbs));
