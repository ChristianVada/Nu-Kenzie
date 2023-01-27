import { Card } from "../Card";

export function List({ listTransactions }) {
  return listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
}
