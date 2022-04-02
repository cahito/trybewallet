import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isDisabled: true,
      noLogin: true,
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validate);
  }

  validate = () => {
    const MIN_PASS_LENGTH = 6;
    const { password, email } = this.state;
    // validação de e-mail por regex obtido no site: https://www.w3resource.com/javascript/form/email-validation.php
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validEmail = emailFormat.test(email);
    if (password.length >= MIN_PASS_LENGTH && validEmail) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login({ email, password });
    this.setState({
      noLogin: false,
    });
  }

  render() {
    const { email, isDisabled, noLogin, password } = this.state;
    return (
      <div className="container-md input-group flex-row mt-3">
        <input
          className="form-control"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
          placeholder="E-mail"
          type="email"
          value={ email }
        />
        <input
          className="form-control"
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
          placeholder="Senha"
          type="password"
          value={ password }
        />
        <button
          className="btn btn-outline-primary"
          disabled={ isDisabled }
          onClick={ this.handleLogin }
          type="button"
        >
          Entrar
        </button>
        { noLogin
          ? ''
          : <Redirect to="/carteira" /> }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginAction(event)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
