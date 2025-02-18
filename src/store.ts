import { create } from "zustand";

export interface Expense {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (updatedExpense: Expense) => void;
  removeExpense: (id: number) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: JSON.parse(localStorage.getItem("expenses") || "[]"),

  addExpense: (expense) => 
    set((state) => {
      const newExpenses = [...state.expenses, expense];
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      return { expenses: newExpenses };
    }),

  updateExpense: (updatedExpense) =>
    set((state) => {
      const newExpenses = state.expenses.map((exp) =>
        exp.id === updatedExpense.id ? updatedExpense : exp
      );
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      return { expenses: newExpenses };
    }),

  removeExpense: (id) =>
    set((state) => {
      const newExpenses = state.expenses.filter((exp) => exp.id !== id);
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      return { expenses: newExpenses };
    }),
}));