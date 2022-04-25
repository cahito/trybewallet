import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExpense } from '../actions';

class EditExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      currency: '',
      description: '',
      method: '',
      tag: '',
      value: 0,
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { editID, expenses } = this.props;
    // console.log(expenses[editID]);
    const {
      id,
      currency,
      description,
      method,
      tag,
      value,
      exchangeRates,
    } = expenses[editID];
    this.setState({
      id,
      currency,
      description,
      method,
      tag,
      value,
      exchangeRates,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { dispatchUpdateExpense, editID } = this.props;
    const {
      id,
      currency,
      description,
      method,
      tag,
      value,
      exchangeRates,
    } = this.state;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatchUpdateExpense(editID, expense);
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
            className="btn btn-primary"
            data-testid="edit-btn"
            onClick={ this.handleClick }
            type="button"
          >
            Editar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editID: state.wallet.editID,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateExpense: (editID, expense) => dispatch(updateExpense(editID, expense)),
});

EditExpense.propTypes = {
  dispatchUpdateExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
