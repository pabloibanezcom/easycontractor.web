import { AutoComplete, Button, DatePicker, Form, Input, InputNumber } from 'antd';
import CalendarRange from 'components/Custom/CalendarRange/CalendarRange';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class InvoiceForm extends React.Component {

  render() {
    const {
      form
    } = this.props;
    const dataSource = [];
    return (
      <div className="clients">
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Add invoice</strong>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="card form-card">
              <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                <Form.Item label="Client">
                  {form.getFieldDecorator('client', {
                    rules: [{ required: true, message: 'Please input a client' }],
                  })(<AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                  />)}
                </Form.Item>
                <Form.Item
                  label="Issued Date"
                >
                  {form.getFieldDecorator('issuedDate', {
                    rules: [{ required: true, message: 'Please input a date' }],
                  })(
                    <DatePicker />
                  )}
                </Form.Item>
                <Form.Item label="Net Amount">
                  {form.getFieldDecorator('amountNet', {
                    rules: [{ required: true, message: 'Net amount is mandatory' }],
                  })(<InputNumber
                    className="fullwidth"
                    initialValue={1000}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  />)}
                </Form.Item>
                <Form.Item label="amountVAT">
                  {form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password' }],
                  })(<Input size="default" type="password" />)}
                </Form.Item>
                <Form.Item label="amountGross">
                  {form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password' }],
                  })(<Input size="default" type="password" />)}
                </Form.Item>
                <div className="form-actions">
                  <Button
                    type="default"
                    className="right"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    className="right mr-4"
                  >
                    Add invoice
                  </Button>
                  <div className="clearfix" />
                </div>
              </Form>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card form-card">
              <CalendarRange />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form.create({ name: 'add_invoice' })(InvoiceForm)));