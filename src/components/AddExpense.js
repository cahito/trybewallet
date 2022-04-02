// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class AddExpense extends React.Component {
  render() {
    return (
      <form className="container">
        <div className="row">
          Por enquanto é teste, mas podia ser verdade...
        </div>

      </form>
    );
  }
}

export default connect()(AddExpense);
