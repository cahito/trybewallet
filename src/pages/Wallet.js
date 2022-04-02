import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import { fetchCurrencies } from '../redux/actions';

class Wallet extends React.Component {
  constructor() {
    super();
    // const { loading } = this.props;
    this.state = {
      isLoading: false, // loading,
    };
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Header />
        <AddExpense />
        { isLoading
          ? <div>Carregando...</div>
          : <div>Trybe Wallet</div> }
      </>
    );
  }
}

/* const mapStateToProps = (state) => ({
  loading: state.wallet.isFetching,
}); */

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
