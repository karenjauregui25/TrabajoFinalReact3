import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Login.css";
import{ useAuth  } from "../../context/AuthContext";


export const Login = () => {
    const {login}= useAuth ();
    const navigate =useNavigate();
    const [formData,setFormData ]= useState({email:"", password:"",});
   
     const handleChange= (e) => {
        const { name, value  }= e.target 
    
        setFormData ({...formData, [name]: value} );
    } ;

    const handleSubmit = async (e) => { e.preventDefault();

        try { await login (formData.email, formData.password);
           
            navigate ("/admin", {replace: true});

}catch (error)
{console.error(error) ;
 alert ("Error al iniciar sesion");
    }    
        }  ;

return ( <form onSubmit ={handleSubmit} className= "login-form ">


<h2>Iniciar sesion</h2>

<div className="form-group ">
<label >Email</label>
<input type="email" 
        name="email" 
        placeholder="Correo Electronico"
        value={formData.email}
        onChange={handleChange}
        required
        />
    
</div>



    <div className="form-group ">
<label >Contraseña</label>
<input type="password"
        name="password"
        placeholder="Contraseña" 
        value={formData.password}
        onChange={handleChange}
        required
        />

    </div>

<button className="btn bg-primary"type="submit">Ingresar
</button>
</form>

);

}