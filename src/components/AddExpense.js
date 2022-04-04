import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    const { currencies, loading } = this.props;
    this.state = {
      currencies,
      description: '',
      isLoading: loading,
      method: '',
      tag: '',
      value: 0,
    };
  }

  componentDidMount() {
    console.log('AddExpense montou');
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  mapCurrencies = async () => {
    const { currencies } = this.props;
    const temporary = await currencies;
    const arrayOfCurrencies = temporary
      .map((eachOne, index) => <option key={ index }>{eachOne}</option>);
    console.log(arrayOfCurrencies);
    return arrayOfCurrencies;
  }

  render() {
    const { currencies, description, isLoading, value } = this.state;
    return (
      <form className="d-flex p-3 bg-secondary text-white">

        <div className="input-group">
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
        <div className="input-group">
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
            { isLoading
              ? <option>USD</option>
              : currencies}
          </select>

        </div>
        <div className="input-group">
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
        <div className="input-group">
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
        <div className="input-group">
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

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.isFetching,
});

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AddExpense);
