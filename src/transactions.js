import React from "react";
import Transaction from "./transaction";

const Transactions = ({ transactions: transactions }) => {
  return <div>
      {transactions.map(item => (
        <Transaction item={item} />
      ))}
  </div>
};

export default Transactions;
