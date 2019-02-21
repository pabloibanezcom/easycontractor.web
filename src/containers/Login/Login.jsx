import { Button, Form, Input } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from 'actions/auth';
import styles from './style.module.scss';

class Login extends React.Component {

  componentDidMount() {
    const { logout } = this.props;
    logout();
  }

  onSubmit = event => {
    const { login } = this.props;
    event.preventDefault()
    const { form } = this.props
    form.validateFields((error, values) => {
      if (!error) {
        login(values.email, values.password);
      }
    })
  }

  render() {
    const {
      form,
      externalLogin
    } = this.props
    return (
      <div>
        <Helmet title="Login" />
        <div className={styles.title}>
          <h1>
            <strong>WELCOME TO EASYCONTRACTOR</strong>
          </h1>
          <p>
            Pluggable enterprise-level react application framework.
            <br />
            An excellent front-end solution for web applications built upon Ant Design and UmiJS.
            <br />
            Credentials for testing purposes - <strong>admin@mediatec.org</strong> /{' '}
            <strong>cleanui</strong>
          </p>
        </div>
        <div className={styles.block}>
          <div className="row">
            <div className="col-xl-12">
              <div className={styles.inner}>
                <div className={styles.form}>
                  <h4 className="text-uppercase">
                    <strong>Please log in</strong>
                  </h4>
                  <br />
                  <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                    <Form.Item label="Email">
                      {form.getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your e-mail address' }],
                      })(<Input size="default" />)}
                    </Form.Item>
                    <Form.Item label="Password">
                      {form.getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password' }],
                      })(<Input size="default" type="password" />)}
                    </Form.Item>
                    <div className="form-actions">
                      <Button
                        type="primary"
                        className="width-150 mr-4"
                        htmlType="submit"
                      >
                        Login
                      </Button>
                      <Button
                        type="primary"
                        className="right btn-google"
                        icon="google"
                        onClick={() => externalLogin('google')}
                      >
                        Login with Google
                      </Button>
                      <div className="clearfix" />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    externalLogin: (provider) => dispatch(actions.externalLoginStart(provider)),
    login: (email, password) => dispatch(actions.loginStart(email, password)),
    logout: () => dispatch(actions.logoutStart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedNormalLoginForm));