import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  tableHeader = (
    <table className="container-xxl">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Descrição</th>
        <th scope="col">Tag</th>
        <th scope="col">Método de pagamento</th>
        <th scope="col">Valor</th>
        <th scope="col">Moeda</th>
        <th scope="col">Câmbio utilizado</th>
        <th scope="col">Valor convertido</th>
        <th scope="col">Moeda de conversão</th>
        <th scope="col">Editar/Excluir</th>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Jantar caro</td>
        <td>Alimentação</td>
        <td>Cartão de crédito</td>
        <td>104.50</td>
        <td>USD</td>
        <td>4.67</td>
        <td>488.015</td>
        <td>USD/BRL</td>
        <td>XD</td>
      </tr>
    </table>
  );

  constructor(props) {
    super(props);
    const { loading } = this.props;
    this.state = {
      isLoading: loading,
    };
  }

  render() {
    const { isLoading } = this.state;
    return (
      isLoading
        ? <p>Carregando...</p>
        : this.tableHeader
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.wallet.isFetching,
});

const mapDispatchToProps = () => ({
  // getCurrencies: () => dispatch(fetchCurrencies()),
});

ExpensesTable.propTypes = {
  // getCurrencies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
