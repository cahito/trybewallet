import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    // const { loading } = this.props;
    this.state = {
      // isLoading: loading,
    };
  }

  selectRow = () => {

  }

  mountTable = () => {
    const { expenses } = this.props;
    expenses.map((eachExpense, index) => (
      <tr key={ index } id={ index }>
        <th>{index + 1}</th>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>{eachExpense}</td>
        <td>Real</td>
        <td>XD</td>
      </tr>
    ));
  }

  render() {
    return (
      <table className="table table-hover table-striped table-bordered">
        <thead className="table-success">
          <tr>
            <th scope="col text-center">#</th>
            <th scope="col text-center">Descrição</th>
            <th scope="col text-center">Tag</th>
            <th scope="col text-center">Método de pagamento</th>
            <th scope="col text-center">Valor</th>
            <th scope="col text-center">Moeda</th>
            <th scope="col text-center">Câmbio utilizado</th>
            <th scope="col text-center">Valor convertido</th>
            <th scope="col text-center">Moeda de conversão</th>
            <th scope="col text-center">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th>1</th>
            <td>Jantar caro</td>
            <td>Alimentação</td>
            <td>Cartão de crédito</td>
            <td>104.50</td>
            <td>USD</td>
            <td>4.67</td>
            <td>488.015</td>
            <td>Real</td>
            <td>XD</td>
          </tr> */}
          { this.mountTable() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = () => ({
  // getCurrencies: () => dispatch(fetchCurrencies()),
});

ExpensesTable.propTypes = {
  // getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
