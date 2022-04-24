import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ExpensesLines from './ExpensesLines';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    // const { loading } = this.props;
    this.state = {
      // isLoading: loading,
    };
  }

  render() {
    const { expenses } = this.props;
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
          {/* { console.log(expenses) } */}
          { expenses && <ExpensesLines /> }
        </tbody>
        <tfoot>
          <tr>
            <th>Fim</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  dispatchDeleteExpense: PropTypes.func,
  dispatchEditExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(ExpensesTable);
