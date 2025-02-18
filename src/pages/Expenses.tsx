import { useExpenseStore } from "../store";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Expenses = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const removeExpense = useExpenseStore((state) => state.removeExpense);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Dépenses</h1>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id} className="p-2 border-b flex justify-between">
            <span>{exp.description} - {exp.amount} FCFA - {format(new Date(exp.date), "dd/MM/yyyy")}</span>
            <div>
              <Link to={`/expense/${exp.id}`} className="text-blue-500 mr-2">Modifier</Link>
              <button onClick={() => removeExpense(exp.id)} className="text-red-500">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;