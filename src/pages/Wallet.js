import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  renderWithEditable = () => {
    const { isEditable } = this.props;
    return (isEditable ? <EditExpense /> : <AddExpense />);
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <Header />
        { loading
          ? <div>Carregando...</div>
          : this.renderWithEditable() }
        <ExpensesTable />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isEditable: state.wallet.isEditable,
  loading: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
  isEditable: PropTypes.bool,
  loading: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
