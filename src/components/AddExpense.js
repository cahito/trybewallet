import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      // method: '',
      // tag: '',
      value: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { description, value } = this.state;
    const { currencies, loading } = this.props;
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
            type="number"
          >
            { console.log(currencies) }
            { loading
              ? <option>Carregando...</option>
              : currencies
                .map((eachOne, index) => <option key={ index }>{eachOne}</option>) }
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
            onChange={ this.handleOnChange }
            type="text"
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
            type="text"
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
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('StatetoProps do AddExpense', state);
  return {
    currencies: state.wallet.currencies,
    loading: state.wallet.isFetching,
  };
};

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AddExpense);
