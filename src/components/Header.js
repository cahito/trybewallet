import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { email } = this.props;
    this.state = {
      userEmail: email,
      totalValue: 0,
    };
  }

  componentDidMount() {
    console.log('Recuperar as informações do store');
  }

  render() {
    const { totalValue, userEmail } = this.state;
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container d-flex justify-content-center mx-auto">
          <div className="col-3" data-testid="email-field">{ userEmail }</div>
          <div className="col-1" data-testid="header-currency-field">BRL</div>
          <div className="col-2" data-testid="total-field">
            Valor Total:
            {' '}
            R$
            { totalValue }
          </div>
          <div className="col-3">Teste 4</div>
          <div className="col-3 ">Teste 5</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = (dispatch) => ({
//   // login: (e) => dispatch(loginAction(e)),
// });

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
