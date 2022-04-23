import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TEN = 10;

class ExpensesLines extends React.Component {
  mountTable = () => {
    const { expenses } = this.props;
    // console.log('mountTable', expenses);
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
        <td>{ currency }</td>
        <td>{ exchangeRates[currency].ask }</td>
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
            Editar despesa
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
    dispatchDeleteExpense(target);
  }

  handleEdit = ({ target }) => {
    const { dispatchEditExpense } = this.props;
    dispatchEditExpense(target);
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

ExpensesLines.propTypes = {
  // dispatchDeleteExpense: PropTypes.func,
  // dispatchEditExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(ExpensesLines);
