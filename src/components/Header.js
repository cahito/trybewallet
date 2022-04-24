import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const TEN = 10;

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
    this.sumExpenses();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { expenses } = this.props;
    const { totalValue } = this.state;
    if (expenses !== nextProps.expenses) {
      this.sumExpenses();
      return true;
    }
    if (totalValue !== nextState.totalValue) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.sumExpenses();
  }

  sumExpenses = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, cur) => {
      const { currency } = cur;
      acc += (cur.value * cur.exchangeRates[currency].ask);
      return acc;
    }, 0);
    this.setState({ totalValue: parseFloat(total.toFixed(2), TEN) });
    // console.log('sumExpenses', expenses);
  }

  render() {
    const { totalValue, userEmail } = this.state;
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container-fluid d-flex justify-content-between mx-auto">
          <div className="col-3" data-testid="email-field">{userEmail}</div>
          <div className="container d-flex row justify-content-end">
            <div className="col-1" data-testid="header-currency-field">BRL</div>
            <div className="col-2" data-testid="total-field">{totalValue}</div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
