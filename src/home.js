import React from "react";

const transactions = [
  {
    id: '6c3a6c5b3a6',
    description: 'Coffee',
    cost: 4.4,
    date: '2020-06-12T10:10:10'
  },
  {
    id: 'g709f7fg977',
    description: 'Book',
    cost: 44,
    date: '2020-06-10T10:10:10'
  },
];

export default function Home() {
  return <ul>
          {transactions.map(item => (
            <li key={item.id}>
              <div>{item.id}</div>
              <div>{item.description}</div>
              <div>{item.cost}</div>
              <div>{item.date}</div>
            </li>
          ))}
        </ul>;
}
