import { Calendar } from 'antd';
import Avatar from 'components/CleanUIComponents/Avatar';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { getRoleStrFromPerson } from 'util/person';

class Profile extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div className="profile">
        <div className="row">
          <div className="col-xl-4">
            <div
              className="card header background-img"
              style={{ backgroundImage: `url(${user.person.backgroundPicture})` }}
            >
              <div>
                <div className="card-body text-center">
                  <Avatar src={user.picture} size="110" border="true" borderColor="white" />
                  <br />
                  <br />
                  <p className="text-white mt-2">Last activity: 13 May 2016 7:26PM</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Information</strong>
                </h5>
                <dl className="row">
                  <dt className="col-xl-5">Email:</dt>
                  <dd className="col-xl-7">{user.person.email}</dd>
                  <dt className="col-xl-5">Date of Birth:</dt>
                  <dd className="col-xl-7">{user.person.dateOfBirth}</dd>
                  <dt className="col-xl-5">Nationality:</dt>
                  <dd className="col-xl-7">{user.person.nationality}</dd>
                  <dt className="col-xl-5">Country of residence:</dt>
                  <dd className="col-xl-7">{user.person.countryResidence}</dd>
                  <dt className="col-xl-5">Address:</dt>
                  <dd className="col-xl-7">{user.person.address}</dd>
                </dl>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Calendar</strong>
                </h5>
                <Calendar fullscreen={false} />
              </div>
            </div>

          </div>
          <div className="col-xl-8">
            <div className="card card-body mb-4 socialInfo">
              <div>
                <h2>
                  <span className="text-black mr-2">
                    <strong>Pablo Ibanez</strong>
                  </span>
                </h2>
                <p className="mb-1">{getRoleStrFromPerson(user.person)}</p>
                <p><span className="text-muted">{user.email}</span></p>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));