import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DineIn from './pages/DineIn';
import TakeAway from './pages/TakeAway';
import TableManagementPage from './pages/TableManagementPage';
import NewOrder from './pages/NewOrder';
import CategoryPage from './pages/CategoryPage';
import TaxPage from './pages/TaxPage';
import DishPage from './pages/DishPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dine-in" element={<DineIn />} />
          <Route path="take-away" element={<TakeAway />} />
          <Route path="tables" element={<TableManagementPage />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="taxes" element={<TaxPage />} />
          <Route path="dishes" element={<DishPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 