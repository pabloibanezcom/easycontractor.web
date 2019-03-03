import * as clientActions from 'actions/clients';
import * as companyActions from 'actions/company';
import { Calendar, Card } from 'antd';
import LoggedWork from 'components/Calendar/LoggedWork/LoggedWork';
import WorkedTime from 'components/Calendar/WorkedTime/WorkedTime';
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
    this.handlePanelChanged = this.handlePanelChanged.bind(this);
  }

  componentDidMount() {
    const { getAllClients, getCalendar } = this.props;
    getCalendar(moment().year(), moment().month() + 1);
    getAllClients();
  }

  getLoggedWork = (date) => {
    const { calendar } = this.props;
    if (date.month() + 1 !== calendar.month) {
      return null;
    }
    if (calendar.days[date.date()].loggedWork.length) {
      return (
        <ul className="events loggedWorks">
          {calendar.days[date.date()].loggedWork.map((lg, i) => {
            return <LoggedWork key={i} loggedWork={lg} />
          })}
        </ul>
      )
    };
    return null;
  }

  dateCellRender = (value) => {
    return (
      <div>
        {this.getLoggedWork(value)}
      </div>
    );
  }

  handleCloseDate() {
    this.setState({ selectedDate: null });
  }

  handleDateSelected(date) {
    this.setState({ selectedDate: moment(date).startOf('day') });
  }

  handlePanelChanged(date) {
    const { getCalendar } = this.props;
    getCalendar(date.year(), date.month() + 1);
  }

  render() {
    const { selectedDate } = this.state;
    console.log(selectedDate);
    const { calendar, clients, addWorkingDays } = this.props;
    return (
      <div className="calendar">
        <div className="row">
          <div className={`col-lg-${selectedDate ? '9' : '12'}`}>
            <Card>
              {calendar && <Calendar
                dateCellRender={this.dateCellRender}
                onSelect={this.handleDateSelected}
                onPanelChange={this.handlePanelChanged}
              />}
            </Card>
          </div>
          {selectedDate && (
            <div className="col-lg-3">
              <Card
                title={moment(selectedDate).format('Do MMMM YYYY')}
                extra={<a href="javascript:void(0)" onClick={this.handleCloseDate}><i className="fa fa-remove" /></a>}
              >
                <div>
                  <WorkedTime
                    clients={clients}
                    selectedDate={selectedDate}
                    loggedWork={calendar.days[moment(selectedDate).date()].loggedWork}
                    addWorkingDays={addWorkingDays}
                  />
                </div>
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
    clients: state.clients.clients,
    calendar: state.company.calendar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCalendar: (year, month) => dispatch(companyActions.getCalendarStart(year, month)),
    getAllClients: () => dispatch(clientActions.getAllClientsStart()),
    addWorkingDays: (clientId, workingDays) => dispatch(clientActions.addWorkingDaysStart(clientId, workingDays))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompanyCalendar));