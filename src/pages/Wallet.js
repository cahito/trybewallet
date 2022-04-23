import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  render() {
    const { loading } = this.props;
    return (
      <>
        <Header />
        { loading
          ? <div>Carregando...</div>
          : <AddExpense /> }
        <ExpensesTable />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
  loading: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
