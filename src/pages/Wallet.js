import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { loading } = this.props;
    this.state = {
      isLoading: loading,
    };
  }

  async componentDidMount() {
    const { isLoading } = this.state;
    console.log(isLoading);
    const { getCurrencies, loading } = this.props;
    await getCurrencies();
    this.setState({
      isLoading: loading,
    });
    console.log(isLoading);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Header />
        { isLoading
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
  getCurrencies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
