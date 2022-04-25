import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense, editExpense } from '../actions';

const TEN = 10;

class ExpensesLines extends React.Component {
  /* componentDidMount() {
    this.mountTable();
  }

  shouldComponentUpdate(nextProps) {
    const { expenses } = this.props;
    if (expenses !== nextProps.expenses) {
      this.forceUpdate();
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.mountTable();
  } */

  mountTable = () => {
    const { expenses } = this.props;
    return expenses.map(({
      id,
      description,
      exchangeRates,
      tag,
      method,
      value,
      currency,
    }) => (
      <tr key={ id } id={ id }>
        <th>{ id + 1 }</th>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ (parseFloat(value, TEN)).toFixed(2) }</td>
        <td>{ exchangeRates[currency].name }</td>
        <td>{ (parseFloat(exchangeRates[currency].ask, TEN)).toFixed(2) }</td>
        <td className="converted">
          {
            (value * exchangeRates[currency].ask).toFixed(2)
          }
        </td>
        <td>Real</td>
        <td>
          <button
            className="btn btn-warning"
            data-testid="edit-btn"
            onClick={ this.handleEdit }
            type="button"
          >
            Editar
          </button>
          {' '}
          <button
            className="btn btn-danger"
            data-testid="delete-btn"
            onClick={ this.handleDelete }
            type="button"
          >
            Excluir
          </button>
        </td>
      </tr>
    ));
  }

  handleDelete = ({ target }) => {
    const { dispatchDeleteExpense } = this.props;
    const rowID = target.parentNode.parentNode.id;
    dispatchDeleteExpense(rowID);
  }

  handleEdit = ({ target }) => {
    const { dispatchEditExpense } = this.props;
    const rowID = target.parentNode.parentNode.id;
    dispatchEditExpense(rowID);
  }

  render() {
    const { expenses } = this.props;
    return (
      expenses ? this.mountTable() : <span>Carregando...</span>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (expense) => dispatch(delExpense(expense)),
  dispatchEditExpense: (expense) => dispatch(editExpense(expense)),
});

ExpensesLines.propTypes = {
  dispatchDeleteExpense: PropTypes.func,
  dispatchEditExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesLines);
