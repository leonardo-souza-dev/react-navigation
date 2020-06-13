import React from "react";

const Transaction = ({ item: transaction }) => {
  return (
    <div>
      <input type="text" value={transaction.description}/>
      <input type="text" value={transaction.value}/>
      <input type="text" value={transaction.date}/><br/>
    </div>
  );
};

export default Transaction;
