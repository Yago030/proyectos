import { useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); //lo iniciamos como un arreglo vacio
  const [paciente, setPaciente] = useState({}); //lo iniciamos como un objet vacio

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes([...pacientesActualizados]); // Asegurémonos de actualizar con una copia del estado
  };
  
  //...
  
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  
  return (
    <div className="container mx-auto mt-20">
       <Header 
       />

       <div className=" mt-12 md:flex">

            <Formulario
            //aca los cargamos
           
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            
             />
            
            <ListadoPacientes
                //con este prop se lo mando al listado
            pacientes={pacientes}
            setPaciente={setPaciente}

            paciente={paciente} // Agregar esta línea para pasar el paciente seleccionado al ListadoPacientes
            eliminarPaciente={eliminarPaciente}
             />

       </div>
       
    </div>
  )
}

export default App
