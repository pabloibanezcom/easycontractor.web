import { AutoComplete, Button, Slider } from 'antd';
import React from 'react';

class WorkedTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: props.clients,
      loggedClients: [
      ],
      currentLoggedClient: null
    }

    this.buildLoggesWork = this.buildLoggesWork.bind(this);
    this.addClientLog = this.addClientLog.bind(this);
    this.handleClientSelected = this.handleClientSelected.bind(this);
    this.handleTimeSelected = this.handleTimeSelected.bind(this);
  }

  componentDidMount() {
    this.buildLoggesWork();
  }

  buildLoggesWork() {
    const { loggedWork, selectedDate } = this.props;
    const { clients } = this.state;
    let newClients = [...clients];
    const loggedClients = loggedWork.map(lW => ({ client: lW.client, time: lW.time, date: selectedDate }));
    loggedClients.forEach(lW => {
      newClients = newClients.filter(c => c._id !== lW.client._id);
    });
    this.setState({ loggedClients, clients: newClients });
  }

  addClientLog() {
    const { selectedDate } = this.props;
    this.setState((prevState) => (
      {
        loggedClients: [...prevState.loggedClients, { date: selectedDate, time: 0 }],
        currentLoggedClient: prevState.loggedClients.length
      }
    ))
  }

  handleClientSelected(val) {
    const { clients, loggedClients, currentLoggedClient } = this.state;
    const newLoggedClients = [...loggedClients];
    newLoggedClients[currentLoggedClient].client = clients.find(c => c._id === val);
    const newClients = [...clients].filter(c => c._id !== val);
    this.setState({ loggedClients: newLoggedClients, clients: newClients });
  }

  handleTimeSelected(val, i) {
    const { addWorkingDays } = this.props;
    const { loggedClients } = this.state;
    const newLoggedClients = [...loggedClients];
    newLoggedClients[i].time = val;
    this.setState({ loggedClients: newLoggedClients });
    addWorkingDays(newLoggedClients[i].client._id, [{ date: newLoggedClients[i].date, time: newLoggedClients[i].time }]);
  }


  render() {
    const { clients, loggedClients } = this.state;
    return (
      <div className="worked-time">
        <div className="font-size-16 text-black mb-3"><strong>Worked time</strong></div>
        {loggedClients.map((lClient, i) => (
          <div key={i} className="client-timelog">
            {!lClient.client && <AutoComplete
              className="fullwidth mb-20"
              placeholder="Client..."
              dataSource={clients.map(c => { return { value: c._id, text: c.name } })}
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              onSelect={this.handleClientSelected}
            />}
            {lClient.client && (
              <div className="mb-30">
                <span className="left ml-10 client"><img alt={lClient.client.name} src={lClient.client.logo} />{lClient.client.name}</span>
                <span className="right mr-10 time">{lClient.time} day{lClient.time !== 1 ? 's' : ''}</span>
                <div className="clearfix" />
              </div>
            )
            }
            <Slider
              tipFormatter={(value) => { return `${value} day${value !== 1 ? 's' : ''}`; }}
              max={1}
              min={0}
              step={0.5}
              defaultValue={lClient.time}
              disabled={!lClient.client}
              onAfterChange={(val) => this.handleTimeSelected(val, i)}
            />
          </div>
        ))}
        {clients.length ? (
          <div className="add-client-log">
            <Button shape="circle" size="small" icon="plus" disabled={loggedClients.find(lClient => !lClient.client)} onClick={this.addClientLog} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default WorkedTime;