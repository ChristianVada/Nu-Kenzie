import { FaTrash } from "react-icons/fa";

export function Card({ transaction }) {
  return (
    <li>
      <p>{transaction.description}</p>
      <p>{transaction.value}</p>
      <p>{transaction.type}</p>
      <FaTrash />
    </li>
  );
}
