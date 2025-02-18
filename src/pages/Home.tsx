import { useExpenseStore } from "../store";
import { format } from "date-fns";

const Home = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      <div className="mt-4 bg-gray-100 p-4 rounded">
        <p>Total du mois : <strong>{total} FCFA</strong></p>
      </div>
      <h2 className="mt-4 text-xl">Dernières dépenses</h2>
      <ul>
        {expenses.slice(0, 5).map((exp) => (
          <li key={exp.id} className="p-2 border-b">{exp.description} - {exp.amount} FCFA - {format(new Date(exp.date), "dd/MM/yyyy")}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;