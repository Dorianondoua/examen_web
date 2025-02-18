import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExpenseStore, Expense } from "../store";

const ExpenseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addExpense, updateExpense, expenses } = useExpenseStore();

  const [form, setForm] = useState<Expense>({
    id: Date.now(),
    amount: 0,
    date: new Date().toISOString().split("T")[0],
    category: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const expense = expenses.find((e) => e.id === Number(id));
      if (expense) setForm(expense);
    }
  }, [id, expenses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) updateExpense(form);
    else addExpense(form);
    navigate("/expenses");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} className="border p-2 w-full mb-2" placeholder="Montant" required />
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="border p-2 w-full mb-2" required />
      <input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="border p-2 w-full mb-2" placeholder="Catégorie" required />
      <input type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 w-full mb-2" placeholder="Description" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Enregistrer</button>
    </form>
  );
};

export default ExpenseForm;