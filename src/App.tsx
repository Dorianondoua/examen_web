import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import ExpenseForm from "./pages/ExpensesForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/expense/:id?" element={<ExpenseForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;