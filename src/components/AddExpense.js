import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense, fetchRatios } from '../actions';

const USD = 'USD';
const DINHEIRO = 'Dinheiro';
const ALIMENTACAO = 'Alimentação';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: USD,
      description: '',
      method: DINHEIRO,
      tag: ALIMENTACAO,
      value: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { getRatios } = this.props;
    await getRatios();
    const { dispatchAddExpense, expensesQuantity, ratios } = this.props;
    const {
      currency,
      description,
      method,
      tag,
      value,
    } = this.state;
    const expense = {
      id: expensesQuantity,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: ratios,
    };
    dispatchAddExpense(expense);
    this.setState({
      currency: USD,
      description: '',
      method: DINHEIRO,
      tag: ALIMENTACAO,
      value: 0,
    });
  }

  render() {
    const { currency, description, method, tag, value } = this.state;
    const { currencies } = this.props;
    return (
      <form className="d-flex p-2 bg-secondary text-white">
        <div className="input-group col">
          <label htmlFor="value">
            Valor:
            {' '}
          </label>
          <input
            data-testid="value-input"
            id="value"
            name="value"
            onChange={ this.handleChange }
            type="number"
            value={ value }
          />
        </div>
        <div className="input-group col">
          <label htmlFor="currency">
            Moeda:
            {' '}
          </label>
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            onChange={ this.handleChange }
            type="number"
            value={ currency }
          >
            {currencies
              ? currencies
                .map((eachOne, index) => <option key={ index }>{eachOne}</option>)
              : <option>Carregando...</option>}
          </select>
        </div>
        <div className="input-group col">
          <label htmlFor="method">
            Método de pagamento:
            {' '}
          </label>
          <select
            data-testid="method-input"
            id="method"
            name="method"
            onChange={ this.handleChange }
            type="text"
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

        </div>
        <div className="input-group col">
          <label htmlFor="tag">
            Categoria:
            {' '}
          </label>
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            onChange={ this.handleChange }
            type="text"
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

        </div>
        <div className="input-group col">
          <label htmlFor="description">
            Descrição:
            {' '}
          </label>
          <input
            data-testid="description-input"
            id="description"
            name="description"
            onChange={ this.handleChange }
            type="text"
            value={ description }
          />
        </div>
        <div className="input-group col">
          <button
            className="btn btn-success"
            onClick={ this.handleClick }
            type="button"
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesQuantity: state.wallet.expenses.length,
  isEditable: state.wallet.isEditable,
  loading: state.wallet.isFetching,
  ratios: state.wallet.ratios,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddExpense: (expense) => dispatch(addExpense(expense)),
  getRatios: () => dispatch(fetchRatios()),
});

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  dispatchAddExpense: PropTypes.func,
  getRatios: PropTypes.func,
  expensesQuantity: PropTypes.number,
  isEditable: PropTypes.bool,
  loading: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
