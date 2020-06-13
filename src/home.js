import React from "react";
import Transactions from "./transactions";

const transactions = [
  {
    id: '6c3a6c5b3a6',
    description: 'Coffee',
    value: 4.4,
    date: '2020-06-12T10:10:10'
  },
  {
    id: 'g709f7fg977',
    description: 'Book',
    value: 44,
    date: '2020-06-10T10:10:10'
  },
];

class Home extends React.Component {
  state = { transactions: transactions, loading: true };
  componentDidMount() { }  

  render() {
    return <Transactions transactions={this.state.transactions} />;
  }
}

export default Home;