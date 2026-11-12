
import { useAuth } from "../../../context/AuthContext";
import{ Link, useNavigate } from"react-router-dom";
import "./Dashboard.css";
export const Dashboard= () => {

    const  {logout}=useAuth()

    return (
    <div className="dashboard ">
        <header className="dashboard-header ">
            <h2>Panel de Admistración</h2>
 
            <div className="header-actions">
               <Link className="btn-secondary" to="/">Volver a la Tienda</Link>

            <button className="btn bg-delete primary" 
            onClick={logout}>Cerrar Sesion</button>
            
            </div>
           </header>  
         <section className="dashboard-actions">
          <h3>Acciones Rapidas</h3>
         
         <div className="actions-grid">
               
        
            <Link to="/admin/products/new" className="action-card">
            ➕Cargar
            </Link>
            <Link to="#" className="action-card disabled"
           > ✏️Modificar</Link>
            <Link to="#" className="action-card disabled"
            >🗑️Eliminar</Link>
            </div>
            </section>
        
        <section className="dashboard-help">
            <h3>Ayuda</h3>
            <p> Desde este panel podes gestionar los productos de la tienda.</p>
        </section>
</div>

     )
}