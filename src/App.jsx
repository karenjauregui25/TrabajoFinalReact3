import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { AdminLayOut } from "./layouts/AdminLayout";
import { PublicLayout } from "./layouts/PublicLayout";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";

import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  return (
    <Routes>

      {/* RUTAS PUBLICAS */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
      </Route>

      {/* LOGIN ADMIN */}
      <Route path="/admin/login" element={<Login />} />

      {/* PANEL ADMINISTRADOR */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayOut />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to ={<Dashboard />} />} />
         <Route path="dashboard" element={<Dashboard />} />
        
        

        <Route
          path="products/new"
          element={<ProductFormContainer />}
        />

        <Route
          path="products/success/:id"
          element={<ProductSuccess />}
        />
      </Route>

      
    </Routes>
  );
}

export default App;