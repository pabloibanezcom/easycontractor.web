import { Calendar, Card } from 'antd';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class CompanyCalendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null
    };

    this.handleCloseDate = this.handleCloseDate.bind(this);
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  handleCloseDate() {
    this.setState({ selectedDate: null });
  }

  handleDateSelected(date) {
    this.setState({ selectedDate: moment(date).toISOString() });
  }

  render() {
    const { selectedDate } = this.state;
    return (
      <div className="calendar">
        <div className="row">
          <div className={`col-lg-${selectedDate ? '9' : '12'}`}>
            <Card>
              <Calendar
                onSelect={this.handleDateSelected}
              />
            </Card>
          </div>
          {selectedDate && (
            <div className="col-lg-3">
              <Card
                title={moment(selectedDate).format('Do MMMM YYYY')}
                extra={<a href="javascript:void(0)" onClick={this.handleCloseDate}><i className="fa fa-remove" /></a>}
              ><span>The plan for today</span>
              </Card>
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompanyCalendar));